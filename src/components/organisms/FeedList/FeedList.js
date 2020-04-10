import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FeedItem from '../../molecules/FeedItem';

const FeedList = ({ feedListData, fetchFeedListData }) => {
  const { hits: feedList } = feedListData;

  useEffect(() => {
    fetchFeedListData();
  }, []);

  return feedList.map(feed => {
    return <FeedItem {...feed} />;
  });
};

FeedList.propTypes = {
  feedListData: PropTypes.object.isRequired,
  fetchFeedListData: PropTypes.func.isRequired,
};

export default FeedList;
