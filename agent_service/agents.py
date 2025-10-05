from crewai import Agent
from langchain_google_vertexai import ChatVertexAI
from tools import SpeechToTextTool, VocalAnalysisTool

llm = ChatVertexAI(model_name="gemini-1.5-flash-001", project=os.getenv("GOOGLE_PROJECT_ID"))

class TalkItOutAgents:
    def speech_analyst(self):
        return Agent(
            role="Speech Analyst",
            goal="Transcribe user's audio and analyze its vocal characteristics like pace and filler words.",
            backstory="An expert linguist specializing in analyzing speech patterns from audio recordings.",
            tools=[SpeechToTextTool(), VocalAnalysisTool()],
            llm=llm,
            verbose=True,
            allow_delegation=False
        )

    def feedback_coach(self):
        return Agent(
            role="Constructive Feedback Coach",
            goal="Synthesize the speech analysis into encouraging, actionable advice for the user to improve their communication skills.",
            backstory="An empathetic and motivational public speaking coach who turns critique into confidence.",
            llm=llm,
            verbose=True,
            allow_delegation=False
        )