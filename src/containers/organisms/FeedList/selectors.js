import { createSelector } from 'reselect';

const getFeedListDataState = state => {
  return state.feedList;
};

export const selectFeedListData = createSelector(
  getFeedListDataState,
  feedListDataState => feedListDataState.data,
);

export const selectTotalPageData = createSelector(
  getFeedListDataState,
  feedListDataState => feedListDataState.data.nbPages,
);

export const selectCurrentPageData = createSelector(
  getFeedListDataState,
  feedListDataState => feedListDataState.data.page,
);
