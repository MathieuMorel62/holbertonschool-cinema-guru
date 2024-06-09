import React, { useState, useEffect } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      fetch('http://localhost:8000/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setIsLoggedIn(true);
            setUserUsername(data.username);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>Welcome, {userUsername}!</div>
      ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      )}
    </div>
  );
};

export default App;
