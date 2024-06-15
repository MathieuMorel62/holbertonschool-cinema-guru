import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';
import './auth.css';


// Register component
const Register = ({ username, password, setUsername, setPassword, handleSubmit }) => {

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className='title-auth'>
        <p>Create a new account</p>
      </div>
      <div className="input-container-log">
        <label><FontAwesomeIcon icon={faUser} className="input-icon" /> Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div className="input-container-log">
        <label><FontAwesomeIcon icon={faKey} className="input-icon" /> Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button type="submit" className='btn-auth'><FontAwesomeIcon icon={faPlus} className="input-icon" /> Sign Up</button>
    </form>
  );
};

Register.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Register;
