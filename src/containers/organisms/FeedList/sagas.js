import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchFeedListDataSuccess, fetchFeedListDataError } from './actions';

import { FETCH_FEED_LIST_DATA } from './constants';

import { FRONT_PAGE_TAG } from '../../../commons/constants';
import apis from '../../../commons/constants/api.services';

import ServiceUtil from '../../../commons/utils/ServiceUtil';
import { buildUrl } from '../../../commons/utils/utils';

export function* loadFeedListSaga() {
  try {
    const url = buildUrl({
      pathName: apis.search,
      query: {
        tags: FRONT_PAGE_TAG,
      },
    });
    const listingData = yield call(ServiceUtil.fetch, url);

    yield put(fetchFeedListDataSuccess(listingData));
  } catch (err) {
    yield put(fetchFeedListDataError(err));
  }
}

export default function* flightListingSaga() {
  yield takeLatest(FETCH_FEED_LIST_DATA, loadFeedListSaga);
}
