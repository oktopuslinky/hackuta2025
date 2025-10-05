import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import { ProtectedRoute } from './components/ProtectedRoute';
import ApiTest from './components/ApiTest';
import InterviewScreen from './components/InterviewScreen';
import VoiceMode from './components/VoiceMode';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<InterviewScreen />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="/api-test" element={<ProtectedRoute component={ApiTest} />} />
        <Route path="/voice" element={<VoiceMode />} />
      </Routes>
    </>
  );
}

export default App;
