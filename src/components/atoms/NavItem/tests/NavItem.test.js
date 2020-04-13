import React from 'react';
import { shallow } from 'enzyme';
import NavItem from '../NavItem';

describe('NavItem component', () => {
  const props = {
    children: 'new',
  };

  it('should render correctly and match snapshot', () => {
    const component = shallow(<NavItem {...props} />);
    expect(component).toMatchSnapshot();
  });
});
