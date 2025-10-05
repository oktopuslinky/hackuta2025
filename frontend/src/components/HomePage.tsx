import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1410 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 24px'
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px' }}>Welcome to TalkItOut</h1>
      <p style={{ fontSize: '18px', color: '#a1a1aa', maxWidth: '600px' }}>
        Your AI-powered coach for interview preparation and communication practice. 
        Navigate through the sidebar to start improving your skills.
      </p>
    </div>
  );
};

export default HomePage;