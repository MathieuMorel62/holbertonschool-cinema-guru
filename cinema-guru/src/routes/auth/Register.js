import React from 'react';
import PropTypes from 'prop-types';
import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Register = ({ username, password, setUsername, setPassword }) => {
  return (
    <form className="auth-form">
      <div className='title-auth'>
        <p>Create a new account</p>
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
      <button type="submit" className='btn-auth'><FontAwesomeIcon icon={faKey} className="input-icon" /> Sign Up</button>
    </form>
  );
};

Register.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired
};

export default Register;