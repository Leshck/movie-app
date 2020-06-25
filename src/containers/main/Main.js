import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { colors } from '../../constants/colors';
import ControllerBar from '../controller/ControllerBar';
import MovieList from '../movie-list/MovieList';
import { EmptyState } from '../../components';
import { getMovies, changeSortBy } from '../../store/actions/movie';

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

const Main = ({ total, movies, sortBy, getMovies, changeSortBy, suggestedGenre, mode }) => {
  useEffect(() => {
    getMovies();
  }, []);
  const handleSortByChange = (sortBy) => {
    changeSortBy(sortBy);
    getMovies();
  };
  return (
    <MainStyled>
      <ControllerBar
        total={total}
        sortBy={sortBy}
        handleSortByChange={handleSortByChange}
        suggestedGenre={suggestedGenre}
        mode={mode}
      />
      <Content>
        {movies && !!movies.length ? <MovieList movies={movies} /> : <EmptyState>No films found</EmptyState>}
      </Content>
    </MainStyled>
  );
};

Main.propTypes = {
  total: PropTypes.number,
  movies: PropTypes.array,
  sortBy: PropTypes.string,
  getMovies: PropTypes.func,
  changeSortBy: PropTypes.func,
  suggestedGenre: PropTypes.string,
  mode: PropTypes.string,
};

const itemsSelector = createSelector(
  (state) => state.movie.movieList,
  (items) => items.toArray(),
);

const mapStateToProps = (state) => ({
  movies: itemsSelector(state),
  sortBy: state.movie.sortBy,
  total: state.movie.total,
  suggestedGenre: state.movie.suggestedGenre,
});

const mapDispatchToProps = {
  getMovies,
  changeSortBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
export { MainStyled, Content, Main };
