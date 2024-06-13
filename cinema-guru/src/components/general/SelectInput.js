import React from 'react';
import PropTypes from 'prop-types';
import './general.css';

const SelectInput = ({
  label,
  options = [],
  className = '',
  value = '',
  setValue = () => {}
}) => {
  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`select-input-container ${className}`}>
      <label>{label}</label>
      <select value={value} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
};

export default SelectInput;
