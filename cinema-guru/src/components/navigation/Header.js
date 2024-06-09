import React from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Header = ({ userUsername, setIsLoggedIn }) => {
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

export default Header;
