import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import searchIcon from '../../static/search-icon.jpg';
import { Title } from '../../components';
import { colors } from '../../constants/colors';
import { getMovie } from '../../store/actions/movie';

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
  display: flex;
  justify-content: center;
  border: 1px solid ${colors.WHITE};
  padding: 10px 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 30px;
`;

const Rating = styled.h3`
  color: ${colors.GREEN};
  float: left;
  clear: left;
  margin: 0;
  padding: 0;
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

const HeaderContentMovie = ({ height, id, getMovie, movie }) => {
  useEffect(() => {
    getMovie(id);
  }, []);
  useEffect(() => {
    getMovie(id);
  }, [id]);
  return (
    <HeaderContentMovieStyled height={height}>
      <Link to="/">
        <SearchIcon src={searchIcon}></SearchIcon>
      </Link>
      <Poster src={movie.poster_path}></Poster>
      <MovieDescription>
        <Row>
          <Title>{movie.title}</Title>
          <RatingBox>
            <Rating>{movie.vote_average}</Rating>
          </RatingBox>
        </Row>
        {movie.tagline ? (
          <Row>
            <Text>{movie.tagline}</Text>
          </Row>
        ) : (
          ''
        )}
        <Row>
          <MovieInfo>
            <MovieInfoValue>{movie?.release_date?.slice(0, 4)}</MovieInfoValue>
            <MovieInfoProperty>year</MovieInfoProperty>
          </MovieInfo>
          <MovieInfo>
            <MovieInfoValue>{movie.vote_average}</MovieInfoValue>
            <MovieInfoProperty>min</MovieInfoProperty>
          </MovieInfo>
        </Row>
        <Row>
          <Text>{movie.overview}</Text>
        </Row>
      </MovieDescription>
    </HeaderContentMovieStyled>
  );
};

HeaderContentMovie.propTypes = {
  height: PropTypes.number,
  id: PropTypes.string,
  getMovie: PropTypes.func,
  movie: PropTypes.object,
};

const mapStateToProps = (state) => ({
  movie: state.movie.movie,
});

const mapDispatchToProps = {
  getMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContentMovie);
export {
  HeaderContentMovie,
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
