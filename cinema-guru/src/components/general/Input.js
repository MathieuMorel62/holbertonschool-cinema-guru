import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

const Input = ({
  label,
  type,
  className = '',
  value = '',
  setValue = () => {},
  icon = null,
  inputAttributes = {}
}) => {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleInput}
        {...inputAttributes}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
  icon: PropTypes.object,
  inputAttributes: PropTypes.object,
};

export default Input;
