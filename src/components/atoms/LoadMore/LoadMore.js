import React from 'react';
import PropTypes from 'prop-types';

import Anchor from '../Anchor';
import './LoadMore.scss';

const isVisible = (currentPage, totalPages) => {
  return !!(totalPages && currentPage !== totalPages);
};

const LoadMore = ({ currentPage, fetchFeedListData, totalPages }) => {
  const cp = currentPage + 1;
  return (
    isVisible(cp, totalPages) && (
      <div className="load-more sm-text-center md-text-initial">
        <Anchor
          handleLinkClick={e => {
            e.preventDefault();
            fetchFeedListData({ page: cp });
          }}
          className="load-more-link"
        >
          More
        </Anchor>
      </div>
    )
  );
};

LoadMore.propTypes = {
  currentPage: PropTypes.number.isRequired,
  fetchFeedListData: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default LoadMore;
