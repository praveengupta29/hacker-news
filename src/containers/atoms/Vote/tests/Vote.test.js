import jest from 'jest-mock';
import { mapDispatchToProps } from '../Vote';

describe('<Vote Container />', () => {
  it('should call dispatch and trigger "voteFeed"', () => {
    const dispatch = jest.fn();

    const props = mapDispatchToProps(dispatch);

    props.voteFeed();

    expect(dispatch.mock.calls.length).toBeGreaterThan(0);
  });
});
