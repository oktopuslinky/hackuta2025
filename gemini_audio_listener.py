import speech_recognition as sr
import threading
import google.generativeai as genai
import dotenv
import os
from pydub import AudioSegment
from datetime import datetime
import io

# Load Gemini API
dotenv.load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-2.5-flash")

# Global list to hold audio chunks
audio_chunks = []
exit_flag = threading.Event()

def send_to_gemini(transcribed_text):
    try:
        print(f"\nSending to Gemini: {transcribed_text}")
        response = model.generate_content(transcribed_text)
        print("Gemini response:", response.text, "\n")
    except Exception as e:
        print("Error communicating with Gemini:", e)

def recognize_and_record(audio, recognizer):
    try:
        # Recognize speech
        text = recognizer.recognize_google(audio)
        print(f"You said: {text}")

        # Save audio chunk
        wav_data = io.BytesIO(audio.get_wav_data())
        segment = AudioSegment.from_file(wav_data, format="wav")
        audio_chunks.append(segment)

        # Send to Gemini in a background thread
        threading.Thread(target=send_to_gemini, args=(text,)).start()

    except sr.UnknownValueError:
        print("Speech was unintelligible.")
    except sr.RequestError as e:
        print(f"Could not request results; {e}")

def listen_loop():
    recognizer = sr.Recognizer()
    recognizer.pause_threshold = 0.8
    recognizer.energy_threshold = 300

    with sr.Microphone() as source:
        print("Adjusting for ambient noise... Please wait.")
        recognizer.adjust_for_ambient_noise(source)
        print("Listening... (type 'exit' in terminal to stop)")

        while not exit_flag.is_set():
            try:
                print("\nWaiting for speech...")
                audio = recognizer.listen(source)
                print("Speech detected. Processing...")

                threading.Thread(target=recognize_and_record, args=(audio, recognizer)).start()
            except Exception as e:
                print("Error:", e)

def wait_for_exit_and_save():
    while True:
        command = input()
        if command.strip().lower() == "exit":
            print("Exit command received. Saving final audio...")

            if audio_chunks:
                final_audio = audio_chunks[0]
                for chunk in audio_chunks[1:]:
                    final_audio += chunk

                timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
                filename = f"conversation_{timestamp}.wav"
                final_audio.export(filename, format="wav")
                print(f"Conversation saved to: {filename}")
            else:
                print("No audio was recorded.")

            exit_flag.set()
            break

if __name__ == "__main__":
    listener_thread = threading.Thread(target=listen_loop)
    listener_thread.start()

    saved_audio_file = wait_for_exit_and_save()
    listener_thread.join()
    print("Program terminated.")