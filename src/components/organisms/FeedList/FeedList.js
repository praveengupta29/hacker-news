import React from 'react';
import PropTypes from 'prop-types';
import FeedItem from '../../molecules/FeedItem';

const FeedList = ({ feedListData }) => {
  const { hits: feedList } = feedListData;

  return feedList.map(feed => {
    return <FeedItem {...feed} />;
  });
};

FeedList.propTypes = {
  feedListData: PropTypes.object.isRequired,
};

export default FeedList;
