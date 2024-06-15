import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import Modal from '../../components/movies/Modal';


// Component to display the home page
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch the movies from the API
  const loadMovies = async (page) => {
    const token = localStorage.getItem('accessToken');
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8000/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres: genres.join(','),
          title,
          sort,
          page
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Filter out movies that are already in the list
      const newMovies = response.data.titles;
      setMovies(prevMovies => {
        const existingIds = new Set(prevMovies.map(movie => movie.imdbId));
        const filteredMovies = newMovies.filter(movie => !existingIds.has(movie.imdbId));
        return [...prevMovies, ...filteredMovies];
      });
    } catch (error) {
      console.error('Error loading movies:', error);
      setError('Failed to load movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Load the movies when the component mounts
  useEffect(() => {
    setMovies([]);
    loadMovies(1);
    setPage(1);
  }, [minYear, maxYear, genres, sort, title]);

  // Load more movies when the user scrolls to the bottom
  const handleLoadMore = () => {
    const nextPage = page + 1;
    loadMovies(nextPage);
    setPage(nextPage);
  };

  // Handle clicking on a movie card to display the modal
  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="home-page">
      <Filter 
        minYear={minYear.toString()} 
        setMinYear={(year) => setMinYear(Number(year))} 
        maxYear={maxYear.toString()} 
        setMaxYear={(year) => setMaxYear(Number(year))} 
        sort={sort} 
        setSort={setSort} 
        genres={genres} 
        setGenres={setGenres} 
        title={title} 
        setTitle={setTitle} 
      />
      {error && <p className="error-message">{error}</p>}
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.imdbId}-${index}`} movie={movie} onClick={setSelectedMovie} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!loading && <div className="button-container">
        <Button className='btn-hp' label="Load More.." onClick={handleLoadMore} />
      </div>}
      {selectedMovie && (
        <Modal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default HomePage;
