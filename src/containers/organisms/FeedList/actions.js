import {
  FETCH_FEED_LIST_DATA,
  FETCH_FEED_LIST_DATA_SUCCESS,
  FETCH_FEED_LIST_DATA_ERROR,
  UP_VOTE_FEED,
} from './constants';

export const fetchFeedListData = params => ({
  type: FETCH_FEED_LIST_DATA,
  params,
});

export const fetchFeedListDataSuccess = data => ({
  type: FETCH_FEED_LIST_DATA_SUCCESS,
  data,
});

export const fetchFeedListDataError = error => ({
  type: FETCH_FEED_LIST_DATA_ERROR,
  error,
});

export const upVoteFeed = data => ({
  type: UP_VOTE_FEED,
  data,
});
