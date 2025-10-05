import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Profile from './components/Profile';
import { ProtectedRoute } from './components/ProtectedRoute';
import ApiTest from './components/ApiTest';
import InterviewScreen from './components/InterviewScreen';
import Sidebar from './components/Sidebar';
import VoiceInterface from './components/VoiceInterface';
import EmotionVisualizer from './components/EmotionVisualizer';
import Landing from './components/landing/landing';
import './App.css';

const MainApp = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      const addUser = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              auth0Id: user.sub,
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to add user');
          }

          await response.json();
        } catch (error) {
          console.error(error);
        }
      };

      addUser();
    }
  }, [isAuthenticated, user]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`app-layout ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<InterviewScreen />} />
          <Route path="/interview" element={<InterviewScreen />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          <Route path="/api-test" element={<ProtectedRoute component={ApiTest} />} />
          <Route path="/voice-interface" element={<VoiceInterface />} />
          <Route path="/visualizer" element={<EmotionVisualizer />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        navigate('/app');
      } else {
        navigate('/landing');
      }
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/*" element={<MainApp />} />
    </Routes>
  );
}

export default App;