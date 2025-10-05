from crewai import Task

class TalkItOutTasks:
    def analyze_speech_task(self, agent, audio_file_path):
        return Task(
            description=f"First, transcribe the audio from the file at '{audio_file_path}'. Then, analyze the resulting transcription for its vocal characteristics.",
            expected_output="A detailed analysis of the speech, including the full transcription, pace, and number of filler words.",
            agent=agent,
            async_execution=False # Run this first and wait
        )

    def generate_feedback_task(self, agent, context_task):
        return Task(
            description="Review the speech analysis provided. Based on this analysis, generate a constructive and encouraging feedback report for the user. Focus on one key strength and one area for improvement. Keep the feedback concise and positive.",
            expected_output="A well-structured, positive, and actionable feedback report in markdown format.",
            agent=agent,
            context=[context_task], # This task depends on the first one
            async_execution=False
        )