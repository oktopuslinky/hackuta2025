import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VoiceInterface.css';

const VoiceInterface: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

  const toggleListening = () => {
    if (!isListening) {
      // This is just for the animation, no real functionality
      // It will trigger the browser's permission prompt.
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(() => {
          console.log("Microphone permission granted");
        })
        .catch(() => {
          console.log("Microphone permission denied");
        });
    }
    setIsListening(prevState => !prevState);
  };

  return (
    <div className="voice-interface-page">
        <div className="voice-interface-container">
            <div className="header">
                <div className="logo">
                    <div className="logo-icon">
                        <svg viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2z"/>
                        </svg>
                    </div>
                    TalkItOut
                </div>
               <button onClick={() => navigate('/')} style={{background: 'none', border: '1px solid #333', color: 'white', fontSize: '1rem', cursor: 'pointer', padding: '8px 16px', borderRadius: '20px'}}>Back to Chat</button>
            </div>

            <div className="container">
                <h1>Voice Interface</h1>
                <p className="subtitle">Practice your interview responses with confidence</p>
                
                <div className="mic-container">
                <div className={`pulse-ring ${isListening ? 'active' : ''}`}></div>
                <div className={`pulse-ring ${isListening ? 'active' : ''}`}></div>
                <div className={`pulse-ring ${isListening ? 'active' : ''}`}></div>
                <div id="micIcon" className={`mic-icon ${isListening ? 'listening' : ''}`}>
                    <svg className="mic-svg" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                </div>
                </div>

                <button id="controlBtn" className={`control-button ${isListening ? 'listening' : ''}`} onClick={toggleListening}>
                {isListening ? 'Stop Speaking' : 'Start Speaking'}
                </button>
                
                <p id="statusText" className={`status-text ${isListening ? 'active' : ''}`}>
                {isListening ? 'Listening...' : 'Ready to listen'}
                </p>

                <div className="quick-prompts">
                <button className="prompt-btn">Tell me about yourself</button>
                <button className="prompt-btn">What are your strengths?</button>
                <button className="prompt-btn">Describe a challenge</button>
                </div>

                <div className="transcript">
                <div className="transcript-label">Transcript</div>
                <div id="transcriptText" className="transcript-text">Your speech will appear here...</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default VoiceInterface;