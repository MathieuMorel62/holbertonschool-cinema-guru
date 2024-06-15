import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import './components.css';


// Activity component that displays a message based on user activity
const Activity = ({
  username = 'Unknown',
  movieTitle = 'Unknown',
  date = 'Unknown',
  activityType = 'Unknown'
}) => {
  // Format the date to be more readable
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');

  // Get the activity message based on the activity type
  const activityMessages = {
    favorite: 'added to favorites',
    watchLater: 'added to watch later',
    removeFavorited: 'removed from favorites',
    removeWatchLater: 'removed from watch later',
  };

  const activityMessage = activityMessages[activityType] || 'performed an activity';

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
