import React from 'react';

import './Navigation.scss';
import NavItem from '../../atoms/NavItem';

const Navigation = () => {
  return (
    <div className="navigation-bar flex align-center">
      <NavItem>new</NavItem>
    </div>
  );
};

export default Navigation;
