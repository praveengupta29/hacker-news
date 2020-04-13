import React from 'react';
import { shallow } from 'enzyme';
import HideFeed from '../HideFeed';

describe('HideFeed component', () => {
  const props = {
    hideFeed: () => {},
    objectId: '635483',
  };

  it('should render correctly and match snapshot', () => {
    const component = shallow(<HideFeed {...props} />);
    expect(component).toMatchSnapshot();
  });
});
