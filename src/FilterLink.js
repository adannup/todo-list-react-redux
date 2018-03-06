import React from 'react';

const FilterLink = ({ children, onClick, active }) => {
  if( active ) {
    return <span>{ children }</span>
  }
   return <a href="#" onClick={e => {
     e.preventDefault();
     onClick();
   }}>{children}</a>;
}

export default FilterLink;
