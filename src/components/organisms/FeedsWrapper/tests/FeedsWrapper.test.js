import React from 'react';
import { shallow } from 'enzyme';
import FeedsWrapper from '../FeedsWrapper';

describe('FeedsWrapper component', () => {
  it('should render correctly and match snapshot', () => {
    const component = shallow(<FeedsWrapper />);
    expect(component).toMatchSnapshot();
  });
});
