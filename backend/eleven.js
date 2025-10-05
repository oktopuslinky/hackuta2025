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

  // create audio stream with a single retry on transient errors
  const voiceGender = req.body.voiceGender;
  console.log('TTS request received. text length=', (text || '').length, 'voiceId=', voiceId, 'voiceGender=', voiceGender);
  // Map voiceGender to environment voice ids if provided
  const defaultVoiceId = 'JBFqnCBsd6RMkjVDRZzb';
  const maleVoiceId = process.env.ELEVEN_VOICE_MALE || defaultVoiceId;
  const femaleVoiceId = process.env.ELEVEN_VOICE_FEMALE || defaultVoiceId;
  let chosenVoiceId = voiceId || (voiceGender === 'male' ? maleVoiceId : femaleVoiceId);
    let attempt = 0;
    let audioS = null;
    let lastErr = null;
    while (attempt < 2) {
      try {
        audioS = await elevenlabs.textToSpeech.convert(chosenVoiceId, {
          text: text,
          modelId: 'eleven_multilingual_v2',
          outputFormat: 'mp3_44100_128',
        });
        lastErr = null;
        break;
      } catch (err) {
        lastErr = err;
        console.error(`TTS convert attempt ${attempt + 1} failed:`, err && err.stack ? err.stack : err);
        attempt += 1;
        // small backoff before retry
        await new Promise(r => setTimeout(r, 300));
      }
    }

    if (lastErr) {
      console.error('TTS conversion failed after retries:', lastErr && lastErr.stack ? lastErr.stack : lastErr);
      return res.status(500).json({ error: 'failed to convert TTS', details: String(lastErr && lastErr.message ? lastErr.message : lastErr) });
    }

    // set content type
    res.setHeader('Content-Type', 'audio/mpeg');

    // collect chunks (audioS may be an async iterable)
    const chunksOfAudio = [];
    try {
      for await (const chunk of audioS) {
        chunksOfAudio.push(chunk);
      }
    } catch (err) {
      console.error('Error while reading TTS stream:', err && err.stack ? err.stack : err);
      return res.status(500).json({ error: 'failed while streaming TTS', details: String(err && err.message ? err.message : err) });
    }

    const result = Buffer.concat(chunksOfAudio);
    try {
      res.setHeader('Content-Length', result.length);
    } catch (e) {
      // ignore header set errors
    }
    res.send(result);



  } catch (error) {
    console.error('error during tts', error);
    res.status(500).json({ error: 'failled to convert Tts' });
  }
});
module.exports = router;