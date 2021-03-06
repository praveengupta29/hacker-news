import { LocalStorageUtil } from '../../../utils/localStorage';
import { HIDE_FEED_KEY } from '../../atoms/HideFeed/constants';
import { VOTE_FEED_KEY } from '../../atoms/Vote/constants';

export const removeFeed = (feedListState, objectID) => {
  const { data, ...others } = feedListState;
  const { hits } = data;

  const feedIndex = hits.findIndex(feed => {
    return feed.objectID === objectID;
  });

  hits.splice(feedIndex, 1);

  return {
    data: {
      ...data,
      hits: [...hits],
    },
    ...others,
  };
};

export const filterFeedDataWithHiddenFeeds = feedListData => {
  const storage = new LocalStorageUtil();

  const hiddenFeedIds = JSON.parse(storage.getItem(HIDE_FEED_KEY) || '[]');

  if (hiddenFeedIds.length) {
    const { hits } = feedListData;
    const filteredHits = hits.filter(hit => {
      return hiddenFeedIds.indexOf(hit.objectID) === -1;
    });

    return {
      ...feedListData,
      hits: filteredHits,
    };
  }
  return feedListData;
};

export const updateUpVoteInFeedData = feedListData => {
  const storage = new LocalStorageUtil();

  const votedFeedIds = JSON.parse(storage.getItem(VOTE_FEED_KEY) || '[]');

  if (votedFeedIds.length) {
    const { hits } = feedListData;
    const votedHits = hits.map(hit => {
      const cloneHit = { ...hit };

      if (votedFeedIds.indexOf(cloneHit.objectID) > -1) {
        cloneHit.voted = true;
      }

      return cloneHit;
    });

    return {
      ...feedListData,
      hits: votedHits,
    };
  }
  return feedListData;
};
