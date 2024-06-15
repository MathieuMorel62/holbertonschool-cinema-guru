import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './navigation.css';


// Header component that displays the navigation bar
const Header = ({ userUsername, setIsLoggedIn }) => {
  // Function to log out the user
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="header">
      <div className="logo">
        <h1>Cinema Guru</h1>
      </div>
      <div className="right-section">
        <img src="https://picsum.photos/100/100" alt="User avatar" />
        <p className="welcome">Welcome, {userUsername}!</p>
        <div className="logout" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Header;
