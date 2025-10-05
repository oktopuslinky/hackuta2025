const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

// Use memory storage to handle the file buffer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const PYTHON_AGENT_URL = 'http://127.0.0.1:8000/analyze-speech/';

router.post('/analyze', upload.single('audio'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No audio file provided.' });
        }

        // Create a FormData object to send to the Python service
        const formData = new FormData();
        formData.append('file', req.file.buffer, {
            filename: req.file.originalname,
            contentType: req.file.mimetype,
        });

        console.log('Forwarding request to Python Agent Service...');

        // Make the request to the Python FastAPI server
        const agentResponse = await axios.post(PYTHON_AGENT_URL, formData, {
            headers: {
                ...formData.getHeaders(),
            },
        });

        console.log('Received response from Python Agent Service.');

        // Forward the response from the Python service back to the frontend
        res.json(agentResponse.data);

    } catch (error) {
        console.error('Error proxying to agent service:', error.message);
        res.status(500).json({ error: 'Failed to get analysis from agent service.' });
    }
});

module.exports = router;