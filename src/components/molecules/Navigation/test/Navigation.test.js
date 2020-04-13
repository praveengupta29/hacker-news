import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../Navigation';

describe('Navigation component', () => {
  it('should render correctly and match snapshot', () => {
    const component = shallow(<Navigation />);
    expect(component).toMatchSnapshot();
  });
});
