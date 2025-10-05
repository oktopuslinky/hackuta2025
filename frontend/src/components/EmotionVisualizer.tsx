import React, { useState } from "react";
import Plot from "react-plotly.js";
import type { Data, Layout } from 'plotly.js';
import { analyzeConversationEmotion } from '../emotionalToneDetection';
import './EmotionVisualizer.css';

// Helper to calculate a simple moving average for the volume envelope
function movingAverage(data: Float32Array, windowSize: number): Float32Array {
  const result = new Float32Array(data.length);
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
    if (i >= windowSize) {
      sum -= data[i - windowSize];
    }
    result[i] = sum / Math.min(i + 1, windowSize);
  }
  return result;
}

// Helper to parse time strings like "m:ss" into seconds
function timestrToSeconds(ts: string): number {
  const parts = ts.split(':').map(p => parseFloat(p.trim()));
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return 0;
}

interface Segment {
  start: number;
  end: number;
  duration: number;
  emotion: string;
}

// Define a type for the analysis result to avoid using 'any'
interface AnalysisResult {
  timestamps: { [key: string]: string };
  secondary_emotions: string[];
}

export default function EmotionVisualizer() {
  const [plotData, setPlotData] = useState<Data[] | null>(null);
  const [plotLayout, setPlotLayout] = useState<Partial<Layout>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setPlotData(null); // Reset plot when new file is selected
      setStatus('idle');
    }
  };

  const handleAnalyzeClick = async () => {
    if (!selectedFile) {
      setError("Please select an audio file first.");
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError(null);
    setPlotData(null);

    try {
      // 1. Analyze Emotion
      const analysisData = await analyzeConversationEmotion(selectedFile) as AnalysisResult;
      if (!analysisData) {
        throw new Error("Failed to analyze audio. The analysis returned no data.");
      }

      // 2. Decode Audio Data
      const audioCtx = new AudioContext();
      const arrayBuffer = await selectedFile.arrayBuffer();
      const decoded = await audioCtx.decodeAudioData(arrayBuffer);
      const channelData = decoded.getChannelData(0);
      const sampleRate = decoded.sampleRate;
      const timePoints = Array.from({ length: channelData.length }, (_, i) => i / sampleRate);

      // Downsample for performance
      const maxPoints = 120000;
      const step = Math.max(1, Math.floor(channelData.length / maxPoints));
      const plotTime = [];
      const plotWaveform = [];
      for (let i = 0; i < timePoints.length; i += step) {
        plotTime.push(timePoints[i]);
        plotWaveform.push(channelData[i]);
      }

      // 3. Calculate Volume Envelope
      const absAudio = new Float32Array(plotWaveform.map(Math.abs));
      const effectiveSampleRate = sampleRate / step;
      const windowSize = Math.floor(effectiveSampleRate * 0.025); // 25ms window
      const envelope = movingAverage(absAudio, windowSize);
      
      let maxEnv = 0;
      for (let i = 0; i < envelope.length; i++) {
        if (envelope[i] > maxEnv) {
          maxEnv = envelope[i];
        }
      }
      
      const plotEnvelope = maxEnv > 0 ? Array.from(envelope).map(v => v / maxEnv) : Array.from(envelope);

      // 4. Parse Timestamps and Emotions
      const timestamps = analysisData.timestamps || {};
      const primarySegments: Segment[] = Object.entries(timestamps).map(([range, emotion]) => {
        const [startStr, endStr] = range.split("-");
        const start = timestrToSeconds(startStr);
        const end = timestrToSeconds(endStr);
        return { start, end, duration: end - start, emotion: emotion as string };
      }).sort((a, b) => a.start - b.start);

      if (primarySegments.length === 0) {
        throw new Error("No valid timestamps found in the analysis data.");
      }

      const maxSegmentEnd = primarySegments.reduce((max, seg) => Math.max(max, seg.end), 0);
      const totalDuration = Math.max(maxSegmentEnd, timePoints.length > 0 ? timePoints[timePoints.length - 1] : 0);
      
      const secondaryEmotions = analysisData.secondary_emotions || [];
      const secondarySegments: Segment[] = [];
      if (secondaryEmotions.length > 0) {
        const secLen = totalDuration / secondaryEmotions.length;
        secondaryEmotions.forEach((emo: string, i: number) => {
          const start = i * secLen;
          const end = (i + 1) * secLen;
          secondarySegments.push({ start, end, duration: end - start, emotion: emo });
        });
      }

      // 5. Define Color Palette
      const PALETTE = ["#FF7F7F", "#FFA07A", "#FFD580", "#FFE4A1", "#C1E1C1", "#9FD3C7", "#9BC4F0", "#B39DF0"];
      const uniquePrimary = [...new Set(primarySegments.map(s => s.emotion))];
      const colorMapPrimary = Object.fromEntries(uniquePrimary.map((e, i) => [e, PALETTE[i % PALETTE.length]]));
      const uniqueSecondary = [...new Set(secondaryEmotions)];
      const colorMapSecondary = Object.fromEntries(uniqueSecondary.map((e, i) => [e, PALETTE[(i + 4) % PALETTE.length]]));

      // 6. Build Plotly Traces
      const traces: Data[] = [];
      traces.push({
        x: plotTime, y: plotWaveform, mode: 'lines', name: 'Waveform',
        line: { color: "#2c3e50", width: 0.8 }, yaxis: 'y1', hoverinfo: 'none',
      });
      traces.push({
        x: plotTime, y: plotEnvelope, fill: 'tozeroy', fillcolor: 'rgba(100, 149, 237, 0.25)',
        line: { width: 0 }, name: 'Volume', yaxis: 'y1',
        hovertemplate: 'Time: %{x:.2f}s<br>Volume: %{y:.2f}<extra></extra>',
      });
      primarySegments.forEach(seg => {
        traces.push({
          type: 'bar', x: [seg.duration], y: ['Primary'], base: seg.start, orientation: 'h',
          marker: { color: colorMapPrimary[seg.emotion] }, name: seg.emotion, yaxis: 'y2',
          hovertemplate: `<b>Primary: ${seg.emotion}</b><br>Duration: %{x:.2f}s<extra></extra>`,
          showlegend: false,
        } as Data);
      });
      secondarySegments.forEach(seg => {
        traces.push({
          type: 'bar', x: [seg.duration], y: ['Secondary'], base: seg.start, orientation: 'h',
          marker: { color: colorMapSecondary[seg.emotion] }, name: seg.emotion, yaxis: 'y3',
          hovertemplate: `<b>Secondary: ${seg.emotion}</b><br>Duration: %{x:.2f}s<extra></extra>`,
          showlegend: false,
        } as Data);
      });

      setPlotData(traces);

      // 7. Define Plotly Layout
      setPlotLayout({
        // @ts-expect-error - The 'template' property accepts a string, but the type definition is too strict.
        template: 'plotly_white',
        height: 800,
        margin: { l: 120, r: 30, t: 100, b: 80 },
        title: { text: "Audio Emotion Analysis — Waveform + Timelines", x: 0.5 },
        hovermode: 'x unified',
        xaxis: { title: { text: 'Time (seconds)' }, range: [0, totalDuration * 1.02] },
        yaxis: { domain: [0.6, 1.0], title: { text: 'Waveform / Volume' } },
        yaxis2: { domain: [0.3, 0.55], title: { text: 'Primary Emotion' }, showticklabels: false },
        yaxis3: { domain: [0.0, 0.25], title: { text: 'Secondary Emotion' }, showticklabels: false },
        grid: { rows: 3, columns: 1, pattern: 'independent' },
        showlegend: true,
        legend: { orientation: "h", yanchor: "bottom", y: -0.25, xanchor: "center", x: 0.5 }
      });
      setStatus('idle');

    } catch (err) {
      console.error("Failed to create plot:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred during analysis.");
      setStatus('error');
    }
  };

  return (
    <div className="visualizer-container">
      <div className="visualizer-header">
        <h1>Emotion Visualizer</h1>
        <p>Upload a WAV audio file to analyze its emotional content.</p>
      </div>
      
      <div className="controls-container">
        <label htmlFor="file-upload" className="custom-file-upload">
          {selectedFile ? selectedFile.name : 'Choose File'}
        </label>
        <input id="file-upload" type="file" accept=".wav,audio/wav" onChange={handleFileChange} />
        <button onClick={handleAnalyzeClick} disabled={!selectedFile || status === 'loading'} className="analyze-button">
          {status === 'loading' ? 'Analyzing...' : 'Analyze Audio'}
        </button>
      </div>

      {status === 'error' && (
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
      )}

      {status === 'loading' && <p className="loading-message">Loading visualization...</p>}

      {plotData && (
        <div className="plot-container">
          <Plot
            data={plotData}
            layout={plotLayout}
            config={{ responsive: true }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
    </div>
  );
}