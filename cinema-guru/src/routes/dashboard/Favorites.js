import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';

const Favorites = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="favorites-page">
      <h1>Movies you like</h1>
      <hr></hr>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.imdbId}-${index}`} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
