import React from 'react';
import PropTypes from 'prop-types';

import Anchor from '../Anchor';
import './UnVote.scss';

const UnVote = ({ voteFeed, objectId }) => {
  return (
    <Anchor
      handleLinkClick={e => {
        e.preventDefault();
        voteFeed({
          objectId,
          voted: false,
        });
      }}
      className="un-vote-link secondary-color"
    >
      unvote
    </Anchor>
  );
};

UnVote.propTypes = {
  objectId: PropTypes.string.isRequired,
  voteFeed: PropTypes.func.isRequired,
};

export default UnVote;
