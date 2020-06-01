export const getMovies = () => ({
  type: 'GET_MOVIES',
});
export const getMovie = (payload) => ({
  type: 'GET_MOVIE',
  payload,
});
export const changeSortBy = (payload) => ({
  type: 'CHANGE_SORT_BY',
  payload,
});
export const changeSearchBy = (payload) => ({
  type: 'CHANGE_SEARCH_BY',
  payload,
});
export const changeSearch = (payload) => ({
  type: 'CHANGE_SEARCH',
  payload,
});
