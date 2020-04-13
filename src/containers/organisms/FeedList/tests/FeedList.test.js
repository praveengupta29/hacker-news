import jest from 'jest-mock';
import { mapDispatchToProps } from '../FeedList';

describe('<FeedList Container />', () => {
  it('should call dispatch and trigger "fetchFeedListData"', () => {
    const dispatch = jest.fn();

    const props = mapDispatchToProps(dispatch);

    props.fetchFeedListData();

    expect(dispatch.mock.calls.length).toBeGreaterThan(0);
  });
});
