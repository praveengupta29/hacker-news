import {
  FETCH_FEED_LIST_DATA,
  FETCH_FEED_LIST_DATA_SUCCESS,
  FETCH_FEED_LIST_DATA_ERROR,
} from './constants';

import feedListInitialState from '../../../commons/initialState/feedList.state';

const initialState = feedListInitialState;

const feedListReducer = (state = initialState, { type, data, error }) => {
  switch (type) {
    case FETCH_FEED_LIST_DATA:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_FEED_LIST_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data,
      };

    case FETCH_FEED_LIST_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
      };

    default:
      return state;
  }
};

export default feedListReducer;
