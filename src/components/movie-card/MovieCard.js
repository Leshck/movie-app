import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../constants/colors';

const MovieCardStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const MoviePoster = styled.img`
  width: 100%;
  height: 550px;
  margin-bottom: 10px;
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const MovieName = styled.h3`
  color: ${colors.WHITE};
  margin: 10px 0;
`;

const MovieYearBox = styled.div`
  border: 1px solid ${colors.WHITE};
  padding: 3px 10px;
  border-radius: 4px;
`;

const MovieYear = styled.h3`
  color: ${colors.WHITE};
  margin: 0;
`;

const GenreBlock = styled.div`
  color: ${colors.WHITE};
`;

const Genre = styled.h5`
  color: ${colors.WHITE};
  margin: 0;
`;

const MovieCard = ({ url, title, year, genre }) => (
  <MovieCardStyled>
    <MoviePoster src={url}></MoviePoster>
    <MovieInfo>
      <MovieName>{title}</MovieName>
      <MovieYearBox>
        <MovieYear>{year}</MovieYear>
      </MovieYearBox>
    </MovieInfo>
    <GenreBlock>
      <Genre>{genre}</Genre>
    </GenreBlock>
  </MovieCardStyled>
);

MovieCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string,
};

export default MovieCard;
