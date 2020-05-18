import 'jest-styled-components';
import React from 'react';
import { mount } from 'enzyme';
import MovieCard from '../../../src/components/movie-card/MovieCard';

describe('MovieCard ', () => {
  test('should be rendered correctly', () => {
    const component = mount(<MovieCard />);
    expect(component).toMatchSnapshot();
  });
});
