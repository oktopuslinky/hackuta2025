const express = require('express');
const router = express.Router();
const multer = require('multer');
const { ElevenLabsClient } = require('@elevenlabs/elevenlabs-js');
const fs = require('fs');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const elevenlabs = new ElevenLabsClient({
    apiKey: process.env.ELEVEN_API_KEY,
});

router.post('/speech-to-text', upload.single('audio_file'), async (req, res) => {
  console.log('Received request for speech-to-text...');

    try {
        // Check if a file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: 'No audio file uploaded.' });
        }
        
        console.log(`Processing file: ${req.file.originalname} (${req.file.size} bytes)`);

        // The uploaded file is available as a Buffer in req.file.buffer
        const audioBuffer = req.file.buffer;

        // 4. Call the ElevenLabs API with the audio buffer
        const transcription = await elevenlabs.speechToText.convert({
            file: audioBuffer,
            modelId: 'scribe_v1', // Or the latest supported model
            tagAudioEvents: true,
            languageCode: 'eng', // Using a specific code can improve accuracy
            diarize: true,
        });
        
        console.log('Transcription successful.');
        
        // 5. Return the transcription result
        res.json(transcription);

    } catch (error) {
        console.error('Error during speech-to-text conversion:', error);
        res.status(500).json({ error: 'Failed to process audio file.' });
    }
});

module.exports = router;