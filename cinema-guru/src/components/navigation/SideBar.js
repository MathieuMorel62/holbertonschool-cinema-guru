import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity';
import './navigation.css';


// SideBar component that displays the sidebar navigation
const SideBar = () => {
  const [small, setSmall] = useState(false);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPage, setSelectedPage] = useState('home');
  const navigate = useNavigate();

  // Function to set the selected page and navigate to the page
  const setPage = (pageName) => {
    setSelectedPage(pageName);
    navigate(`/${pageName}`);
  };

  // Fetch the latest activities when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:8000/api/activity', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setActivities(response.data);
      } catch (error) {
        setError('Failed to load activities. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <nav
      className={`sidebar ${small ? "small" : ""}`}
      onMouseEnter={() => setSmall(false)}
      onMouseLeave={() => setSmall(true)}
    >
      <ul className="navigation">
        <NavItem 
          icon={faFolder} 
          label="Home" 
          pageName="home" 
          selectedPage={selectedPage} 
          setPage={setPage} 
          small={small} 
        />
        <NavItem 
          icon={faStar} 
          label="Favorites" 
          pageName="favorites" 
          selectedPage={selectedPage} 
          setPage={setPage} 
          small={small} 
        />
        <NavItem 
          icon={faClock} 
          label="Watch Later" 
          pageName="watchlater" 
          selectedPage={selectedPage} 
          setPage={setPage} 
          small={small} 
        />
      </ul>
      { !small && (
        <div className="activities-container">
          <div className="latest-activities">
            <h2>Latest Activities</h2>
            <div className="divider"></div>
          </div>
          <ul className="activities">
            {loading && <li>Loading...</li>}
            {error && <li className="activity-error">{error}</li>}
            {!loading && activities.length === 0 ? (
              <li className="activity-empty">Empty list</li>
            ) : (
              activities.slice(0, 10).map(activity => (
                <Activity
                  key={activity.id}
                  username={activity.user.username}
                  movieTitle={activity.title.title}
                  date={activity.createdAt}
                  activityType={activity.activityType}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

// NavItem component that displays a navigation item
const NavItem = ({ icon, label, pageName, selectedPage, setPage, small }) => (
  <li 
    onClick={() => setPage(pageName)}
    className={selectedPage === pageName ? 'selected' : ''}
  >
    <FontAwesomeIcon icon={icon} />
    { !small && label }
  </li>
);

export default SideBar;
