import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import Register from './Register';
import './auth.css';


// Component to handle user authentication
const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, setSwitchAuth] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const endpoint = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';

    // Send the request to the server
    axios.post(endpoint, { username, password })
      .then(response => {
        const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
        setErrorMessage("");
      })
      .catch(error => {
        console.error('Error:', error);
        if (error.response) {
          switch (error.response.status) {
            case 400:
              setErrorMessage("Invalid request. Please check your information.");
              break;
            case 401:
              setErrorMessage("Incorrect username or password.");
              break;
            case 500:
              setErrorMessage("Internal server error. Please try again later.");
              break;
            default:
              setErrorMessage("An error has occurred. Please try again.");
          }
        } else {
          setErrorMessage("Unable to contact the server. Please check your internet connection.");
        }
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
