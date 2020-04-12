import React from 'react';

import Header from '../Header/Header';
import FeedList from '../../../containers/organisms/FeedList/FeedList';
import LoadMore from '../../../containers/atoms/LoadMore/LoadMore';

import './FeedsWrapper.scss';

const FeedsWrapper = () => {
  return (
    <div className="feeds-wrapper full-width">
      <Header />
      <div className="feed-list-load-more-container">
        <FeedList />
        <LoadMore />
      </div>
    </div>
  );
};

export default FeedsWrapper;
