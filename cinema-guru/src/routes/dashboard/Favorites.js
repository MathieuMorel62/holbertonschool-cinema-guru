import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Modal from '../../components/movies/Modal';
import axios from 'axios';


// Component to display the favorite movies
const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch the favorite movies from the API
  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem('accessToken');
      try {
        const response = await axios.get('http://localhost:8000/api/titles/favorite/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching favorite movies:', error);
      }
    };

    fetchFavorites();
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
    <div className="favorites-page">
      <h1>Movies you like</h1>
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

export default Favorites;
