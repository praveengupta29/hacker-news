import React from 'react';
import PropTypes from 'prop-types';

import UnVote from '../UnVote';
import UpVote from '../UpVote';

const Vote = ({ voteFeed, objectId, voted }) => {
  return voted ? (
    <UnVote voteFeed={voteFeed} objectId={objectId} />
  ) : (
    <UpVote voteFeed={voteFeed} objectId={objectId} />
  );
};

Vote.propTypes = {
  objectId: PropTypes.string.isRequired,
  voteFeed: PropTypes.func.isRequired,
  voted: PropTypes.bool,
};

Vote.defaultProps = {
  voted: false,
};

export default Vote;
