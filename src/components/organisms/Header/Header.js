import React from 'react';

import Anchor from '../../atoms/Anchor';
import Image from '../../atoms/Image';
import Navigation from '../../molecules/Navigation';

import './Header.scss';

const Header = () => {
  return (
    <div className="header flex">
      <Anchor to="/">
        <Image
          src="/images/logo.png"
          className="logo"
          alt="logo"
          height="18"
          width="18"
        />
      </Anchor>

      <Navigation />
    </div>
  );
};

export default Header;
