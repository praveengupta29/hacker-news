import {
  selectFeedListData,
  selectTotalPageData,
  selectCurrentPageData,
} from '../selectors';

const initialState = {
  isFetching: false,
  data: {
    hits: [],
    nbPages: 0,
    page: 0,
  },
  error: null,
};

const mockedState = {
  feedList: initialState,
};

describe('Feed List selectors', () => {
  it('should select `all feeds` data', () => {
    expect(selectFeedListData(mockedState)).toStrictEqual(initialState.data);
  });

  it('should select `total number of pages` data', () => {
    const { nbPages } = initialState.data;
    expect(selectTotalPageData(mockedState)).toStrictEqual(nbPages);
  });

  it('should select `current page` data', () => {
    const { page } = initialState.data;
    expect(selectCurrentPageData(mockedState)).toStrictEqual(page);
  });
});
