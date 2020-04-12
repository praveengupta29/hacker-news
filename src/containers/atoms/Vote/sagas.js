/* eslint-disable require-yield */
import { takeLatest } from 'redux-saga/effects';

import { VOTE_FEED, VOTE_FEED_KEY } from './constants';
import { LocalStorageUtil } from '../../../utils/localStorage';

export function* saveUpVoteFeedSaga(action) {
  const {
    data: { objectId, voted },
  } = action;
  const storage = new LocalStorageUtil();

  if (voted) {
    storage.saveItemInArray(VOTE_FEED_KEY, objectId);
  } else {
    storage.removeItemFromArray(VOTE_FEED_KEY, objectId);
  }

  // Here, an API request can be made to `up vote` feed
}

export default function* upVoteFeedSaga() {
  yield takeLatest(VOTE_FEED, saveUpVoteFeedSaga);
}
