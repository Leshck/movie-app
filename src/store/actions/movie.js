import { MOVIE } from './constants';

export const getMovies = () => ({
  type: MOVIE.GET_MOVIES,
});
export const getMovie = (payload) => ({
  type: MOVIE.GET_MOVIE,
  payload,
});
export const changeSortBy = (payload) => ({
  type: MOVIE.CHANGE_SORT_BY,
  payload,
});
export const changeSearchBy = (payload) => ({
  type: MOVIE.CHANGE_SEARCH_BY,
  payload,
});
export const changeSearch = (payload) => ({
  type: MOVIE.CHANGE_SEARCH,
  payload,
});
export const resetMovie = () => ({
  type: MOVIE.RESET_MOVIE,
});
export const resetSearch = () => ({
  type: MOVIE.RESET_SEARCH,
});
