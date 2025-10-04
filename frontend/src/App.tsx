import { Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { ProtectedRoute } from './components/ProtectedRoute';
import ApiTest from './components/ApiTest';
import InterviewScreen from './components/InterviewScreen';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated && <Link to="/profile">Profile</Link>}
        {isAuthenticated && <Link to="/api-test">API Test</Link>}
      </nav>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Routes>
        <Route path="/" element={<InterviewScreen />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="/api-test" element={<ProtectedRoute component={ApiTest} />} />
      </Routes>
    </>
  );
}

export default App;
