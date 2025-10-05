import base64
import os
import json
from openai import OpenAI
from dotenv import load_dotenv
import time

def extract_json_from_string(s):
    try:
        # Find the start of the JSON object
        start_index = s.find('{')
        # Find the end of the JSON object
        end_index = s.rfind('}')
        if start_index != -1 and end_index != -1:
            return s[start_index:end_index+1]
    except Exception:
        pass
    return None

def encode_audio(audio_file_path):
    with open(audio_file_path, "rb") as audio_file:
        return base64.b64encode(audio_file.read()).decode('utf-8')

def analyze_emotional_tone_gemini(audio_file_path, api_key):
    try:
        # Initialize Gemini client
        client = OpenAI(
            api_key=api_key,
            base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
        )
        
        # Encode audio file
        base64_audio = encode_audio(audio_file_path)
        
        # Create the prompt for emotional tone analysis
        prompt = """
        Analyze the emotional tone of this audio. Please provide:
        1. The transcribed text
        2. The emotional tone (happy, sad, angry, excited, calm, nervous, etc.)
        3. The confidence level of the emotional analysis (0-100%)
        4. Key emotional indicators you detected (tone, pace, volume, etc.)
        5. Any specific emotional nuances or mixed emotions
        
        Format your response as JSON with the following structure:
        {
            "transcription": "transcribed text here",
            "emotional_tone": "primary emotion",
            "confidence": 85,
            "emotional_indicators": ["list of indicators"],
            "nuances": "any additional emotional details",
            "secondary_emotions": ["list of secondary emotions if any"]
        }
        """
        
        # Make the API call
        response = client.chat.completions.create(
            model="gemini-2.0-flash",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": prompt,
                        },
                        {
                            "type": "input_audio",
                            "input_audio": {
                                "data": base64_audio,
                                "format": "wav"
                            }
                        }
                    ],
                }
            ],
        )
        
        return response.choices[0].message.content
        
    except Exception as e:
        return f"Error analyzing audio: {str(e)}"

def analyze_emotional_tone_detailed(audio_file_path, api_key):
    try:
        client = OpenAI(
            api_key=api_key,
            base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
        )
        
        base64_audio = encode_audio(audio_file_path)
        
        # More detailed prompt for comprehensive emotional analysis
        detailed_prompt = """
        Perform a comprehensive emotional tone analysis of this audio. I need you to:
        
        1. TRANSCRIBE the audio content accurately
        2. ANALYZE the emotional tone using these categories:
           - Primary emotion (happy, sad, angry, excited, calm, anxious, frustrated, etc.)
           - Emotional intensity (low, medium, high)
           - Emotional stability (stable, fluctuating, mixed)
           - Vocal characteristics (tone, pace, volume, pitch)
        
        3. DETECT emotional indicators such as:
           - Speech patterns
           - Vocal stress
           - Pauses and hesitations
           - Volume changes
           - Tone variations
        
        4. IDENTIFY any emotional transitions or changes during the audio
        
        5. ASSESS the overall emotional state and mood
        
        Please respond with a detailed JSON analysis:
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
            "timestamps": {
                "time1": "emotion1", [continue as detected]
            },
            "wpm": "words per minute",
            "recommendations": "suggestions based on emotional analysis"
        }
        """
        
        response = client.chat.completions.create(
            model="gemini-2.0-flash",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": detailed_prompt,
                        },
                        {
                            "type": "input_audio",
                            "input_audio": {
                                "data": base64_audio,
                                "format": "wav"
                            }
                        }
                    ],
                }
            ],
        )
        
        return response.choices[0].message.content
        
    except Exception as e:
        return f"Error in detailed analysis: {str(e)}"

def main():
    load_dotenv()
    audio_files = ['conversation_2025-10-04_21-56-11.wav']
    audio_file = None
    
    # ensure audio files exist
    for file in audio_files:
        if os.path.exists(file):
            audio_file = file
            break
    
    if not audio_file:
        print("ERROR: these audio files do not exist: \n -" + "\n -".join(audio_files))
        return
    
    # get api key
    load_dotenv()
    api_key = os.getenv("GEMINI_API_KEY")
    
    if not api_key:
        print('ERROR: Gemini API key not found.')
        return
    
    if not os.path.exists(audio_file):
        print(f"Error: Audio file '{audio_file}' not found!")
        return
    
    print(f"Analyzing audio file: {audio_file}")
    print()
    
    # Basic emotional tone analysis
    print("BASIC EMOTIONAL TONE ANALYSIS")
    result1 = analyze_emotional_tone_gemini(audio_file, api_key)
    print(result1)
    print()
    
    # Detailed emotional tone analysis
    print("DETAILED EMOTIONAL TONE ANALYSIS")
    result2 = analyze_emotional_tone_detailed(audio_file, api_key)
    print(result2)
    print()
    
    
    # Try to parse JSON responses
    try:
        json_str1 = extract_json_from_string(result1)
        if json_str1:
            data1 = json.loads(json_str1)
            with open("basic_analysis.json", "w", encoding="utf-8") as f:
                json.dump(data1, f, indent=4, ensure_ascii=False)
            print("3. PARSED BASIC ANALYSIS")
            print("-" * 40)
            for key, value in data1.items():
                print(f"{key}: {value}")
            print()
        else:
            print("Could not find JSON in the basic analysis response.")
    except json.JSONDecodeError as e:
        print(f"Error parsing basic analysis JSON: {e}")

    try:
        json_str2 = extract_json_from_string(result2)
        if json_str2:
            data2 = json.loads(json_str2)
            with open("detailed_analysis.json", "w", encoding="utf-8") as f:
                json.dump(data2, f, indent=4, ensure_ascii=False)
            print("4. PARSED DETAILED ANALYSIS")
            print("-" * 40)
            for key, value in data2.items():
                if isinstance(value, dict):
                    print(f"{key}:")
                    for sub_key, sub_value in value.items():
                        print(f"  {sub_key}: {sub_value}")
                else:
                    print(f"{key}: {value}")
        else:
            print("Could not find JSON in the detailed analysis response.")
    except json.JSONDecodeError as e:
        print(f"Error parsing detailed analysis JSON: {e}")

if __name__ == "__main__":
    main()
