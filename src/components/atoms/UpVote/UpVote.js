import React from 'react';
import PropTypes from 'prop-types';

import Anchor from '../Anchor';
import './UpVote.scss';

const UpVote = ({ voteFeed, objectId }) => {
  return (
    <Anchor
      handleLinkClick={e => {
        e.preventDefault();
        voteFeed({
          objectId,
          voted: true,
        });
      }}
      className="up-vote-link"
    >
      <div className="up-vote-arrow" />
    </Anchor>
  );
};

UpVote.propTypes = {
  objectId: PropTypes.string.isRequired,
  voteFeed: PropTypes.func.isRequired,
};

export default UpVote;
