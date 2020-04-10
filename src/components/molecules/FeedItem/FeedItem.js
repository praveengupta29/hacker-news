import React from 'react';
import PropTypes from 'prop-types';

import './FeedItem.scss';

const FeedItem = ({ author, title }) => {
  return <div>{`${author} - ${title}`}</div>;
};

FeedItem.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FeedItem;
