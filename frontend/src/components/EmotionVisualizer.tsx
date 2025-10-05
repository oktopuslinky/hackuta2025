import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import type { Data, Layout } from 'plotly.js';

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
  const parts = ts.split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  return 0;
}

interface Segment {
  start: number;
  end: number;
  duration: number;
  emotion: string;
}

export default function EmotionVisualizer() {
  const [plotData, setPlotData] = useState<Data[]>([]);
  const [plotLayout, setPlotLayout] = useState<Partial<Layout>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function createPlot() {
      try {
        // 1. Load JSON and Audio Data
        const json = await fetch("/detailed_analysis.json").then(res => res.json());
        const audioCtx = new AudioContext();
        const audioData = await fetch("/audio.wav").then(r => r.arrayBuffer());
        const decoded = await audioCtx.decodeAudioData(audioData);
        const channelData = decoded.getChannelData(0);
        const sampleRate = decoded.sampleRate;
        const timePoints = Array.from({ length: channelData.length }, (_, i) => i / sampleRate);

        // Downsample for performance
        const maxPoints = 20000;
        const step = Math.max(1, Math.floor(channelData.length / maxPoints));
        const plotTime = [];
        const plotWaveform = [];
        for (let i = 0; i < timePoints.length; i += step) {
          plotTime.push(timePoints[i]);
          plotWaveform.push(channelData[i]);
        }

        // 2. Calculate Volume Envelope on DOWNSAMPLED data
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
        const plotEnvelope = maxEnv > 0 ? Array.from(envelope.map(v => v / maxEnv)) : Array.from(envelope);

        // 3. Parse Timestamps and Emotions
        const primarySegments: Segment[] = Object.entries(json.timestamps).map(([range, emotion]) => {
          const [start, end] = range.split("-").map(timestrToSeconds);
          return { start, end, duration: end - start, emotion: emotion as string };
        });
        const maxSegmentEnd = primarySegments.reduce((max, seg) => Math.max(max, seg.end), 0);
        const lastTimePoint = timePoints.length > 0 ? timePoints[timePoints.length - 1] : 0;
        const totalDuration = Math.max(maxSegmentEnd, lastTimePoint);

        const secondaryEmotions = json.secondary_emotions || [];
        const secondarySegments: Segment[] = [];
        if (secondaryEmotions.length > 0) {
          const secLen = totalDuration / secondaryEmotions.length;
          secondaryEmotions.forEach((emo: string, i: number) => {
            const start = i * secLen;
            const end = (i + 1) * secLen;
            secondarySegments.push({ start, end, duration: end - start, emotion: emo });
          });
        }

        // 4. Define Color Palette
        const PALETTE = ["#FF7F7F", "#FFA07A", "#FFD580", "#C1E1C1", "#9FD3C7", "#9BC4F0", "#B39DF0", "#F2B6E3"];
        const uniquePrimary = [...new Set(primarySegments.map(s => s.emotion))];
        const colorMapPrimary = Object.fromEntries(uniquePrimary.map((e, i) => [e, PALETTE[i % PALETTE.length]]));
        const uniqueSecondary = [...new Set(secondaryEmotions)];
        const colorMapSecondary = Object.fromEntries(uniqueSecondary.map((e, i) => [e, PALETTE[(i + 4) % PALETTE.length]]));

        // 5. Build Plotly Traces
        const traces = [];

        // Waveform Trace (Row 1)
        traces.push({
          x: plotTime,
          y: plotWaveform,
          mode: 'lines',
          name: 'Waveform',
          line: { color: "#2c3e50", width: 0.8 },
          yaxis: 'y1',
          hoverinfo: 'none',
        });

        // Volume Envelope Fill Trace (Row 1)
        traces.push({
          x: plotTime,
          y: plotEnvelope,
          fill: 'tozeroy',
          fillcolor: 'rgba(100, 149, 237, 0.25)',
          line: { width: 0 },
          name: 'Volume',
          yaxis: 'y1',
          hovertemplate: 'Time: %{x:.2f}s<br>Volume: %{y:.2f}<extra></extra>',
        });

        // Primary Emotions Timeline (Row 2)
        primarySegments.forEach(seg => {
          traces.push({
            type: 'bar',
            x: [seg.duration],
            y: ['Primary'],
            base: seg.start,
            orientation: 'h',
            marker: { color: colorMapPrimary[seg.emotion] },
            name: seg.emotion,
            yaxis: 'y2',
            hovertemplate: `<b>Primary: ${seg.emotion}</b><br>Duration: %{x:.2f}s<extra></extra>`,
            showlegend: false,
          });
        });

        // Secondary Emotions Timeline (Row 3)
        secondarySegments.forEach(seg => {
          traces.push({
            type: 'bar',
            x: [seg.duration],
            y: ['Secondary'],
            base: seg.start,
            orientation: 'h',
            marker: { color: colorMapSecondary[seg.emotion] },
            name: seg.emotion,
            yaxis: 'y3',
            hovertemplate: `<b>Secondary: ${seg.emotion}</b><br>Duration: %{x:.2f}s<extra></extra>`,
            showlegend: false,
          });
        });

        setPlotData(traces);

        // 6. Define Plotly Layout
        setPlotLayout({
          height: 800,
          // @ts-expect-error The plotly.js types are incorrect for string templates
          template: 'plotly_white',
          title: { text: "Audio Emotion Analysis — Waveform + Timelines", x: 0.5 },
          margin: { l: 120, r: 30, t: 100, b: 80 },
          hovermode: 'x unified',
          xaxis: { title: { text: 'Time (seconds)' }, range: [0, totalDuration] },
          yaxis: { domain: [0.6, 1.0], title: { text: 'Waveform' } },
          yaxis2: { domain: [0.3, 0.55], title: { text: 'Primary Emotion' }, showticklabels: false },
          yaxis3: { domain: [0.0, 0.25], title: { text: 'Secondary Emotion' }, showticklabels: false },
          grid: { rows: 3, columns: 1, pattern: 'independent' },
          showlegend: true,
          legend: { orientation: "h", yanchor: "bottom", y: -0.2, xanchor: "center", x: 0.5 }
        });

      } catch (error) {
        console.error("Failed to create plot:", error);
      } finally {
        setLoading(false);
      }
    }

    createPlot();
  }, []);

  if (loading) return <p>Loading visualization...</p>;

  return (
    <Plot
      data={plotData}
      layout={plotLayout}
      config={{ responsive: true }}
      style={{ width: "100%", height: "800px" }}
    />
  );
}
