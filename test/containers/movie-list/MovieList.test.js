import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import { MovieListStyled } from '../../../src/containers/movie-list/MovieList';

describe('MovieListStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<MovieListStyled />);
    expect(component).toMatchSnapshot();
  });
});
