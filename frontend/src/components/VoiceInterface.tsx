import React, { useState, useRef, useEffect } from 'react';
import toWav from 'audiobuffer-to-wav';
import { useNavigate } from 'react-router-dom';
import './VoiceInterface.css';

const VoiceInterface: React.FC = () => {
  const [isConversationActive, setIsConversationActive] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [status, setStatus] = useState('Ready to listen');
  const navigate = useNavigate();

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const silenceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isConversationActiveRef = useRef(isConversationActive);

  useEffect(() => {
    isConversationActiveRef.current = isConversationActive;
  }, [isConversationActive]);

  const stopConversation = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close();
    }
    if (silenceTimeoutRef.current) {
      clearTimeout(silenceTimeoutRef.current);
    }
    setIsConversationActive(false);
    setStatus('Ready to listen');
  };

  const startRecording = () => {
    if (!streamRef.current) return;
    setStatus('Listening...');

    const mediaRecorder = new MediaRecorder(streamRef.current);
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.ondataavailable = event => {
      audioChunksRef.current.push(event.data);
    };
    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      if (audioBlob.size > 0) {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
        const arrayBuffer = await audioBlob.arrayBuffer();
        const audioBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);
        const wav = toWav(audioBuffer);
        const wavBlob = new Blob([new DataView(wav)], { type: 'audio/wav' });
        handleTranscription(wavBlob);
      }
      audioChunksRef.current = [];
    };
    mediaRecorder.start();

    if (!audioContextRef.current || !streamRef.current) return;
    const source = audioContextRef.current.createMediaStreamSource(streamRef.current);
    if (!audioContextRef.current) return;
    const analyser = audioContextRef.current.createAnalyser();
    analyserRef.current = analyser;
    analyser.fftSize = 2048;
    source.connect(analyser);
    detectSilence();
  };

  const detectSilence = () => {
    if (!analyserRef.current || !mediaRecorderRef.current || mediaRecorderRef.current.state !== 'recording') return;

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteTimeDomainData(dataArray);

    let isSilent = true;
    for (let i = 0; i < dataArray.length; i++) {
      if (Math.abs(dataArray[i] - 128) > 5) {
        isSilent = false;
        break;
      }
    }

    if (isSilent) {
      if (!silenceTimeoutRef.current) {
        silenceTimeoutRef.current = setTimeout(() => {
          if (mediaRecorderRef.current?.state === 'recording') {
            mediaRecorderRef.current.stop();
          }
        }, 2000);
      }
    } else {
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = null;
      }
    }

    requestAnimationFrame(detectSilence);
  };

  const handleTranscription = async (audioBlob: Blob) => {
    setStatus('Transcribing...');
    const formData = new FormData();
    formData.append('audioFile', audioBlob, 'audio.wav');

    try {
      const sstResponse = await fetch('http://localhost:3001/api/eleven/sst', {
        method: 'POST',
        body: formData,
      });
      const sstData = await sstResponse.json();
      const userTranscript = sstData.text;
      setTranscript(prev => `${prev}\nUser: ${userTranscript}`);
      setStatus('Thinking...');

      const geminiResponse = await fetch('http://localhost:3001/api/gemini/conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userTranscript }),
      });
      const geminiData = await geminiResponse.json();
      const aiResponse = geminiData.response;
      setTranscript(prev => `${prev}\nRoo: ${aiResponse}`);

      setStatus('Speaking...');
      const ttsResponse = await fetch('http://localhost:3001/api/eleven/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: aiResponse }),
      });

      const ttsAudioBlob = await ttsResponse.blob();
      const audioUrl = URL.createObjectURL(ttsAudioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
      audio.onended = () => {
        if (isConversationActiveRef.current) {
          startRecording();
        } else {
          setStatus('Ready to listen');
        }
      };
    } catch (error) {
      console.error('Error during conversation cycle:', error);
      setStatus('Error. Please try again.');
      stopConversation();
    }
  };

  const startConversation = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      setIsConversationActive(true);
      startRecording();
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setStatus('Microphone access denied.');
    }
  };

  const toggleConversation = () => {
    if (isConversationActive) {
      stopConversation();
    } else {
      startConversation();
    }
  };

  useEffect(() => {
    return () => {
      stopConversation();
    };
  }, []);

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
                <div className={`pulse-ring ${isConversationActive ? 'active' : ''}`}></div>
                <div className={`pulse-ring ${isConversationActive ? 'active' : ''}`}></div>
                <div className={`pulse-ring ${isConversationActive ? 'active' : ''}`}></div>
                <div id="micIcon" className={`mic-icon ${isConversationActive ? 'listening' : ''}`}>
                    <svg className="mic-svg" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                </div>
                </div>

                <button id="controlBtn" className={`control-button ${isConversationActive ? 'listening' : ''}`} onClick={toggleConversation}>
                {isConversationActive ? 'Stop Conversation' : 'Start Conversation'}
                </button>
                
                <p id="statusText" className={`status-text ${isConversationActive ? 'active' : ''}`}>
                {status}
                </p>

                <div className="quick-prompts">
                <button className="prompt-btn">Tell me about yourself</button>
                <button className="prompt-btn">What are your strengths?</button>
                <button className="prompt-btn">Describe a challenge</button>
                </div>

                <div className="transcript">
                <div className="transcript-label">Transcript</div>
                <div id="transcriptText" className="transcript-text" style={{ whiteSpace: 'pre-wrap' }}>{transcript || 'Your speech will appear here...'}</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default VoiceInterface;