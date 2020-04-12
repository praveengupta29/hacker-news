import { takeLatest } from 'redux-saga/effects';

import { HIDE_FEED, HIDE_FEED_KEY } from './constants';
import { LocalStorageUtil } from '../../../utils/localStorage';

export function* saveHideFeedSaga(action) {
  const { data: objectId } = action;

  const storage = new LocalStorageUtil();

  storage.saveItemInArray(HIDE_FEED_KEY, objectId);

  // Here, a API request can be made to hide feed
}

export default function* hideFeedSaga() {
  yield takeLatest(HIDE_FEED, saveHideFeedSaga);
}
