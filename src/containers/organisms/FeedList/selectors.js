import { createSelector } from 'reselect';

const getFeedListDataState = state => {
  return state.feedList;
};

export const selectFeedListData = createSelector(
  getFeedListDataState,
  feedListDataState => feedListDataState.data,
);
