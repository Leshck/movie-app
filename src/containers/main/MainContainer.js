import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import ControllerBar from '../controller/ControllerBar';
import MovieList from '../movie-list/MovieList';
import { EmptyState } from '../../components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 400px;
  background-color: ${colors.GREY_MAIN};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const movies = [
  {
    url: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
    title: 'Guardians of the Galaxy Vol. 3',
    year: '2020',
    genre: 'Science Fiction',
  },
  {
    url: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
    title: 'Transformers 7',
    year: '2019',
    genre: 'Science Fiction',
  },
  {
    url: 'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg',
    title: 'Untitled Avengers',
    year: '2019',
    genre: 'Action',
  },
  {
    url: 'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg',
    title: 'Shazam!',
    year: '2018',
    genre: 'Fantasy',
  },
  {
    url: 'https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg',
    title: 'X-Men: Dark Phoenix',
    year: '2013',
    genre: 'Science Fiction',
  },
  {
    url: 'https://image.tmdb.org/t/p/w500/98tbNloMBztAVnWpAznKKVUdi2O.jpg',
    title: 'Journey 3: From the Earth to the Moon',
    year: '2018',
    genre: 'Fantasy',
  },
];
export default class MainContainer extends React.Component {
  render() {
    return (
      <Main>
        <ControllerBar />
        <Content>{movies && !!movies.length ? <MovieList movies={movies} /> : <EmptyState />}</Content>
      </Main>
    );
  }
}
