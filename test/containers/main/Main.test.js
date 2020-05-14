import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import Main, { MainStyled, Content } from '../../../src/containers/main/Main';

const movies = [
  {
    url: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
    title: 'Guardians of the Galaxy Vol. 3',
    year: '2020',
    genre: 'Science Fiction',
  },
];

describe('MainStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<MainStyled height={500} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Content', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<Content />);
    expect(component).toMatchSnapshot();
  });
});

describe('Main', () => {
  test('should be rendered without movies', () => {
    const component = shallow(<Main />);
    expect(component).toMatchSnapshot();
  });

  test('should be rendered with movies', () => {
    const component = shallow(<Main movies={movies} />);
    expect(component).toMatchSnapshot();
  });
});
