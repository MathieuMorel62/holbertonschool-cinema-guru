import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import './components.css';

const Activity = ({ username = 'Unknown', movieTitle = 'Unknown', date = 'Unknown', activityType = 'Unknown' }) => {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');
  let activityMessage;

  switch (activityType) {
    case 'favorite':
      activityMessage = 'added to favorites';
      break;
    case 'watchLater':
      activityMessage = 'added to watch later';
      break;
    case 'removeFavorited':
      activityMessage = 'removed from favorites';
      break;
    case 'removeWatchLater':
      activityMessage = 'removed from watch later';
      break;
    default:
      activityMessage = 'performed an activity';
  }

  return (
    <li className="activity-item">
      <p>
        <span className="activity-username">{username}</span> {activityMessage} <span className="activity-movie">{movieTitle}</span> - {formattedDate}
      </p>
    </li>
  );
};

Activity.propTypes = {
  username: PropTypes.string,
  movieTitle: PropTypes.string,
  date: PropTypes.string,
  activityType: PropTypes.string,
};

export default Activity;
