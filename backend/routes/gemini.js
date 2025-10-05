const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// In-memory session store for conversational context
// Keyed by sessionId; value: { mode: 'conversation' | 'interview', messages: [{ role, content }] }
const sessionStore = new Map();

function getOrCreateSession(sessionId, mode) {
  if (!sessionId) return null;
  if (!sessionStore.has(sessionId)) {
    sessionStore.set(sessionId, { mode, messages: [] });
  }
  const session = sessionStore.get(sessionId);
  if (mode && session.mode !== mode) {
    session.mode = mode;
  }
  return session;
}

function buildPromptFromHistory(systemPreamble, historyMessages, latestUserMessage) {
  const historyText = historyMessages
    .map(m => `${m.role === 'user' ? 'User' : 'Roo'}: ${m.content}`)
    .join('\n');
  const parts = [systemPreamble.trim()];
  if (historyText) parts.push(historyText);
  parts.push(`User: ${latestUserMessage}`);
  parts.push('Roo:');
  return parts.join('\n\n');
}

router.post('/conversation', async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Use the gemini-pro model and the generateContent method
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const session = getOrCreateSession(sessionId, 'conversation');
    const systemPreamble = `You are a friendly, conversational AI assistant. Your name is Roo. Be helpful and engaging.`;
    const history = session ? session.messages : [];
    const conversationalPrompt = buildPromptFromHistory(systemPreamble, history, message);

    const result = await model.generateContent(conversationalPrompt);
    const response = await result.response;
    const text = response.text();

    if (session) {
      session.messages.push({ role: 'user', content: message });
      session.messages.push({ role: 'assistant', content: text });
    }

    res.json({ response: text });
  } catch (error) {
    console.error('Error in Gemini conversation route:', error);
    res.status(500).json({ error: 'Failed to get response from Gemini' });
  }
});

router.post('/interview', async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const session = getOrCreateSession(sessionId, 'interview');
    const systemPreamble = `You are an expert interview coach (Roo). Your goal is to help the user practice for job interviews. Provide constructive feedback, ask follow-up questions, and simulate a real interview experience. Be encouraging and helpful.`;
    const history = session ? session.messages : [];
    const interviewPrompt = buildPromptFromHistory(systemPreamble, history, message);

    const result = await model.generateContent(interviewPrompt);
    const response = await result.response;
    const text = response.text();

    if (session) {
      session.messages.push({ role: 'user', content: message });
      session.messages.push({ role: 'assistant', content: text });
    }

    res.json({ response: text });
  } catch (error) {
    console.error('Error in Gemini interview route:', error);
    res.status(500).json({ error: 'Failed to get response from Gemini' });
  }
});

module.exports = router;