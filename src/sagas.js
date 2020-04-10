import { all } from 'redux-saga/effects';
import feedListSaga from './containers/organisms/FeedList/sagas';

export default function* rootSaga() {
  yield all([feedListSaga()]);
}
