import React from 'react';
import PropTypes from 'prop-types';

const FilterLink = ({ children, onClick, active }) => {
  if (active) {
    return <span>{ children }</span>;
  }
  return (
    <button
      href="#"
      onClick={e => {
       e.preventDefault();
       onClick();
     }}
    >
      {children}
    </button>
  );
};

FilterLink.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default FilterLink;
