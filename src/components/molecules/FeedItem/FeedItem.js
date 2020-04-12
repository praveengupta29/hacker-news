import React from 'react';

import './FeedItem.scss';
import { extractDomainFromUrl } from '../../../commons/utils/url';
import timeSince from '../../../utils/timeSince';

import HideFeed from '../../../containers/atoms/HideFeed/HideFeed';
import Vote from '../../../containers/atoms/Vote/Vote';

const getWebsiteName = url => {
  const domain = extractDomainFromUrl(url);

  return domain ? (
    <div className="website-name secondary-color">({domain})</div>
  ) : (
    ''
  );
};

const FeedItem = ({ ...others }) => {
  const {
    author,
    created_at_i: timestampInSeconds,
    num_comments: numberOfComments,
    objectID,
    points,
    title,
    url,
    voted,
  } = others;
  return (
    <div className="feed-item flex align-center">
      <div className="numeric-detail flex align-center">
        <div className="comments">{numberOfComments}</div>

        <div className="points flex">
          {points}

          {!voted && <Vote objectId={objectID} />}
        </div>
      </div>

      <div className="text-details lg-flex align-center">
        <div className="main-details lg-flex align-center">
          <div className="title">{title}</div>
          {getWebsiteName(url)}
        </div>

        <div className="other-details flex align-center">
          <span className="by-keyword secondary-color">by</span>

          <span className="author-name">{author}</span>

          <span className="time-since secondary-color">
            {timeSince(timestampInSeconds)}
          </span>

          {voted && <Vote objectId={objectID} voted={voted} />}

          <span className="bracket secondary-color">[</span>

          <HideFeed objectId={objectID} />

          <span className="bracket secondary-color">]</span>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
