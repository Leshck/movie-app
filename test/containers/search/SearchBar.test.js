import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import * as router from 'react-router-dom';
import { SearchBarStyled, SearchBar } from '../../../src/containers/search/SearchBar';

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}));

describe('SearchBarStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<SearchBarStyled />);
    expect(component).toMatchSnapshot();
  });
});

describe('SearchBar', () => {
  router.useHistory.mockImplementation(() => []);
  test('should be rendered correctly', () => {
    const component = shallow(<SearchBar getMovies={() => {}} changeSearch={() => {}} searchParam="testSearch" />);
    expect(component).toMatchSnapshot();
  });
});
