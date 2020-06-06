import * as actions from '../../../src/store/actions/movie';

describe('actions', () => {
  test('should create an action to fetch movies', () => {
    const expectedAction = {
      type: 'GET_MOVIES',
    };
    expect(actions.getMovies()).toMatchObject(expectedAction);
  });

  test('should create an action to fetch movie', () => {
    const movieId = 'movie-id';
    const expectedAction = {
      type: 'GET_MOVIE',
      payload: movieId,
    };
    expect(actions.getMovie(movieId)).toMatchObject(expectedAction);
  });

  test('should create an action to change "sort by" filter', () => {
    const sortByValue = 'rating';
    const expectedAction = {
      type: 'CHANGE_SORT_BY',
      payload: sortByValue,
    };
    expect(actions.changeSortBy(sortByValue)).toMatchObject(expectedAction);
  });

  test('should create an action to change "search by" filter', () => {
    const searchByValue = 'title';
    const expectedAction = {
      type: 'CHANGE_SEARCH_BY',
      payload: searchByValue,
    };
    expect(actions.changeSearchBy(searchByValue)).toMatchObject(expectedAction);
  });
  test('should create an action to change search string', () => {
    const searchValue = 'Green elephant';
    const expectedAction = {
      type: 'CHANGE_SEARCH',
      payload: searchValue,
    };
    expect(actions.changeSearch(searchValue)).toMatchObject(expectedAction);
  });
});
