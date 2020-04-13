import React from 'react';
import { shallow } from 'enzyme';
import Vote from '../Vote';

describe('UnVote component', () => {
  const props = {
    voteFeed: () => {},
    objectId: '6382672',
    voted: true,
  };

  it('should render correctly with `UpVote` and match snapshot', () => {
    const component = shallow(<Vote {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with `UnVote` and match snapshot', () => {
    props.voted = false;

    const component = shallow(<Vote {...props} />);
    expect(component).toMatchSnapshot();
  });
});
