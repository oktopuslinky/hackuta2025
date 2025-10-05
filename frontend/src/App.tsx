import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import { ProtectedRoute } from './components/ProtectedRoute';
import ApiTest from './components/ApiTest';
import InterviewScreen from './components/InterviewScreen';
import Sidebar from './components/Sidebar';
import VoiceInterface from './components/VoiceInterface';
import './App.css';

function App() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="app-layout">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<InterviewScreen />} />
          <Route path="/interview" element={<InterviewScreen />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          <Route path="/api-test" element={<ProtectedRoute component={ApiTest} />} />
          <Route path="/voice-interface" element={<VoiceInterface />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;