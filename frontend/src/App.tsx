import { Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { ProtectedRoute } from './components/ProtectedRoute';
import ApiTest from './components/ApiTest';
import './App.css';

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  useEffect(() => {
    console.log(user)
    console.log(isLoading)
    if (isAuthenticated && user) {
      const addUser = async () => {
        console.log(user)
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

          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };

      addUser();
    }
  }, [isAuthenticated, isLoading, user]);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated && <Link to="/profile">Profile</Link>}
        {isAuthenticated && <Link to="/api-test">API Test</Link>}
      </nav>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="/api-test" element={<ProtectedRoute component={ApiTest} />} />
      </Routes>
    </>
  );
}

export default App;

