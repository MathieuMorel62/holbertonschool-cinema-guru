import React, { useState } from 'react';
import './movies.css';
import PropTypes from 'prop-types';

const Tag = ({ genre, filter, genres, setGenres }) => {
  const [selected, setSelected] = useState(false);

  const handleTag = () => {
    if (selected) {
      setGenres(genres.filter(g => g !== genre));
      setSelected(false);
    } else {
      setGenres([...genres, genre]);
      setSelected(true);
    }
  };

  return (
    <li className={`tag ${selected ? 'selected' : ''}`} onClick={handleTag}>
      {genre}
    </li>
  );
};

Tag.propTypes = {
  genre: PropTypes.string.isRequired,
  filter: PropTypes.bool.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGenres: PropTypes.func.isRequired,
};

export default Tag;
