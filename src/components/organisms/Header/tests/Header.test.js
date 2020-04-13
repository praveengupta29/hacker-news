import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header component', () => {
  it('should render correctly and match snapshot', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
