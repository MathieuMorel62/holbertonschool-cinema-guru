import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';


const SearchBar = ({ title, setTitle, icon }) => {
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
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  icon: PropTypes.object,
};

export default SearchBar;
