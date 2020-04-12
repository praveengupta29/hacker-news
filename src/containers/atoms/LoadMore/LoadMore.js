import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectTotalPageData,
  selectCurrentPageData,
} from '../../organisms/FeedList/selectors';
import { fetchFeedListData } from '../../organisms/FeedList/actions';

import LoadMore from '../../../components/atoms/LoadMore';

export const mapStateToProps = createStructuredSelector({
  currentPage: selectCurrentPageData,
  totalPages: selectTotalPageData,
});

export const mapDispatchToProps = dispatch => {
  return {
    fetchFeedListData: params => {
      dispatch(fetchFeedListData(params));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadMore);
