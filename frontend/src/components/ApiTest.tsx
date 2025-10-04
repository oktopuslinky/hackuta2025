import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ApiTest = () => {
  const [publicMessage, setPublicMessage] = useState('');
  const [privateMessage, setPrivateMessage] = useState('');
  const { getAccessTokenSilently } = useAuth0();

  const getPublicMessage = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/public');
      const data = await response.json();
      setPublicMessage(data.message);
    } catch (error) {
      console.error(error);
      setPublicMessage('Error fetching public message.');
    }
  };

  const getPrivateMessage = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch('http://localhost:3001/api/private', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setPrivateMessage(data.message);
    } catch (error)
    {
      console.error(error);
      setPrivateMessage('Error fetching private message.');
    }
  };

  return (
    <div>
      <h1>API Test</h1>
      <div>
        <button onClick={getPublicMessage}>Get Public Message</button>
        <p>{publicMessage}</p>
      </div>
      <div>
        <button onClick={getPrivateMessage}>Get Private Message</button>
        <p>{privateMessage}</p>
      </div>
    </div>
  );
};

export default ApiTest;