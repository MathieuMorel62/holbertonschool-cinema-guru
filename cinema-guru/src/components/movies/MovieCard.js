import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import useImage from '../../hooks/useImage';
import popcornImage from '../../assets/popcorn.png';


// MovieCard component to display movie information and actions
const MovieCard = ({ movie, onClick }) => {
  const { imdbId, title, synopsis, imageurls = [], genres } = movie;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);
  const posterUrl = useImage(imageurls.length > 0 ? imageurls[0] : popcornImage, popcornImage);
  const defaultSynopsis = "Synopsis not available";

  // Fetch the favorite and watch later status of the movie
  useEffect(() => {
    const fetchStatus = async () => {
      const token = localStorage.getItem('accessToken');
      try {
        const favoriteResponse = await axios.get('http://localhost:8000/api/titles/favorite/', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const watchLaterResponse = await axios.get('http://localhost:8000/api/titles/watchlater/', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setIsFavorite(favoriteResponse.data.some(fav => fav.imdbId === imdbId));
        setIsWatchLater(watchLaterResponse.data.some(watch => watch.imdbId === imdbId));
      } catch (error) {
        console.error('Error fetching movie status:', error);
      }
    };
    fetchStatus();
  }, [imdbId]);


  // Handle click events for adding/removing movie to/from favorite or watch later list
  const handleClick = async (type) => {
    const token = localStorage.getItem('accessToken');
    try {
      const url = `http://localhost:8000/api/titles/${type}/${imdbId}`;
      const method = (type === 'favorite' ? isFavorite : isWatchLater) ? 'delete' : 'post';
      await axios({ method, url, headers: { 'Authorization': `Bearer ${token}` } });
      if (type === 'favorite') {
        setIsFavorite(!isFavorite);
      } else {
        setIsWatchLater(!isWatchLater);
      }
    } catch (error) {
      console.error(`Error ${type === 'favorite' ? (isFavorite ? 'removing' : 'adding') : (isWatchLater ? 'removing' : 'adding')} ${type}:`, error);
    }
  };

  return (
    <li className="movie-card" onClick={() => onClick(movie)}>
      {posterUrl && <img src={posterUrl} alt={title} />}
      <div className="movie-actions">
        <FontAwesomeIcon 
          icon={faStar} 
          className={`icon ${isFavorite ? 'selected' : ''}`} 
          onClick={(e) => {
            e.stopPropagation();
            handleClick('favorite');
          }} 
        />
        <FontAwesomeIcon 
          icon={faClock} 
          className={`icon ${isWatchLater ? 'selected' : ''}`} 
          onClick={(e) => {
            e.stopPropagation();
            handleClick('watchlater');
          }} 
        />
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{synopsis || defaultSynopsis}</p>
        <div className="movie-genres">
          {genres.map(genre => (
            <span key={genre} className="movie-genre">{genre}</span>
          ))}
        </div>
      </div>
    </li>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string,
    imageurls: PropTypes.arrayOf(PropTypes.string),
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCard;
