const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/conversation', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Use the gemini-pro model and the generateContent method
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const conversationalPrompt = `You are a friendly, conversational AI assistant. Your name is Roo. Be helpful and engaging.

User: ${message}
Roo:`;

    const result = await model.generateContent(conversationalPrompt);
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    console.error('Error in Gemini conversation route:', error);
    res.status(500).json({ error: 'Failed to get response from Gemini' });
  }
});

module.exports = router;