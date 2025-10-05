"""
Interactive Plotly dashboard:
- Light theme
- Waveform with volume envelope and vertical markers
- Primary emotion timeline with hovertooltips
- Secondary emotion band
- Exports interactive HTML: audio_emotions.html

Requirements:
pip install plotly numpy
(Scipy not required; we use a simple moving-average smooth)
"""

import json
import wave
import numpy as np
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import math

# ---------- USER VARIABLES ----------
audio_file_path = "conversation_2025-10-04_21-56-11.wav"          # <-- replace with your WAV file path
json_filename = "detailed_analysis.json"         # <-- confirmed filename
output_html = "audio_emotions.html"
# ------------------------------------

# ---------- Helper: convert mm:ss or m:ss to seconds ----------
def timestr_to_seconds(ts):
    # Accept "m:ss" or "mm:ss" or "h:mm:ss" optionally
    parts = ts.split(':')
    parts = [float(p) for p in parts]
    if len(parts) == 2:
        return parts[0] * 60 + parts[1]
    elif len(parts) == 3:
        return parts[0] * 3600 + parts[1] * 60 + parts[2]
    else:
        raise ValueError("Unsupported time format: " + ts)

# ---------- 1) Load JSON ----------
with open(json_filename, 'r', encoding='utf-8') as f:
    data = json.load(f)

timestamps = data.get("timestamps", {})
secondary_emotions = data.get("secondary_emotions", [])
confidence_score = data.get("confidence_score", data.get("confidence", None))
emotional_intensity = data.get("emotional_intensity", None)

# ---------- 2) Parse timestamps -> segments ----------
segments = []
for trange, emotion in timestamps.items():
    try:
        start_str, end_str = trange.split('-')
    except ValueError:
        # If user used spaces, try trimming
        start_str, end_str = [p.strip() for p in trange.split('-')]
    start_sec = timestr_to_seconds(start_str)
    end_sec   = timestr_to_seconds(end_str)
    duration = max(0.0, end_sec - start_sec)
    segments.append({
        "start": start_sec,
        "end": end_sec,
        "duration": duration,
        "emotion": str(emotion)
    })
# sort segments by start
segments = sorted(segments, key=lambda s: s["start"])

if len(segments) == 0:
    raise SystemExit("No timestamps found in JSON. Ensure 'timestamps' field exists and is formatted like '0:00-0:10'.")

total_duration = max(s["end"] for s in segments)

# ---------- 3) Load WAV audio and compute amplitude envelope ----------
wav = wave.open(audio_file_path, 'rb')
sample_rate = wav.getframerate()
n_frames = wav.getnframes()
channels = wav.getnchannels()
sampwidth = wav.getsampwidth()
raw = wav.readframes(n_frames)
wav.close()

# convert bytes to numpy array (supporting 16-bit int typical WAV)
dtype = None
if sampwidth == 2:
    dtype = np.int16
elif sampwidth == 4:
    dtype = np.int32
else:
    # generic fallback
    dtype = np.int16

audio = np.frombuffer(raw, dtype=dtype)
if channels == 2:
    audio = audio[::2]  # take left channel for simplicity

audio = audio.astype(np.float32)
time = np.linspace(0.0, len(audio) / sample_rate, num=len(audio))

# Compute smoothed amplitude envelope (moving-average of absolute signal)
abs_audio = np.abs(audio)
# window length in samples for envelope smoothing (e.g. 25 ms)
window_ms = 25
window_len = max(1, int((window_ms / 1000.0) * sample_rate))
window = np.ones(window_len) / window_len
envelope = np.convolve(abs_audio, window, mode='same')

# Normalize envelope to [0,1] for plotting aesthetics
if envelope.max() > 0:
    envelope_norm = envelope / envelope.max()
else:
    envelope_norm = envelope

# Downsample waveform for plotting efficiency if very long
max_points = 120000  # upper limit for plotting points
step = max(1, int(len(audio) / max_points))
plot_time = time[::step]
plot_audio = audio[::step]
plot_env = envelope_norm[::step]

# ---------- 4) Prepare color maps for emotions (light mode pastel) ----------
# We'll pick a palette of distinct pastel colors
PALETTE = [
    "#FF7F7F", "#FFA07A", "#FFD580", "#FFE4A1",
    "#C1E1C1", "#9FD3C7", "#9BC4F0", "#B39DF0",
    "#F2B6E3", "#D6CDEA", "#B3E5FC", "#FFCCCB"
]
# Map unique primary emotions to colors
unique_primary = list(dict.fromkeys([s["emotion"] for s in segments]))
color_map_primary = {e: PALETTE[i % len(PALETTE)] for i, e in enumerate(unique_primary)}

unique_secondary = list(dict.fromkeys(secondary_emotions))
color_map_secondary = {e: PALETTE[(i+6) % len(PALETTE)] for i, e in enumerate(unique_secondary)}

# ---------- 5) Build Plotly figure (3 stacked rows, shared x-axis) ----------
fig = make_subplots(rows=3, cols=1, shared_xaxes=True,
                    row_heights=[0.45, 0.25, 0.25],
                    vertical_spacing=0.05,
                    specs=[[{}], [{}], [{}]])

# Top: waveform (line + filled envelope)
fig.add_trace(
    go.Scatter(
        x=plot_time,
        y=plot_audio,
        mode='lines',
        name='Waveform',
        line=dict(color="#2c3e50", width=0.8),
        hoverinfo='skip',  # skip raw waveform hover (we show envelope hover)
        showlegend=False,
        opacity=0.6
    ),
    row=1, col=1
)
# Envelope fill for volume
fig.add_trace(
    go.Scatter(
        x=np.concatenate([plot_time, plot_time[::-1]]),
        y=np.concatenate([plot_env, (-0.1*plot_env)[::-1]]),
        fill='toself',
        fillcolor='rgba(100, 149, 237, 0.25)',  # cornflower pastel fill
        line=dict(color='rgba(255,255,255,0)'),
        hoverinfo='x+y',
        name='Volume envelope',
        showlegend=False
    ),
    row=1, col=1
)

# Add vertical markers for emotion boundaries on waveform
for seg in segments:
    fig.add_vline(x=seg["start"], line=dict(color='rgba(0,0,0,0.12)', dash='dash'), row=1, col=1)
    # also mark the end except if it's last point (we'll add for all)
    fig.add_vline(x=seg["end"], line=dict(color='rgba(0,0,0,0.12)', dash='dash'), row=1, col=1)

# Add a hover scatter for envelope (so cursor shows nice tooltip)
fig.add_trace(
    go.Scatter(
        x=plot_time,
        y=plot_env,
        mode='lines',
        name='Volume (norm)',
        line=dict(color="#6aa3ff", width=1.5),
        hovertemplate="Time: %{x:.2f}s<br>Volume (norm): %{y:.2f}<extra></extra>",
        showlegend=False
    ),
    row=1, col=1
)

# Middle: Primary emotion timeline (horizontal bars)
# Using bar traces with base=start and x=duration to create nice rectangles
primary_y = ["Primary"]  # all bars placed on same row

for seg in segments:
    fig.add_trace(
        go.Bar(
            x=[seg["duration"]],
            base=[seg["start"]],
            y=["Primary"],
            orientation='h',
            marker=dict(color=color_map_primary[seg["emotion"]], line=dict(width=0)),
            hovertemplate=(
                "<b>Primary</b><br>"
                "Emotion: %{customdata[0]}<br>"
                "Start: %{base:.2f}s<br>"
                "End: %{x+base:.2f}s<br>"
                "Duration: %{x:.2f}s<br>"
                f"Confidence: {confidence_score if confidence_score is not None else 'N/A'}<extra></extra>"
            ),
            customdata=[[seg["emotion"]]],
            showlegend=False
        ),
        row=2, col=1
    )

# Bottom: Secondary emotions
if secondary_emotions:
    # If timestamps for secondary don't exist, distribute evenly across total_duration
    nsec = len(secondary_emotions)
    sec_segments = []
    if nsec > 0:
        sec_len = total_duration / nsec
        for i, emo in enumerate(secondary_emotions):
            s = i * sec_len
            e = (i + 1) * sec_len
            sec_segments.append({"start": s, "end": e, "duration": e - s, "emotion": emo})

    for sseg in sec_segments:
        fig.add_trace(
            go.Bar(
                x=[sseg["duration"]],
                base=[sseg["start"]],
                y=["Secondary"],
                orientation='h',
                marker=dict(color=color_map_secondary[sseg["emotion"]], line=dict(width=0)),
                hovertemplate=(
                    "<b>Secondary</b><br>"
                    "Emotion: %{customdata[0]}<br>"
                    "Start: %{base:.2f}s<br>"
                    "End: %{x+base:.2f}s<br>"
                    "Duration: %{x:.2f}s<extra></extra>"
                ),
                customdata=[[sseg["emotion"]]],
                showlegend=False
            ),
            row=3, col=1
        )
else:
    # If none, create an empty annotation
    fig.add_annotation(text="No secondary emotions provided",
                       x=0.5*total_duration, y=0.5, xref='x', yref='y3',
                       showarrow=False, row=3, col=1)

# ---------- Layout polishing (light mode, modern) ----------
fig.update_layout(
    template="plotly_white",
    height=800,
    margin=dict(l=60, r=30, t=100, b=80),
    title=dict(text="Audio Emotion Analysis — Waveform + Timelines", x=0.5, xanchor='center', font=dict(size=20)),
    hovermode='x unified',
)

# Set y-axis formatting and remove tick labels for timeline rows
fig.update_yaxes(row=2, col=1, showticklabels=False)
fig.update_yaxes(row=3, col=1, showticklabels=False)

# X axis span & formatting
fig.update_xaxes(title_text="Time (seconds)", range=[0, max(total_duration, time[-1]) * 1.02], tick0=0, dtick=math.ceil(total_duration/10))

# Create legends manually (show primary and secondary emotion color legends)
primary_legend = []
for e,c in color_map_primary.items():
    primary_legend.append(go.Bar(x=[0], y=[0], marker=dict(color=c), name=f"Primary: {e}", showlegend=True, visible='legendonly'))

secondary_legend = []
for e,c in color_map_secondary.items():
    secondary_legend.append(go.Bar(x=[0], y=[0], marker=dict(color=c), name=f"Secondary: {e}", showlegend=True, visible='legendonly'))

# Add legends traces off-plot (they won't render as bars because x=0,y=0 not visible)
for t in primary_legend + secondary_legend:
    fig.add_trace(t)

# Move legend to bottom
fig.update_layout(legend=dict(orientation="h", yanchor="bottom", y=-0.2, xanchor="center", x=0.5))

# Add annotations to label rows clearly
fig.add_annotation(dict(xref='paper', x=-0.02, y=0.86, xanchor='right', 
                        yref='paper',
                        text="Waveform", showarrow=False, font=dict(size=12)))
fig.add_annotation(dict(xref='paper', x=-0.02, y=0.55, xanchor='right', 
                        yref='paper',
                        text="Primary Emotion", showarrow=False, font=dict(size=12)))
fig.add_annotation(dict(xref='paper', x=-0.02, y=0.28, xanchor='right',
                        yref='paper',
                        text="Secondary Emotion", showarrow=False, font=dict(size=12)))

# ---------- Export interactive HTML ----------
fig.write_html(output_html, auto_open=False, include_plotlyjs='cdn')
print(f"Interactive dashboard written to: {output_html}")

# If running in an interactive environment, you may want to display:
# fig.show()
