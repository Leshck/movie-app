import { movieReducer } from '../../../../src/store/ducks/movie';

describe('Movie reducer', () => {
  test('should handle MOVIES_RECEIVED', () => {
    expect(
      movieReducer(
        {},
        {
          type: 'MOVIES_RECEIVED',
          payload: ['movie1', 'movie2'],
          total: 130,
        },
      ),
    ).toMatchObject({
      movieList: ['movie1', 'movie2'],
      total: 130,
    });
  });

  test('should handle MOVIE_RECEIVED', () => {
    const genres = ['Action', 'Thriller', 'Drama'];
    const result = movieReducer(
      {},
      {
        type: 'MOVIE_RECEIVED',
        payload: { title: 'testMovie', genres },
      },
    );
    expect(result).toMatchObject({
      movie: { title: 'testMovie', genres },
      suggestedGenre: expect.anything(),
    });
  });

  test('should handle CHANGE_SORT_BY', () => {
    expect(
      movieReducer(
        {},
        {
          type: 'CHANGE_SORT_BY',
          payload: 'rating',
        },
      ),
    ).toMatchObject({
      sortBy: 'rating',
    });
  });

  test('should handle CHANGE_SEARCH_BY', () => {
    expect(
      movieReducer(
        {},
        {
          type: 'CHANGE_SEARCH_BY',
          payload: 'title',
        },
      ),
    ).toMatchObject({
      searchBy: 'title',
    });
  });

  test('should handle CHANGE_SEARCH', () => {
    expect(
      movieReducer(
        {},
        {
          type: 'CHANGE_SEARCH',
          payload: 'Rick and Morty',
        },
      ),
    ).toMatchObject({
      search: 'Rick and Morty',
    });
  });
});
