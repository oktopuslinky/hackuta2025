import speech_recognition as sr
import threading

def listen_and_transcribe():
    recognizer = sr.Recognizer()

    # Set up the microphone source
    with sr.Microphone() as source:
        print("Adjusting for ambient noise... Please wait.")
        recognizer.adjust_for_ambient_noise(source)  # Adjust for ambient noise
        print("Listening...")

        while True:
            try:
                # Listen to the microphone (non-blocking)
                audio = recognizer.listen(source, phrase_time_limit=5)  # Set a time limit to listen for
                print("Recognizing...")
                
                # Start a new thread to process the audio asynchronously
                threading.Thread(target=recognize_speech, args=(audio, recognizer)).start()
            except sr.UnknownValueError:
                print("Sorry, I could not understand that.")
            except sr.RequestError as e:
                print(f"Error with the service; {e}")

def recognize_speech(audio, recognizer):
    try:
        # Send the audio to Google's speech-to-text API for recognition
        text = recognizer.recognize_google(audio)
        print(f"You said: {text}")
    except sr.UnknownValueError:
        pass  # If speech is not understood, do nothing
    except sr.RequestError as e:
        print(f"Could not request results; {e}")

if __name__ == "__main__":
    listen_and_transcribe()
