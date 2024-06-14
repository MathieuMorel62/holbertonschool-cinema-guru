// good

import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Modal from '../../components/movies/Modal';
import axios from 'axios';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchWatchLater = async () => {
      const token = localStorage.getItem('accessToken');
      try {
        const response = await axios.get('http://localhost:8000/api/titles/watchlater/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching watch later movies:', error);
      }
    };

    fetchWatchLater();
  }, []);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="watchlater-page">
      <h1>Movies to watch later</h1>
      <hr />
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.imdbId}-${index}`} movie={movie} onClick={() => handleCardClick(movie)} />
        ))}
      </div>
      {selectedMovie && <Modal movie={selectedMovie} onClose={handleCloseModal} />}
    </div>
  );
};

export default WatchLater;
