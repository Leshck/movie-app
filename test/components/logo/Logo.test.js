import 'jest-styled-components';
import React from 'react';
import { mount } from 'enzyme';
import Logo from '../../../src/components/logo/Logo';

describe('Logo ', () => {
  test('should be rendered correctly', () => {
    const component = mount(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
