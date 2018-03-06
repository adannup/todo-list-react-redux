import React from 'react';
import FilterLinkContainer from './FilterLinkContainer';

const Footer = () => {
  return (
    <div>
      Show:
      {' '}
      <FilterLinkContainer
        filter="SHOW_ALL"
      >
        All
      </FilterLinkContainer>
      {' '}
      <FilterLinkContainer
        filter="SHOW_ACTIVE"
      >
        Active
      </FilterLinkContainer>
      {' '}
      <FilterLinkContainer
        filter="SHOW_COMPLETED"
      >
        Completed
      </FilterLinkContainer>
    </div>
  )
};

export default Footer;
