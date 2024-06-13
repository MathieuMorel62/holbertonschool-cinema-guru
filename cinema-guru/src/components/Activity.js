import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import './components.css';


const Activity = ({ username = 'Unknown', movieTitle = 'Unknown', date = 'Unknown' }) => {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');

  return (
    <li className="activity-item">
      <p><span className="activity-username">{username}</span> added <span className="activity-movie">{movieTitle}</span> to watch later - {formattedDate}</p>
    </li>
  );
};

Activity.propTypes = {
  username: PropTypes.string,
  movieTitle: PropTypes.string,
  date: PropTypes.string,
};

export default Activity;
