import React from 'react';
import { shallow } from 'enzyme';
import UnVote from '../UnVote';

describe('UnVote component', () => {
  const props = {
    voteFeed: () => {},
    objectId: '6382672',
  };

  it('should render correctly and match snapshot', () => {
    const component = shallow(<UnVote {...props} />);
    expect(component).toMatchSnapshot();
  });
});
