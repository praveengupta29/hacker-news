import React from 'react';
import PropTypes from 'prop-types';

import './NavItem.scss';

const NavItem = ({ children }) => {
  return <div>{children}</div>;
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavItem;
