import React from 'react';
import styled from 'styled-components';
import { MovieCard } from '../../components';

const MovieListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 90px;
  padding: 70px 100px;
`;

const MovieList = ({ movies }) => (
  <MovieListStyled>
    {movies.map(({ url, title, year, genre }) => (
      <MovieCard url={url} title={title} year={year} genre={genre} key={title} />
    ))}
  </MovieListStyled>
);

export default MovieList;
