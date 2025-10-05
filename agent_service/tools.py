import os
from crewai_tools import BaseTool
from langchain_google_vertexai import ChatVertexAI
from google.cloud import speech

# Tool for Speech-to-Text
class SpeechToTextTool(BaseTool):
    name: str = "Speech to Text Tool"
    description: str = "Transcribes audio from a file path into text."

    def _run(self, audio_file_path: str) -> str:
        client = speech.SpeechClient()
        with open(audio_file_path, "rb") as audio_file:
            content = audio_file.read()
        audio = speech.RecognitionAudio(content=content)
        config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.WEBM_OPUS, # Common for web uploads
            sample_rate_hertz=48000, # Common for web uploads
            language_code="en-US",
            enable_automatic_punctuation=True
        )
        try:
            response = client.recognize(config=config, audio=audio)
            return " ".join(result.alternatives[0].transcript for result in response.results)
        except Exception as e:
            return f"Error during transcription: {e}"

# Tool for Detailed Analysis
class VocalAnalysisTool(BaseTool):
    name: str = "Vocal Characteristics Analysis Tool"
    description: str = "Analyzes transcribed text to evaluate pace, clarity, and filler words."

    def _run(self, transcription: str) -> str:
        # This can be a simple rule-based analysis or another LLM call
        words = transcription.split()
        num_words = len(words)
        # Placeholder logic - you can make this much more sophisticated
        pace = "normal"
        if num_words > 200: pace = "fast"
        if num_words < 120: pace = "slow"
        
        filler_words = len([w for w in words if w.lower() in ["um", "uh", "like", "so", "you know"]])
        
        return f"Pace: {pace} ({num_words} words). Filler words detected: {filler_words}."