import React from 'react';
import PropTypes from 'prop-types';
import FeedItem from '../../molecules/FeedItem';

import { filterFeedDataWithHiddenFeeds } from '../../../containers/organisms/FeedList/utils';
import './FeedList.scss';

const FeedList = ({ feedListData }) => {
  const filteredData = filterFeedDataWithHiddenFeeds(feedListData);

  const { hits: feedList } = filteredData;

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
