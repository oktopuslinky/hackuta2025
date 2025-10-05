import speech_recognition as sr
import threading
import google.generativeai as genai
import dotenv
import os

# load gemini api
dotenv.load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-2.5-flash")

def send_to_gemini(transcribed_text):
    '''
    sends text to gemini and prints response
    '''
    try:
        print(f"\nSending to Gemini: {transcribed_text}")
        response = model.generate_content(transcribed_text)
        print("Gemini response:", response.text, "\n")
    except Exception as e:
        print("Error communicating with Gemini:", e)

def recognize_speech(audio, recognizer):
    '''
    do speech recognition and send to gemini in a new thread
    '''
    try:
        # Transcribe speech to text
        text = recognizer.recognize_google(audio)
        print(f"You said: {text}")
        # Send to Gemini in a new thread (non-blocking)
        threading.Thread(target=send_to_gemini, args=(text,)).start()
    except sr.UnknownValueError:
        print("Speech was unintelligible.")
    except sr.RequestError as e:
        print(f"Could not request results; {e}")

def listen_and_transcribe():
    '''
    uses google web speech api with speech_recognition library to transcribe speech
    '''
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Adjusting for ambient noise... Please wait.")
        recognizer.adjust_for_ambient_noise(source)
        print("Listening... (Speak something!)")

        while True:
            try:
                # listen until speech is done
                audio = recognizer.listen(source)
                print("Recognizing...")
                # create new thread to process audio
                threading.Thread(target=recognize_speech, args=(audio, recognizer)).start()
            except KeyboardInterrupt:
                print("Exiting...")
                break
            except Exception as e:
                print("Error:", e)

if __name__ == "__main__":
    listen_and_transcribe()
