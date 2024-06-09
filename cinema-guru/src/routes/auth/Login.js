import React from 'react';
import PropTypes from 'prop-types';
import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = ({ username, password, setUsername, setPassword, handleSubmit }) => {
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className='title-auth'>
        <p>Sign in with your account</p>
      </div>
      <div className="input-container">
        <label><FontAwesomeIcon icon={faUser} className="input-icon" /> Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div className="input-container">
        <label><FontAwesomeIcon icon={faKey} className="input-icon" /> Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button type="submit" className='btn-auth'><FontAwesomeIcon icon={faKey} className="input-icon" /> Sign In</button>
    </form>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Login;
