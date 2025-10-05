import React, { useState, useRef, useEffect } from 'react';
import toWav from 'audiobuffer-to-wav';
import { useNavigate, useParams } from 'react-router-dom';
import './VoiceInterface.css';

const VoiceInterface: React.FC = () => {
  const { mode } = useParams();
  const generateSessionId = () => {
    if (typeof window !== 'undefined' && (window as any).crypto) {
      const cryptoObj = (window as any).crypto;
      if (typeof cryptoObj.randomUUID === 'function') {
        return cryptoObj.randomUUID();
      }
      const buf = new Uint8Array(16);
      cryptoObj.getRandomValues(buf);
      buf[6] = (buf[6] & 0x0f) | 0x40;
      buf[8] = (buf[8] & 0x3f) | 0x80;
      const toHex = (n: number) => n.toString(16).padStart(2, '0');
      return (
        toHex(buf[0]) + toHex(buf[1]) + toHex(buf[2]) + toHex(buf[3]) + '-' +
        toHex(buf[4]) + toHex(buf[5]) + '-' +
        toHex(buf[6]) + toHex(buf[7]) + '-' +
        toHex(buf[8]) + toHex(buf[9]) + '-' +
        toHex(buf[10]) + toHex(buf[11]) + toHex(buf[12]) + toHex(buf[13]) + toHex(buf[14]) + toHex(buf[15])
      );
    }
    return Math.random().toString(36).slice(2);
  };
  const [isConversationActive, setIsConversationActive] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [status, setStatus] = useState('Ready to listen');
  const [showAnalysisPrompt, setShowAnalysisPrompt] = useState(false);
  const [pendingAudioUrl, setPendingAudioUrl] = useState<string | null>(null);
  const [playbackError, setPlaybackError] = useState<string | null>(null);
  const navigate = useNavigate();

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const silenceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isConversationActiveRef = useRef(isConversationActive);
  const userAudioBuffersRef = useRef<AudioBuffer[]>([]);
  const isStoppingRef = useRef(false);


  useEffect(() => {
    isConversationActiveRef.current = isConversationActive;
  }, [isConversationActive]);

  const saveUserAudio = async () => {
    const audioBuffers = userAudioBuffersRef.current;
    if (!audioContextRef.current || audioBuffers.length === 0) {
      console.log('No audio to save');
      return;
    }

    const numberOfChannels = audioBuffers[0].numberOfChannels;
    const sampleRate = audioBuffers[0].sampleRate;
    const totalLength = audioBuffers.reduce((acc, buffer) => acc + buffer.length, 0);

    const concatenatedBuffer = audioContextRef.current.createBuffer(
      numberOfChannels,
      totalLength,
      sampleRate
    );

    let offset = 0;
    for (const buffer of audioBuffers) {
      for (let i = 0; i < numberOfChannels; i++) {
        concatenatedBuffer.copyToChannel(buffer.getChannelData(i), i, offset);
      }
      offset += buffer.length;
    }

    const finalWav = toWav(concatenatedBuffer);
    const finalWavBlob = new Blob([new DataView(finalWav)], { type: 'audio/wav' });
    const finalAudioName = `user_audio_${new Date().toISOString().replace(/[:.]/g, '-')}.wav`;

    // Trigger download
    const url = URL.createObjectURL(finalWavBlob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = finalAudioName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    setShowAnalysisPrompt(true);
    setStatus('User audio saved. Ready to view analysis.');
  };

  const stopConversation = async () => {
    isStoppingRef.current = true;
    
    // Stop recording if active
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      // The onstop handler will call saveUserAudio
    } else {
      // If not recording, save audio immediately
      await saveUserAudio();
      
      // Clean up
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
      }
      setIsConversationActive(false);
      setStatus('Ready to listen');
      isStoppingRef.current = false;
      userAudioBuffersRef.current = [];
    }
  };
// h
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
        
        // Store user audio buffer
        userAudioBuffersRef.current.push(audioBuffer);

        const wav = toWav(audioBuffer);
        const wavBlob = new Blob([new DataView(wav)], { type: 'audio/wav' });
        
        if (isStoppingRef.current) {
          // Save the audio
          await saveUserAudio();
          
          // Perform cleanup after saving
          if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
          }
          if (audioContextRef.current) {
            audioContextRef.current.close();
          }
          if (silenceTimeoutRef.current) {
            clearTimeout(silenceTimeoutRef.current);
          }
          setIsConversationActive(false);
          setStatus('Ready to listen');

          // Reset for next conversation
          isStoppingRef.current = false;
          userAudioBuffersRef.current = [];
        } else {
          // Continue with transcription
          handleTranscription(wavBlob);
        }
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

      const geminiEndpoint = mode === 'interview'
        ? 'http://localhost:3001/api/gemini/interview'
        : 'http://localhost:3001/api/gemini/conversation';

      const key = `talkitout:session:${mode === 'interview' ? 'interview' : 'conversation'}`;
      const existingSessionId = localStorage.getItem(key);
      let sessionId: string;
      if (existingSessionId) {
        sessionId = existingSessionId;
      } else {
        sessionId = generateSessionId();
        localStorage.setItem(key, sessionId);
      }
      const geminiResponse = await fetch(geminiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userTranscript, sessionId }),
      });
      const geminiData = await geminiResponse.json();
      const aiResponse = geminiData.response;
      setTranscript(prev => `${prev}\nPeter: ${aiResponse}`);

      setStatus('Speaking...');
      const ttsResponse = await fetch('http://localhost:3001/api/eleven/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: aiResponse }),
      });
      // Validate response
      if (!ttsResponse.ok) {
        console.error('TTS endpoint returned error', ttsResponse.status, await ttsResponse.text());
        setStatus('TTS failed');
        return;
      }

      const ttsAudioBlob = await ttsResponse.blob();
      // Basic validation: blob should be non-empty and audio mime
      if (!ttsAudioBlob || ttsAudioBlob.size === 0) {
        console.error('TTS returned empty audio blob');
        setStatus('TTS returned empty audio');
        return;
      }

      const isAudio = ttsAudioBlob.type && ttsAudioBlob.type.startsWith('audio');
      const audioUrl = URL.createObjectURL(ttsAudioBlob);
      if (!isAudio) {
        console.warn('TTS returned non-audio blob, type=', ttsAudioBlob.type);
        // Still try to play, but show user a fallback if it fails
      }

      // Create audio element and attempt playback. If autoplay is blocked, provide a Play button.
      const audio = new Audio(audioUrl);
      audio.volume = 1.0;
      let played = false;
      try {
        await audio.play();
        played = true;
      } catch (e) {
        console.warn('Autoplay blocked or playback failed, awaiting user interaction to play audio.', e);
        setPlaybackError(String(e));
      }

      if (!played) {
        // Keep URL around so the user can manually play it
        setPendingAudioUrl(audioUrl);
      } else {
        // When playback completes, revoke the URL
        audio.onended = () => {
          URL.revokeObjectURL(audioUrl);
        };
      }
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

  const handleManualPlay = async () => {
    if (!pendingAudioUrl) return;
    try {
      const audio = new Audio(pendingAudioUrl);
      audio.volume = 1.0;
      await audio.play();
      audio.onended = () => {
        URL.revokeObjectURL(pendingAudioUrl);
        setPendingAudioUrl(null);
        setPlaybackError(null);
      };
    } catch (e) {
      console.error('Manual playback failed', e);
      setPlaybackError(String(e));
    }
  };

  const startConversation = async () => {
    try {
      // Reset state for a new conversation
      userAudioBuffersRef.current = [];
      isStoppingRef.current = false;
      setTranscript('');
      setShowAnalysisPrompt(false);

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

  // Revoke pending audio URL on change/unmount to avoid leaking blob URLs
  useEffect(() => {
    return () => {
      if (pendingAudioUrl) {
        try { URL.revokeObjectURL(pendingAudioUrl); } catch (e) { /* noop */ }
      }
    };
  }, [pendingAudioUrl]);

  return (
    <div className="voice-interface-page">
        <div className="voice-interface-container">
            <div className="header">
                <div className="logo">
                    <div className="logo-icon">
                        <svg viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
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

                {pendingAudioUrl && (
                  <div style={{ marginTop: '12px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <button className="prompt-btn" onClick={handleManualPlay}>Play AI response</button>
                    {playbackError && <div style={{ color: '#f87171' }}>Playback error: {playbackError}</div>}
                  </div>
                )}

                {showAnalysisPrompt && (
                  <div className="analysis-prompt">
                    <p>User audio saved. You can now analyze it in the visualizer.</p>
                    <button
                      onClick={() => navigate('/visualizer')}
                      className="prompt-btn"
                    >
                      Go to Visualizer
                    </button>
                  </div>
                )}

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