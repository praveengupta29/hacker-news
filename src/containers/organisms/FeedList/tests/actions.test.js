import {
  FETCH_FEED_LIST_DATA,
  FETCH_FEED_LIST_DATA_SUCCESS,
  FETCH_FEED_LIST_DATA_ERROR,
} from '../constants';

import {
  fetchFeedListData,
  fetchFeedListDataSuccess,
  fetchFeedListDataError,
} from '../actions';

import mockFeedResponse from './feeds.mock.json';

describe('FeedList Actions', () => {
  it('should return `fetch feed list` type action', () => {
    const params = {
      page: 1,
    };
    const expectedResult = {
      type: FETCH_FEED_LIST_DATA,
      params,
    };

    expect(fetchFeedListData(params)).toStrictEqual(expectedResult);
  });

  it('should return `fetch feed list success` type action', () => {
    const data = mockFeedResponse;

    const expectedResult = {
      type: FETCH_FEED_LIST_DATA_SUCCESS,
      data,
    };

    expect(fetchFeedListDataSuccess(data)).toStrictEqual(expectedResult);
  });

  it('should return `fetch feed list error` type action', () => {
    const error = 'Internal Server Error';

    const expectedResult = {
      type: FETCH_FEED_LIST_DATA_ERROR,
      error,
    };

    expect(fetchFeedListDataError(error)).toStrictEqual(expectedResult);
  });
});
