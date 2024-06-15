import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';


// Component for a search bar with an optional icon
const SearchBar = ({
  title = '',
  setTitle = () => {},
  icon = null
}) => {
  // Update the value of the search bar
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="search-bar">
      {icon && <FontAwesomeIcon icon={icon} className="search-icon" />}
      <input
        type="text"
        value={title}
        onChange={handleInput}
        placeholder="Search Movies"
      />
    </div>
  );
};

SearchBar.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),};

export default SearchBar;
