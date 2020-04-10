import {
  FETCH_FEED_LIST_DATA,
  FETCH_FEED_LIST_DATA_SUCCESS,
  FETCH_FEED_LIST_DATA_ERROR,
} from './constants';

export const fetchFeedListData = () => ({
  type: FETCH_FEED_LIST_DATA,
});

export const fetchFeedListDataSuccess = data => ({
  type: FETCH_FEED_LIST_DATA_SUCCESS,
  data,
});

export const fetchFeedListDataError = error => ({
  type: FETCH_FEED_LIST_DATA_ERROR,
  error,
});
