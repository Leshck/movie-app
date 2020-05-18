import 'jest-styled-components';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer, { FooterStyled } from '../../../src/components/footer/Footer';
import Logo from '../../../src/components/logo/Logo';

describe('FooterStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<FooterStyled />);
    expect(component).toMatchSnapshot();
  });
});
describe('Footer', () => {
  test('should be with Logo component', () => {
    const component = mount(<Footer />);
    expect(component.find(Logo).length).toBe(1);
  });
});
