import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';


const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [switchAuth, setSwitchAuth] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container">
      <div className="auth-header">
        <button 
          className={switchAuth ? "active" : ""}
          onClick={() => setSwitchAuth(true)}
        >
          Sign In
        </button>
        <button 
          className={!switchAuth ? "active" : ""}
          onClick={() => setSwitchAuth(false)}
        >
          Sign Up
        </button>
      </div>
      {switchAuth ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
    </div>
  );
};

export default Authentication;
