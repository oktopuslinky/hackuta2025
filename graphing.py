import json
import wave
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

# ----------------------------------------------------------
# 1. Load audio waveform
# ----------------------------------------------------------
audio_file_path = "conversation_2025-10-04_21-56-11.wav"  # <-- Replace with your file
obj = wave.open(audio_file_path, 'rb')

sample_freq = obj.getframerate()
n_samples = obj.getnframes()
signal_wave = obj.readframes(-1)
duration = n_samples / sample_freq

# Convert to numpy array
signal_array = np.frombuffer(signal_wave, dtype=np.int16)

# If stereo, keep one channel
if obj.getnchannels() == 2:
    signal_array = signal_array[::2]

time = np.linspace(0, duration, num=len(signal_array))
obj.close()

# ----------------------------------------------------------
# 2. Load emotional analysis JSON
# ----------------------------------------------------------
with open("detailed_analysis.json", "r", encoding="utf-8") as f:
    data = json.load(f)

timestamps = data["timestamps"]
secondary_emotions = data.get("secondary_emotions", [])

# ----------------------------------------------------------
# 3. Parse primary emotion timestamps
# ----------------------------------------------------------
segments = []
for time_range, emotion in timestamps.items():
    start, end = time_range.split("-")
    start_min, start_sec = map(float, start.split(":"))
    end_min, end_sec = map(float, end.split(":"))
    start_time = start_min * 60 + start_sec
    end_time = end_min * 60 + end_sec
    segments.append((start_time, end_time, emotion))

segments.sort(key=lambda x: x[0])
total_duration = max(end for _, end, _ in segments)

# ----------------------------------------------------------
# 4. Color maps
# ----------------------------------------------------------
primary_emotions = sorted(list({seg[2] for seg in segments}))
secondary_unique = sorted(list(set(secondary_emotions)))

primary_cmap = plt.get_cmap("tab20")
secondary_cmap = plt.get_cmap("Set2")

primary_colors = {e: primary_cmap(i / len(primary_emotions)) for i, e in enumerate(primary_emotions)}
secondary_colors = {e: secondary_cmap(i / len(secondary_unique)) for i, e in enumerate(secondary_unique)}

# ----------------------------------------------------------
# 5. Create multi-subplot figure
# ----------------------------------------------------------
fig, axes = plt.subplots(3, 1, figsize=(15, 10), sharex=True, gridspec_kw={'height_ratios': [2, 1, 1]})
fig.suptitle("🎧 Audio Analysis: Waveform + Emotional Timeline", fontsize=18, fontweight="bold", y=0.95)

# ----------------------------------------------------------
# Plot 1: Audio waveform
# ----------------------------------------------------------
axes[0].plot(time, signal_array, color='steelblue')
axes[0].set_ylabel("Amplitude", fontsize=12)
axes[0].set_title("🔊 Audio Waveform", fontsize=14, fontweight="bold")
axes[0].grid(True, linestyle='--', alpha=0.3)

# ----------------------------------------------------------
# Plot 2: Primary emotions timeline
# ----------------------------------------------------------
for start, end, emotion in segments:
    axes[1].barh(
        y=0.5, left=start, width=end - start,
        height=0.4, color=primary_colors[emotion], edgecolor="none", alpha=0.9
    )
    axes[1].text(
        (start + end) / 2, 0.5, emotion,
        ha="center", va="center", fontsize=9, color="white", fontweight="bold"
    )

axes[1].set_yticks([])
axes[1].set_xlim(0, total_duration + 1)
axes[1].set_title("🎭 Primary Emotional Tone", fontsize=14, fontweight="bold")
axes[1].grid(axis='x', linestyle='--', alpha=0.3)

# ----------------------------------------------------------
# Plot 3: Secondary emotions timeline
# ----------------------------------------------------------
if secondary_emotions:
    segment_length = total_duration / len(secondary_emotions)
    for i, emotion in enumerate(secondary_emotions):
        seg_start = i * segment_length
        seg_end = (i + 1) * segment_length
        axes[2].barh(
            y=0.5, left=seg_start, width=seg_end - seg_start,
            height=0.4, color=secondary_colors[emotion], edgecolor="none", alpha=0.85
        )
        axes[2].text(
            (seg_start + seg_end) / 2, 0.5, emotion,
            ha="center", va="center", fontsize=9, color="black", fontweight="bold"
        )

axes[2].set_yticks([])
axes[2].set_title("🌈 Secondary Emotions", fontsize=14, fontweight="bold")
axes[2].grid(axis='x', linestyle='--', alpha=0.3)

# ----------------------------------------------------------
# Final styling
# ----------------------------------------------------------
axes[2].set_xlabel("Time (seconds)", fontsize=12)
plt.xlim(0, duration)

# Add legend
primary_patches = [mpatches.Patch(color=c, label=e) for e, c in primary_colors.items()]
secondary_patches = [mpatches.Patch(color=c, label=e) for e, c in secondary_colors.items()]
axes[2].legend(handles=primary_patches + secondary_patches, loc="upper center", bbox_to_anchor=(0.5, -0.4),
               ncol=4, title="Emotion Legend", fontsize=9)

plt.tight_layout(rect=[0, 0, 1, 0.93])
plt.show()
