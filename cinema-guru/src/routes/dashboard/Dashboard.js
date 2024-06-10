import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <SideBar />
      <div className="dashboard-content">
        {/* Contenu du Dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;
