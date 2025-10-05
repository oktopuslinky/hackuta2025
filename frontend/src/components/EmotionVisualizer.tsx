import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

interface Segment {
  start: number;
  end: number;
  emotion: string;
}

export default function EmotionVisualizer() {
  const [waveform, setWaveform] = useState<number[]>([]);
  const [time, setTime] = useState<number[]>([]);
  const [segments, setSegments] = useState<Segment[]>([]);

  // 1️⃣ Load JSON and decode audio on mount
  useEffect(() => {
    async function loadData() {
      // Load JSON
      try{
        console.log('before analyiss')
        const json = await fetch("/detailed_analysis.json").then(res => res.json());
        console.log('after analysis')

        // Parse timestamps
        const segs = Object.entries(json.timestamps).map(([range, emotion]) => {
          const [start, end] = range.split("-").map(t => {
            const [m, s] = t.split(":").map(Number);
            return m * 60 + s;
          });
          return { start, end, emotion: emotion as string };
        });
        setSegments(segs);

        // Decode audio waveform
        const audioCtx = new AudioContext();
        const audioData = await fetch("/audio.wav").then(r => r.arrayBuffer());
        console.log(audioData)
        const decoded = await audioCtx.decodeAudioData(audioData);
        const channelData = decoded.getChannelData(0);

        // Downsample to ~1000 points for plotting
        const step = Math.floor(channelData.length / 1000);
        const waveformPoints = [];
        const timePoints = [];
        for (let i = 0; i < channelData.length; i += step) {
          waveformPoints.push(channelData[i]);
          timePoints.push(i / decoded.sampleRate);
        }
        setWaveform(waveformPoints);
        setTime(timePoints);
      }catch(e){
        if (e instanceof Error) {
          console.log(e.message)
        }
      }
    }
    
    loadData()
    
  }, []);

  if (waveform.length === 0) return <p>Loading visualization...</p>;

  // Create emotion shapes for background shading
  const shapes = segments.map(seg => ({
    type: "rect" as const,
    xref: "x" as const,
    yref: "paper" as const,
    x0: seg.start,
    x1: seg.end,
    y0: 0,
    y1: 1,
    fillcolor: "rgba(0, 200, 255, 0.08)",
    line: { width: 0 }
  }));

  // Vertical markers for emotion changes
  const emotionMarkers = segments.map(seg => ({
    type: "line" as const,
    xref: "x" as const,
    yref: "paper" as const,
    x0: seg.start,
    x1: seg.start,
    y0: 0,
    y1: 1,
    line: { color: "rgba(0,0,0,0.2)", dash: "dot" as const }
  }));

  return (
    <Plot
      data={[
        {
          x: time,
          y: waveform,
          type: "scatter" as const,
          mode: "lines" as const,
          name: "Waveform",
          line: { color: "#0077cc" },
          hoverinfo: "x+y"
        },
        {
          x: segments.map(seg => (seg.start + seg.end) / 2),
          y: segments.map(() => 0.9),
          text: segments.map(seg => seg.emotion),
          mode: "text" as const,
          textposition: "top center" as const,
          showlegend: false,
        }
      ]}
      layout={{
        title: { text: "🎧 Emotion Timeline + Waveform" },
        xaxis: { title: { text: "Time (s)" } },
        yaxis: { title: { text: "Amplitude" }, showgrid: false },
        shapes: [...shapes, ...emotionMarkers],
        plot_bgcolor: "#ffffff",
        paper_bgcolor: "#ffffff",
        hovermode: "x unified",
        margin: { t: 50, l: 50, r: 30, b: 50 }
      }}
      config={{
        responsive: true,
        displayModeBar: true,
        toImageButtonOptions: { format: "png", filename: "emotion_plot" }
      }}
      style={{ width: "100%", height: "600px" }}
    />
  );
}
