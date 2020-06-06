import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import {
  HeaderContentSearchStyled,
  HeaderContentSearch,
} from '../../../src/containers/header-content-search/HeaderContentSearch';

describe('HeaderContentSearchStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<HeaderContentSearchStyled height={500} />);
    expect(component).toMatchSnapshot();
  });
});

describe('HeaderContentSearch', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<HeaderContentSearch height={500} />);
    expect(component).toMatchSnapshot();
  });
});
