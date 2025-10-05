import { useState } from 'react';
import { Link } from 'react-router-dom';

const VoiceMode = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTranscript('Listening...');
      // Simulate speech-to-text
      setTimeout(() => {
        setTranscript('I\'d like to practice my response to "Tell me about yourself."');
      }, 3000);
    } else {
      setTranscript('');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1410 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '24px'
    }}>
      <Link to="/" style={{ position: 'absolute', top: '24px', left: '24px', color: '#a1a1aa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Chat
      </Link>

      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Voice Mode</h1>
        <p style={{ color: '#a1a1aa', marginTop: '8px' }}>Speak naturally and get instant feedback.</p>
      </div>

      <div onClick={toggleRecording} style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #f97316, #ea580c)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: '0 10px 40px rgba(249, 115, 22, 0.4)'
      }}>
        {isRecording && (
          <div style={{
            position: 'absolute',
            inset: '-20px',
            borderRadius: '50%',
            background: 'rgba(249, 115, 22, 0.2)',
            animation: 'pulse 2s infinite'
          }}></div>
        )}
        <svg style={{ width: '80px', height: '80px' }} fill="white" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
        </svg>
      </div>

      <p style={{ marginTop: '32px', color: '#a1a1aa', fontStyle: 'italic' }}>
        {isRecording ? 'Recording...' : 'Tap to start recording'}
      </p>

      <div style={{ width: '100%', maxWidth: '600px', marginTop: '48px' }}>
        <h2 style={{ color: '#fb923c', marginBottom: '16px' }}>Transcript</h2>
        <div style={{
          background: 'rgba(23, 23, 23, 0.7)',
          padding: '24px',
          borderRadius: '16px',
          minHeight: '100px',
          border: '1px solid rgba(82, 82, 82, 0.3)'
        }}>
          <p>{transcript}</p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.7; }
          70% { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default VoiceMode;