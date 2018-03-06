import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({ onClickFilter, currentFilter }) => {
  return (
    <div>
      Show:
      {' '}
      <FilterLink
        onClick={onClickFilter}
        filter="SHOW_ALL"
        currentFilter={currentFilter}
      >
        All
      </FilterLink>
      {' '}
      <FilterLink
        onClick={onClickFilter}
        filter="SHOW_ACTIVE"
        currentFilter={currentFilter}
      >
        Active
      </FilterLink>
      {' '}
      <FilterLink
        onClick={onClickFilter}
        filter="SHOW_COMPLETED"
        currentFilter={currentFilter}
      >
        Completed
      </FilterLink>
    </div>
  )
};

export default Footer;
