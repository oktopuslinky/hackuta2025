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

router.post('/sst', upload.single('audioFile'), async (req, res) => {

    try {
        //check if file exist
        if (!req.file) {
            return res.status(400).json({ error: 'audio file missing' });
        }
        
        //AudiO buff defined
        const audioBuff = req.file.buffer;

        //create audios stream
        const transcription = await elevenlabs.speechToText.convert({
            file: audioBuff,
            modelId: 'scribe_v1',
            tagAudioEvents: true,
            languageCode: 'eng', 
            diarize: true,
        });
        
        //output
        res.json(transcription);

    } catch (error) {
        console.error('some Error:', error);
        res.status(500).json({ error: 'cant process audio file' });
    }
});


router.post('/tts', async (req, res) => {

  try {
    //grab text jdsf
    const { text, voiceId } = req.body;

    //crash if text no existD
    if (!text) {
      return res.status(400).json({ error: 'no text' });
    }

    //create audio stream
    const audioS = await elevenlabs.textToSpeech.convert(voiceId || 'JBFqnCBsd6RMkjVDRZzb', {
      text: text,
      modelId: 'eleven_multilingual_v2',
      outputFormat: 'mp3_44100_128',
    });

    // set contet 
    res.setHeader('Content-Type', 'audio/mpeg');


    const chunksOfAudio = [];
    for await (const chunk of audioS) {
      chunksOfAudio.push(chunk);
    }
    const result = Buffer.concat(chunksOfAudio);
    res.send(result);



  } catch (error) {
    console.error('error during tts', error);
    res.status(500).json({ error: 'failled to convert Tts' });
  }
});
module.exports = router;