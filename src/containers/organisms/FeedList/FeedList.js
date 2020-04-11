import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFeedListData } from './selectors';
import { fetchFeedListData } from './actions';

import FeedList from '../../../components/organisms/FeedList';

export const mapStateToProps = createStructuredSelector({
  feedListData: selectFeedListData,
});

export const mapDispatchToProps = dispatch => {
  return {
    fetchFeedListData: () => {
      dispatch(fetchFeedListData());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedList);
