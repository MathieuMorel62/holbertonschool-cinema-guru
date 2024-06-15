import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './movies.css';


// Tag component to filter movie genres
const Tag = ({ genre, genres, setGenres }) => {
  const [selected, setSelected] = useState(false);

  // Manages the click on the tag to add or remove a genre from the list
  const handleTag = () => {
    if (selected) {
      setGenres(genres.filter(g => g !== genre));
    } else {
      setGenres([...genres, genre]);
    }
    setSelected(!selected);
  };

  return (
    <li className={`tag ${selected ? 'selected' : ''}`} onClick={handleTag}>
      {genre}
    </li>
  );
};

Tag.propTypes = {
  genre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGenres: PropTypes.func.isRequired,
};

export default Tag;
