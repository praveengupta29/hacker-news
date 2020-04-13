import React from 'react';
import { shallow } from 'enzyme';
import FeedList from '../FeedList';
import feedListData from '../../../../containers/organisms/FeedList/tests/feeds.mock.json';

describe('FeedList component', () => {
  it('should render correctly and match snapshot', () => {
    const component = shallow(<FeedList feedListData={feedListData} />);

    expect(component).toMatchSnapshot();
  });
});
