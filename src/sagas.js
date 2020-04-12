import { all } from 'redux-saga/effects';
import feedListSaga from './containers/organisms/FeedList/sagas';
import hideFeedSaga from './containers/atoms/HideFeed/sagas';

export default function* rootSaga() {
  yield all([feedListSaga(), hideFeedSaga()]);
}
