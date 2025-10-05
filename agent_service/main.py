import os
import uuid
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from crewai import Crew, Process
from agents import TalkItOutAgents
from tasks import TalkItOutTasks

load_dotenv()

app = FastAPI()

# Allow CORS for your frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Your React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze-speech/")
async def analyze_speech(file: UploadFile = File(...)):
    try:
        # Save the uploaded file temporarily
        temp_dir = "temp_uploads"
        os.makedirs(temp_dir, exist_ok=True)
        file_path = os.path.join(temp_dir, f"{uuid.uuid4()}-{file.filename}")
        
        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        # Initialize agents and tasks
        agents = TalkItOutAgents()
        tasks = TalkItOutTasks()

        speech_analyst_agent = agents.speech_analyst()
        feedback_coach_agent = agents.feedback_coach()

        analysis_task = tasks.analyze_speech_task(speech_analyst_agent, file_path)
        feedback_task = tasks.generate_feedback_task(feedback_coach_agent, analysis_task)

        # Create and run the crew
        crew = Crew(
            agents=[speech_analyst_agent, feedback_coach_agent],
            tasks=[analysis_task, feedback_task],
            process=Process.sequential,
            verbose=2
        )

        result = crew.kickoff()
        
        # Clean up the temporary file
        os.remove(file_path)

        return {"feedback": result}

    except Exception as e:
        # Log the error for debugging
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
def read_root():
    return {"message": "TalkItOut Agent Service is running."}