import React from 'react';

const FilterLink = ({ children, filter, onClick, currentFilter }) => {
  if( currentFilter === filter) {
    return <span>{ children }</span>
  }
   return <a href="#" onClick={() => onClick(filter)}>{children}</a>;
}

export default FilterLink;
