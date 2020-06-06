import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
    {movies.map(({ poster_path, title, release_date, genres, id }) => (
      <MovieCard
        img={poster_path}
        title={title}
        year={release_date.slice(0, 4)}
        genre={genres.join(',')}
        key={title}
        url={`/movie/${id}`}
      />
    ))}
  </MovieListStyled>
);

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
export { MovieListStyled };
