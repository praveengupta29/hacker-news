import { connect } from 'react-redux';

import { voteFeed } from './actions';

import Vote from '../../../components/atoms/Vote/Vote';

export const mapDispatchToProps = dispatch => {
  return {
    voteFeed: data => {
      dispatch(voteFeed(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Vote);
