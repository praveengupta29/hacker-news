import React from 'react';
import { shallow } from 'enzyme';
import FeedItem from '../FeedItem';

describe('FeedItem component', () => {
  const props = {
    author: 'davidmakina',
    created_at_i: 1586685261,
    num_comments: 626,
    objectID: '787666',
    points: 656,
    title: 'The cost of virtualizing CS conferences',
    url: 'https://queue.acm.org/detail.cfm?id=1039523',
    voted: false,
  };
  const sinceAgoDate = '2020-04-13';

  it('should render correctly with `UpVote` and match snapshot', () => {
    const component = shallow(
      <FeedItem {...props} sinceAgoDate={sinceAgoDate} />,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with `UnVote` and match snapshot', () => {
    props.voted = true;

    const component = shallow(
      <FeedItem {...props} sinceAgoDate={sinceAgoDate} />,
    );
    expect(component).toMatchSnapshot();
  });
});
