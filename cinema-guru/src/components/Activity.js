import React from 'react';
import PropTypes from 'prop-types';
import './components.css';

const Activity = ({ username, movieTitle, date }) => {
  return (
    <li className="activity-item">
      <p><span className="activity-username">{username}</span> added <span className="activity-movie">{movieTitle}</span> to watch later - {date}</p>
    </li>
  );
};


Activity.propTypes = {
  username: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Activity;
