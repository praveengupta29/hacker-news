import React from 'react';
import PropTypes from 'prop-types';

import './HideFeed.scss';
import Anchor from '../Anchor';

const HideFeed = ({ hideFeed, objectId }) => {
  return (
    <Anchor
      className="hide-btn"
      handleLinkClick={e => {
        e.preventDefault();
        hideFeed(objectId);
      }}
    >
      hide
    </Anchor>
  );
};

HideFeed.propTypes = {
  hideFeed: PropTypes.func.isRequired,
  objectId: PropTypes.string.isRequired,
};

export default HideFeed;
