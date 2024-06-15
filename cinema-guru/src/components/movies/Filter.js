import React from 'react';
import PropTypes from 'prop-types';
import './movies.css';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';


// Filter component to filter movies by year, genre, and title
const Filter = ({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle
}) => {
  // List of available film genres
  const genreList = [
    "action",
    "drama",
    "comedy",
    "biography",
    "romance",
    "thriller",
    "war",
    "history",
    "sport",
    "sci-fi",
    "documentary",
    "crime",
    "fantasy"
  ];
  // List of sort options
  const sortOptions = [
    { label: 'Latest', value: 'latest' },
    { label: 'Oldest', value: 'oldest' },
    { label: 'Highest Rated', value: 'highestrated' },
    { label: 'Lowest Rated', value: 'lowestrated' }
  ];

  return (
    <div className="filter-container">
      <div className="filter-left">
        <div className="search-bar-container">
          <SearchBar title={title} setTitle={setTitle} />
        </div>
        <div className='filter-sort'>
          <Input type="number" value={minYear} setValue={setMinYear} label="Min Date:" />
          <Input type="number" value={maxYear} setValue={setMaxYear} label="Max Date:" />
          <SelectInput value={sort} setValue={setSort} options={sortOptions} label="Sort:" />
        </div>
      </div>
      <div className="filter-right">
        <div className="tags">
          {genreList.map(genre => (
            <Tag key={genre} genre={genre} filter={true} genres={genres} setGenres={setGenres} />
          ))}
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  minYear: PropTypes.string.isRequired,
  setMinYear: PropTypes.func.isRequired,
  maxYear: PropTypes.string.isRequired,
  setMaxYear: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGenres: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default Filter;
