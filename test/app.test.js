import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import App, { AppStyled } from '../src/app';

describe('AppStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<AppStyled />);
    expect(component).toMatchSnapshot();
  });
});

describe('App', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
