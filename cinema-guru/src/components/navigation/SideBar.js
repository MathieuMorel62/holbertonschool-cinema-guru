import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity';
import './navigation.css';

const SideBar = () => {
  const [small, setSmall] = useState(false);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const setPage = (pageName) => {
    navigate(`/${pageName}`);
  };

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
        console.log('Activities fetched:', response.data); // Log pour vérifier les données reçues
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
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
        <li onClick={() => setPage("home")}>
          <FontAwesomeIcon icon={faFolder} />
          { !small && "Home" }
        </li>
        <li onClick={() => setPage("favorites")}>
          <FontAwesomeIcon icon={faStar} />
          { !small && "Favorites" }
        </li>
        <li onClick={() => setPage("watchlater")}>
          <FontAwesomeIcon icon={faClock} />
          { !small && "Watch Later" }
        </li>
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
                />
              ))
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SideBar;
