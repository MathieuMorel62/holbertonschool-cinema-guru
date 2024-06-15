import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Modal from '../../components/movies/Modal';


// Component to display the watch later movies
const WatchLater = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch the watch later movies from the API
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

  // Handle clicking on a movie card to display the modal
  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  // Handle the close of the modal
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
