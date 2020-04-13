import { connect } from 'react-redux';

import { hideFeed } from './actions';

import HideFeed from '../../../components/atoms/HideFeed';

export const mapDispatchToProps = dispatch => {
  return {
    hideFeed: feedId => {
      dispatch(hideFeed(feedId));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(HideFeed);
