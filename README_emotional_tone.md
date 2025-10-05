# Emotional Tone Detection using Gemini API

This project provides emotional tone analysis of audio files using Google's Gemini API, based on the approach described in the GEMINI.md documentation.

## Features

- **Audio Transcription**: Automatically transcribes audio content
- **Emotional Analysis**: Detects emotional tone, intensity, and stability
- **Vocal Characteristics**: Analyzes tone, pace, volume, and pitch
- **Detailed Insights**: Provides comprehensive emotional analysis with confidence scores
- **JSON Output**: Structured results for easy integration

## Setup

### 1. Install Dependencies

```bash
pip install openai
```

### 2. Get Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Set it as an environment variable:

**Windows:**
```cmd
set GEMINI_API_KEY=your_api_key_here
```

**Linux/Mac:**
```bash
export GEMINI_API_KEY=your_api_key_here
```

### 3. Prepare Audio File

Place your audio file as `Recording.wav` in the project directory.

## Usage

### Quick Setup Check
```bash
python setup_emotional_analysis.py
```

### Run Emotional Tone Analysis
```bash
python emotional_tone_detection.py
```

## Output Format

The analysis provides two levels of detail:

### Basic Analysis
```json
{
    "transcription": "transcribed text here",
    "emotional_tone": "primary emotion",
    "confidence": 85,
    "emotional_indicators": ["list of indicators"],
    "nuances": "any additional emotional details",
    "secondary_emotions": ["list of secondary emotions if any"]
}
```

### Detailed Analysis
```json
{
    "transcription": "full transcribed text",
    "primary_emotion": "main emotional tone",
    "emotional_intensity": "low/medium/high",
    "emotional_stability": "stable/fluctuating/mixed",
    "confidence_score": 85,
    "vocal_characteristics": {
        "tone": "description",
        "pace": "slow/normal/fast",
        "volume": "quiet/normal/loud",
        "pitch": "low/normal/high"
    },
    "emotional_indicators": ["list of detected indicators"],
    "emotional_transitions": ["any changes in emotion"],
    "overall_mood": "summary of emotional state",
    "secondary_emotions": ["any additional emotions detected"],
    "recommendations": "suggestions based on emotional analysis"
}
```

## Supported Audio Formats

- WAV (recommended)
- MP3
- M4A
- Other formats supported by Gemini API

## Example Use Cases

1. **Customer Service**: Analyze customer call emotions
2. **Therapy Sessions**: Monitor emotional states
3. **Content Analysis**: Assess emotional tone of recordings
4. **Voice Assistants**: Improve emotional understanding
5. **Research**: Study emotional patterns in speech

## Troubleshooting

### Common Issues

1. **API Key Not Set**
   - Ensure GEMINI_API_KEY environment variable is set
   - Check that the API key is valid and has sufficient quota

2. **Audio File Not Found**
   - Ensure `Recording.wav` exists in the current directory
   - Check file permissions

3. **Large Audio Files**
   - Gemini API has file size limits
   - Consider splitting very long audio files

4. **Network Issues**
   - Check internet connection
   - Verify API endpoint accessibility

### Error Messages

- `Error analyzing audio`: Usually indicates API key or network issues
- `Audio file not found`: Check file path and name
- `Missing required packages`: Run `pip install openai`

## Advanced Usage

### Custom Prompts

You can modify the prompts in `emotional_tone_detection.py` to focus on specific emotional aspects:

```python
# For therapy analysis
prompt = "Analyze this audio for therapeutic purposes, focusing on emotional state, stress indicators, and mood changes..."

# For customer service
prompt = "Analyze this customer call for emotional tone, satisfaction level, and potential issues..."
```

### Batch Processing

To analyze multiple files, modify the script to loop through a directory:

```python
import glob

audio_files = glob.glob("*.wav")
for audio_file in audio_files:
    result = analyze_emotional_tone_gemini(audio_file, api_key)
    # Process result...
```

## API Limits and Costs

- Check Gemini API documentation for current rate limits
- Monitor your API usage in Google AI Studio
- Consider implementing rate limiting for batch processing

## Contributing

Feel free to enhance the emotional analysis capabilities by:
- Adding more specific emotional categories
- Implementing emotion trend analysis over time
- Adding support for multiple languages
- Creating visualization tools for emotional data

## License

This project is for educational and research purposes. Please review Gemini API terms of service for commercial usage.
