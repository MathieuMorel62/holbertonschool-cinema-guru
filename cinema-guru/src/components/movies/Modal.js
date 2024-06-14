import React from 'react';
import './modal.css';
import PropTypes from 'prop-types';
import useImage from '../../hooks/useImage';
import popcornImage from '../../assets/popcorn.png';


const Modal = ({ movie, onClose }) => {
  const posterUrl = useImage(movie.imageurls && movie.imageurls.length > 0 ? movie.imageurls[0] : popcornImage, popcornImage);
  const defaultSynopsis = "Synopsis not available";

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-image">
          <img src={posterUrl} alt={movie.title} />
        </div>
        <div className="modal-details">
          <h2>{movie.title}</h2>
          <p>{movie.synopsis || defaultSynopsis}</p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string,
    imageurls: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
