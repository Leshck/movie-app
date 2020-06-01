import { put, takeLatest, select } from 'redux-saga/effects';

function* fetchMovies() {
  const state = yield select();
  const json = yield fetch(
    `http://reactjs-cdp.herokuapp.com/movies?sortBy=${state.movie.sortBy}&sortOrder=desc&offset=0&limit=6&search=${state.movie.search}&searchBy=${state.movie.searchBy}&filter=${state.movie.suggestedGenre}`,
  ).then((response) => response.json());
  yield put({ type: 'MOVIES_RECEIVED', payload: json.data, total: json.total });
}

function* fetchMovie(action) {
  const json = yield fetch(`http://reactjs-cdp.herokuapp.com/movies/${action.payload}`).then((response) =>
    response.json(),
  );
  yield put({ type: 'MOVIE_RECEIVED', payload: json });
  yield put({ type: 'GET_MOVIES' });
}

export function movieReducer(state = {}, action) {
  switch (action.type) {
    case 'MOVIES_RECEIVED':
      return { ...state, movieList: action.payload, total: action.total };
    case 'MOVIE_RECEIVED':
      return {
        ...state,
        movie: action.payload,
        suggestedGenre: action.payload.genres[Math.floor(Math.random() * action.payload.genres.length)],
      };
    case 'CHANGE_SORT_BY':
      return { ...state, sortBy: action.payload };
    case 'CHANGE_SEARCH_BY':
      return { ...state, searchBy: action.payload };
    case 'CHANGE_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

export function* watchMovieSagas() {
  yield takeLatest('GET_MOVIES', fetchMovies);
  yield takeLatest('GET_MOVIE', fetchMovie);
}
