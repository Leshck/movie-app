import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import searchIcon from '../../static/search-icon.jpg';
import { Title } from '../../components';
import { colors } from '../../constants/colors';

const HeaderContentMovieStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
  z-index: 9999;
  padding: 100px 100px;
  box-sizing: border-box;
`;

const Poster = styled.img`
  height: 100%;
  width: 250px;
  margin-right: 70px;
`;

const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RatingBox = styled.div`
  border: 1px solid ${colors.WHITE};
  padding: 10px 10px;
  border-radius: 50%;
  margin-left: 30px;
`;

const Rating = styled.h3`
  color: ${colors.GREEN};
  margin: 0;
`;

const Text = styled.p`
  color: ${colors.WHITE};
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: ${colors.WHITE};
  margin-right: 30px;
`;

const MovieInfoProperty = styled.p`
  font-size: small;
  color: ${colors.GREY_0};
  margin: 0;
`;
const MovieInfoValue = styled.h3`
  color: ${colors.PINK};
  margin: 0 8px 0 0;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
`;

const movie = {
  title: 'Kill Bill Vol.2',
  imageURL: 'https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  oscarWinning: true,
  year: '1994',
  length: 154,
  rating: 4.3,
};

const HeaderContentMovie = ({ height }) => (
  <HeaderContentMovieStyled height={height}>
    <SearchIcon src={searchIcon}></SearchIcon>
    <Poster src={movie.imageURL}></Poster>
    <MovieDescription>
      <Row>
        <Title>{movie.title}</Title>
        <RatingBox>
          <Rating>{movie.rating}</Rating>
        </RatingBox>
      </Row>
      <Row>
        <Text>Oscar winning Movie</Text>
      </Row>
      <Row>
        <MovieInfo>
          <MovieInfoValue>{movie.year}</MovieInfoValue>
          <MovieInfoProperty>year</MovieInfoProperty>
        </MovieInfo>
        <MovieInfo>
          <MovieInfoValue>{movie.length}</MovieInfoValue>
          <MovieInfoProperty>min</MovieInfoProperty>
        </MovieInfo>
      </Row>
      <Row>
        <Text>{movie.description}</Text>
      </Row>
    </MovieDescription>
  </HeaderContentMovieStyled>
);

HeaderContentMovie.propTypes = {
  height: PropTypes.number,
};

export default HeaderContentMovie;
export {
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
};
