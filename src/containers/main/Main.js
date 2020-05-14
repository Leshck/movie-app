import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../constants/colors';
import ControllerBar from '../controller/ControllerBar';
import MovieList from '../movie-list/MovieList';
import { EmptyState } from '../../components';

const MainStyled = styled.div`
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

const Main = ({ movies }) => (
  <MainStyled>
    <ControllerBar />
    <Content>
      {movies && !!movies.length ? <MovieList movies={movies} /> : <EmptyState>No films found</EmptyState>}
    </Content>
  </MainStyled>
);

Main.propTypes = {
  movies: PropTypes.array,
};

export default Main;
export { MainStyled, Content };
