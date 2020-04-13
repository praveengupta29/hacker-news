import feedListReducer from '../reducer';

import {
  fetchFeedListData,
  fetchFeedListDataSuccess,
  fetchFeedListDataError,
} from '../actions';

import mockFeedResponse from './feeds.mock.json';

describe('Feed List Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      isFetching: false,
      data: {
        hits: [],
        nbPages: 0,
        page: 0,
      },
      error: null,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(feedListReducer(state, {})).toStrictEqual(expectedResult);
  });

  it('should handle `fetch feed list data` action correctly', () => {
    const params = { page: 1 };

    expect(feedListReducer(state, fetchFeedListData(params))).toStrictEqual({
      ...state,
      isFetching: true,
    });
  });

  it('should handle `fetch feed list data success` action correctly', () => {
    const data = mockFeedResponse;

    expect(
      feedListReducer(state, fetchFeedListDataSuccess(data)),
    ).toStrictEqual({
      ...state,
      data,
    });
  });

  it('should handle `fetch feed list data error` action correctly', () => {
    const error = 'Internal Server Error';

    expect(feedListReducer(state, fetchFeedListDataError(error))).toStrictEqual(
      {
        ...state,
        error,
      },
    );
  });
});
