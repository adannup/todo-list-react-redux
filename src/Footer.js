import React from 'react';
import FilterLinkContainer from './FilterLinkContainer';

const Footer = () => (
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
);

export default Footer;
