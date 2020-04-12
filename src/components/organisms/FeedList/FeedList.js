import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FeedItem from '../../molecules/FeedItem';

import './FeedList.scss';

const FeedList = ({ feedListData, fetchFeedListData }) => {
  useEffect(() => {
    fetchFeedListData();
  }, []);
  const { hits: feedList } = feedListData;

  return (
    <div className="feed-list-container">
      {feedList.map(feed => {
        const { created_at_i: timestamp } = feed;

        return <FeedItem {...feed} key={timestamp} />;
      })}
    </div>
  );
};

FeedList.propTypes = {
  feedListData: PropTypes.object.isRequired,
};

export default FeedList;
