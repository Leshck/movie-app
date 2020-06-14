import 'jest-styled-components';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import MovieCard from '../../../src/components/movie-card/MovieCard';

describe('MovieCard ', () => {
  test('should be rendered correctly', () => {
    const component = mount(
      <BrowserRouter>
        <MovieCard />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
