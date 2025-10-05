// The API key for the Gemini service, loaded from environment variables.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// The base URL for the Gemini API, which is structured to be compatible with the OpenAI API.
const API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/openai";

/**
 * Extracts a JSON object from a string by finding the first '{' and the last '}'.
 * This is useful for cleaning up API responses that might include extra text around the JSON.
 * @param s The string to search for a JSON object.
 * @returns The parsed JSON object, or null if no valid JSON object is found.
 */
const extractJsonFromString = (s: string): object | null => {
    try {
        const start = s.indexOf('{');
        const end = s.lastIndexOf('}');
        if (start !== -1 && end !== -1) {
            return JSON.parse(s.substring(start, end + 1));
        }
    } catch (e) {
        console.error("Failed to parse JSON from string", e);
    }
    return null;
};

/**
 * Encodes an audio blob into a base64 string.
 * This is necessary to send the audio data in a JSON payload to the API.
 * @param audioBlob The audio blob, which can be a File or Blob object.
 * @returns A promise that resolves with the base64 encoded audio data.
 */
const encodeAudio = (audioBlob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result as string;
            // The result includes a data URL prefix (e.g., "data:audio/wav;base64,"), which needs to be removed.
            const base64 = result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(audioBlob);
    });
};

/**
 * Returns the prompt for a detailed emotional tone analysis.
 * @returns A string containing the detailed prompt for the API.
 */
const getDetailedPrompt = () => `
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
        "0:00-0:10": "emotion1"
    },
    "wpm": "words per minute",
    "recommendations": "suggestions based on emotional analysis"
}
`;

/**
 * Analyzes the emotional tone of an audio file by calling the Gemini API.
 * It performs a detailed analysis and returns the resulting JSON object.
 * @param audioBlob The audio file to analyze, as a Blob object.
 * @returns A promise that resolves with the parsed JSON analysis, or null if an error occurs.
 */
export const analyzeConversationEmotion = async (audioBlob: Blob): Promise<object | null> => {
    if (!API_KEY) {
        console.error("Gemini API key not found. Make sure VITE_GEMINI_API_KEY is set in your .env file.");
        return null;
    }

    console.log("Performing detailed emotional analysis on the full conversation...");

    try {
        const base64Audio = await encodeAudio(audioBlob);
        const prompt = getDetailedPrompt();

        const response = await fetch(`${API_BASE_URL}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: "gemini-2.0-flash",
                messages: [
                    {
                        role: "user",
                        content: [
                            { type: "text", text: prompt },
                            {
                                type: "input_audio",
                                input_audio: {
                                    data: base64Audio,
                                    format: "wav"
                                }
                            }
                        ]
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API request failed with status ${response.status}: ${errorText}`);
        }

        const result = await response.json();
        const content = result.choices[0].message.content;
        
        const jsonResult = extractJsonFromString(content);
        if (jsonResult) {
            console.log("Detailed analysis complete.");
            return jsonResult;
        } else {
            console.error("Could not find JSON in the detailed analysis response.");
            return null;
        }

    } catch (error) {
        console.error("Error in detailed analysis:", error);
        return null;
    }
};