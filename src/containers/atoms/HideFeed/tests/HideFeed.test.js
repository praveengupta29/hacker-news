import jest from 'jest-mock';
import { mapDispatchToProps } from '../HideFeed';

describe('<HideFeed Container />', () => {
  it('should call dispatch and trigger "hideFeed"', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.hideFeed();
    expect(dispatch.mock.calls.length).toBeGreaterThan(0);
  });
});
