import React, { useState } from 'react';
import './auth.css';
import axios from 'axios';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, setSwitchAuth] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const endpoint = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';

    axios.post(endpoint, { username, password })
      .then(response => {
        const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
        setErrorMessage(""); // Clear error message on successful login/register
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage(error.response ? error.response.data.message : "An error occurred");
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <button 
          className={_switch ? "active" : ""}
          onClick={() => setSwitchAuth(true)}
        >
          Sign In
        </button>
        <button 
          className={!_switch ? "active" : ""}
          onClick={() => setSwitchAuth(false)}
        >
          Sign Up
        </button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Authentication;
