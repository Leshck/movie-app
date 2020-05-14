import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import HeaderContentMovie, {
  HeaderContentMovieStyled,
  Poster,
  MovieDescription,
  Row,
  RatingBox,
  Rating,
  Text,
  MovieInfo,
  MovieInfoProperty,
  MovieInfoValue,
  SearchIcon,
} from '../../../src/containers/header-content-movie/HeaderContentMovie';

describe('HeaderContentMovieStyled', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<HeaderContentMovieStyled height={500} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Poster', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<Poster />);
    expect(component).toMatchSnapshot();
  });
});

describe('MovieDescription', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<MovieDescription />);
    expect(component).toMatchSnapshot();
  });
});

describe('Row', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<Row />);
    expect(component).toMatchSnapshot();
  });
});

describe('RatingBox', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<RatingBox />);
    expect(component).toMatchSnapshot();
  });
});

describe('Rating', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<Rating />);
    expect(component).toMatchSnapshot();
  });
});

describe('Text', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<Text />);
    expect(component).toMatchSnapshot();
  });
});

describe('MovieInfo', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<MovieInfo />);
    expect(component).toMatchSnapshot();
  });
});

describe('MovieInfoProperty', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<MovieInfoProperty />);
    expect(component).toMatchSnapshot();
  });
});

describe('MovieInfoValue', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<MovieInfoValue />);
    expect(component).toMatchSnapshot();
  });
});

describe('SearchIcon', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<SearchIcon />);
    expect(component).toMatchSnapshot();
  });
});

describe('HeaderContentMovie', () => {
  test('should be rendered correctly', () => {
    const component = shallow(<HeaderContentMovie height={500} />);
    expect(component).toMatchSnapshot();
  });
});
