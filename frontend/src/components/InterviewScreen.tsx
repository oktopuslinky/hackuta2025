import { useAuth0 } from '@auth0/auth0-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const CleanInterviewScreen = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setShowWelcome(false);
      setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
      setInput('');
      setIsLoading(true);
      
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { 
          id: Date.now(), 
          text: 'That\'s a great question. Let me help you prepare for that. In interviews, it\'s important to be authentic and confident.', 
          sender: 'ai' 
        }]);
        setIsLoading(false);
      }, 1500);
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
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="blob-1" style={{ 
          position: 'absolute', 
          top: '20%', 
          left: '20%', 
          width: '400px', 
          height: '400px', 
          background: 'rgba(249, 115, 22, 0.08)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
        <div className="blob-2" style={{ 
          position: 'absolute', 
          bottom: '20%', 
          right: '20%', 
          width: '350px', 
          height: '350px', 
          background: 'rgba(234, 88, 12, 0.06)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
      </div>

      {/* Header with Login */}
      <div style={{ position: 'absolute', top: 0, right: 0, padding: '24px', zIndex: 50 }}>
        {isAuthenticated ? (
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="login-btn"
            style={{
              padding: '10px 24px',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, #f97316, #ea580c)',
              color: 'white',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(249, 115, 22, 0.25)',
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="login-btn"
            style={{
              padding: '10px 24px',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, #f97316, #ea580c)',
              color: 'white',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(249, 115, 22, 0.25)',
            }}
          >
            Log In
          </button>
        )}
      </div>

      {showWelcome && messages.length === 0 ? (
        /* Welcome State */
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '100%', 
          padding: '0 24px',
          zIndex: 10 
        }}>
          {/* Logo */}
          <div className="fade-in" style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', marginBottom: '8px' }}>
              <div className="float-animation" style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(249, 115, 22, 0.4)'
              }}>
                <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white'
              }}>
                TalkItOut
              </span>
            </div>
            <p className="fade-in-delay" style={{ textAlign: 'center', color: '#a1a1aa', marginTop: '12px', fontSize: '18px' }}>
              Your AI-powered interview coach
            </p>
          </div>

          {/* Input Area */}
          <div className="fade-in-delay-2" style={{ width: '100%', maxWidth: '768px', marginBottom: '32px' }}>
            <div style={{ position: 'relative' }} className="input-glow-wrapper">
              <div className="glow-border"></div>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(23, 23, 23, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '9999px',
                border: '1px solid rgba(82, 82, 82, 0.3)',
                padding: '16px 24px'
              }}>
                <button style={{ color: '#a1a1aa', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} className="icon-btn">
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="What would you like to practice today?"
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    outline: 'none',
                    fontSize: '16px',
                    color: 'white',
                    border: 'none'
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  style={{ color: '#a1a1aa', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  className="icon-btn"
                >
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button className="mic-btn" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                }}>
                  <svg style={{ width: '20px', height: '20px' }} fill="white" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Feature Card */}
          <div className="fade-in-delay-3 feature-card" style={{
            background: 'rgba(23, 23, 23, 0.7)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '32px',
            maxWidth: '448px',
            border: '1px solid rgba(82, 82, 82, 0.3)',
            transition: 'all 0.5s'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontWeight: 600,
                  fontSize: '20px',
                  marginBottom: '12px',
                  color: '#fb923c'
                }}>
                  Practice with Confidence
                </h3>
                <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: '1.6' }}>
                  Get personalized feedback and improve your interview skills in a supportive environment.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => setInput('Tell me about yourself')}
                className="primary-btn"
                style={{
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(to right, #f97316, #ea580c)',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                }}
              >
                Start Practicing
              </button>
              <button className="secondary-btn" style={{
                padding: '10px 20px',
                borderRadius: '9999px',
                background: 'rgba(64, 64, 64, 0.5)',
                color: '#d4d4d8',
                fontSize: '14px',
                border: '1px solid rgba(82, 82, 82, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                Learn More
              </button>
            </div>
          </div>

          {/* Quick suggestions */}
          <div className="fade-in-delay-4" style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', maxWidth: '672px' }}>
            {[
              'Tell me about yourself',
              'What are your strengths?',
              'Describe a challenge you faced',
              'Why this role?'
            ].map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => setInput(suggestion)}
                className="suggestion-btn"
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  background: 'rgba(64, 64, 64, 0.3)',
                  border: '1px solid rgba(82, 82, 82, 0.3)',
                  fontSize: '14px',
                  color: '#d4d4d8',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Chat State */
        <>
          <div style={{ flex: 1, overflowY: 'auto', width: '100%' }}>
            <div style={{ maxWidth: '768px', margin: '0 auto', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 10 }}>
              {messages.map((message, idx) => (
                <div
                  key={message.id}
                  className="message-slide"
                  style={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    animationDelay: `${idx * 0.1}s`
                  }}
                >
                  <div style={{
                    maxWidth: '80%',
                    borderRadius: '16px',
                    padding: '12px 20px',
                    background: message.sender === 'user' 
                      ? 'linear-gradient(to right, #f97316, #ea580c)'
                      : 'rgba(23, 23, 23, 0.95)',
                    color: 'white',
                    border: message.sender === 'user' ? 'none' : '1px solid rgba(82, 82, 82, 0.3)',
                    boxShadow: message.sender === 'user' ? '0 4px 15px rgba(249, 115, 22, 0.25)' : 'none'
                  }}>
                    <p style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="fade-in" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    background: 'rgba(23, 23, 23, 0.95)',
                    borderRadius: '16px',
                    padding: '12px 20px',
                    border: '1px solid rgba(82, 82, 82, 0.3)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <div className="dot-bounce-1" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fb923c' }}></div>
                        <div className="dot-bounce-2" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fb923c' }}></div>
                        <div className="dot-bounce-3" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fb923c' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area - Chat mode */}
          <div style={{ width: '100%', borderTop: '1px solid rgba(82, 82, 82, 0.2)', background: 'rgba(15, 15, 15, 0.8)', backdropFilter: 'blur(20px)', zIndex: 10 }}>
            <div style={{ maxWidth: '768px', margin: '0 auto', padding: '24px' }}>
              <div style={{ position: 'relative' }} className="input-glow-wrapper">
                <div className="glow-border"></div>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(23, 23, 23, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '9999px',
                  border: '1px solid rgba(82, 82, 82, 0.3)',
                  padding: '16px 24px'
                }}>
                  <button style={{ color: '#a1a1aa', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} className="icon-btn">
                    <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="What would you like to practice today?"
                    disabled={isLoading}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      outline: 'none',
                      fontSize: '16px',
                      color: 'white',
                      border: 'none'
                    }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    style={{ color: '#a1a1aa', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    className="icon-btn"
                  >
                    <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="mic-btn" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                  }}>
                    <svg style={{ width: '20px', height: '20px' }} fill="white" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.08; }
          50% { transform: scale(1.05); opacity: 0.12; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .fade-in-delay { animation: fadeIn 0.6s ease-out 0.2s forwards; opacity: 0; }
        .fade-in-delay-2 { animation: fadeIn 0.6s ease-out 0.4s forwards; opacity: 0; }
        .fade-in-delay-3 { animation: fadeIn 0.6s ease-out 0.6s forwards; opacity: 0; }
        .fade-in-delay-4 { animation: fadeIn 0.6s ease-out 0.8s forwards; opacity: 0; }
        .message-slide { animation: slideIn 0.4s ease-out forwards; }
        .float-animation { animation: float 3s ease-in-out infinite; }
        
        .blob-1 { animation: pulse 5s ease-in-out infinite; }
        .blob-2 { animation: pulse 7s ease-in-out infinite; animation-delay: 2s; }

        .dot-bounce-1 { animation: bounce 1.2s ease-in-out infinite; }
        .dot-bounce-2 { animation: bounce 1.2s ease-in-out infinite; animation-delay: 0.15s; }
        .dot-bounce-3 { animation: bounce 1.2s ease-in-out infinite; animation-delay: 0.3s; }

        .login-btn:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4); }
        .primary-btn:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(249, 115, 22, 0.5); }
        .secondary-btn:hover { background: rgba(82, 82, 82, 0.5); transform: scale(1.05); }
        .icon-btn:hover { color: #fb923c; transform: scale(1.1); }
        .mic-btn:hover { transform: scale(1.1); box-shadow: 0 6px 20px rgba(249, 115, 22, 0.5); }
        .suggestion-btn:hover { background: rgba(82, 82, 82, 0.5); border-color: rgba(251, 146, 60, 0.4); color: white; transform: scale(1.05); }
        .feature-card:hover { border-color: rgba(251, 146, 60, 0.4); transform: scale(1.05); box-shadow: 0 20px 40px rgba(249, 115, 22, 0.15); }
        
        .input-glow-wrapper { position: relative; }
        .glow-border {
          position: absolute;
          inset: -2px;
          background: linear-gradient(to right, #f97316, #ea580c);
          border-radius: 9999px;
          filter: blur(8px);
          opacity: 0.15;
          transition: opacity 0.5s;
        }
        .input-glow-wrapper:hover .glow-border { opacity: 0.3; }
      `}</style>
    </div>
  );
};

export default CleanInterviewScreen;