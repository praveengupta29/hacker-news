import { call, put, takeLatest } from 'redux-saga/effects';
import history from '../../../utils/history';

import { fetchFeedListDataSuccess, fetchFeedListDataError } from './actions';

import { FETCH_FEED_LIST_DATA } from './constants';

import { FRONT_PAGE_TAG } from '../../../commons/constants';
import apis from '../../../commons/constants/api.services';

import ServiceUtil from '../../../commons/utils/ServiceUtil';
import { buildUrl } from '../../../commons/utils/url';

const updateQueryParams = params => {
  if (history && Object.keys(params).indexOf('page') > -1) {
    const queryParamsUrl = buildUrl({
      pathName: '/',
      query: {
        ...params,
      },
    });

    history.push(queryParamsUrl);
  }
};

export function* loadFeedListSaga(action) {
  try {
    const { params = {} } = action;

    const url = buildUrl({
      pathName: apis.search,
      query: {
        tags: FRONT_PAGE_TAG,
        ...params,
      },
    });

    const listingData = yield call(ServiceUtil.fetch, url);

    yield put(fetchFeedListDataSuccess(listingData));

    updateQueryParams(params);
  } catch (err) {
    yield put(fetchFeedListDataError(err));
  }
}

export default function* flightListingSaga() {
  yield takeLatest(FETCH_FEED_LIST_DATA, loadFeedListSaga);
}
