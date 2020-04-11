import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

import FeedListReducer from './containers/organisms/FeedList/reducer';

export default () =>
  combineReducers({
    // router: connectRouter(history),
    feedList: FeedListReducer,
  });
