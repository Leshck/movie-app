import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import { SearchBarStyled, SearchBar } from '../../../src/containers/search/SearchBar';

describe('SearchBarStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<SearchBarStyled />);
    expect(component).toMatchSnapshot();
  });
});

describe('SearchBar', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<SearchBar />);
    expect(component).toMatchSnapshot();
  });
});
