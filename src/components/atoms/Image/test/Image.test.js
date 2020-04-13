import React from 'react';
import { shallow } from 'enzyme';
import Image from '../Image';

describe('Image Component', () => {
  const props = {
    alt: 'test',
    src: '/',
    className: 'test',
  };

  test('should render correctly', () => {
    const icon = shallow(<Image {...props} />);
    expect(icon).toMatchSnapshot();
  });
});
