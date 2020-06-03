import { put, takeLatest, select, call } from 'redux-saga/effects';
import { MOVIE } from '../../actions/constants';
import * as API from '../../../services/movie';

function* fetchMovies() {
  const state = yield select();
  const json = yield call(API.fetchMovies, state.movie);
  yield put({ type: MOVIE.MOVIES_RECEIVED, payload: json.data, total: json.total });
}

function* fetchMovie(action) {
  const json = yield call(API.fetchMovie, action.payload);
  yield put({ type: MOVIE.MOVIE_RECEIVED, payload: json });
  yield put({ type: MOVIE.GET_MOVIES });
}

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE.MOVIES_RECEIVED:
      return { ...state, movieList: action.payload, total: action.total };
    case MOVIE.MOVIE_RECEIVED:
      return {
        ...state,
        movie: action.payload,
        suggestedGenre: action.payload.genres[Math.floor(Math.random() * action.payload.genres.length)],
      };
    case MOVIE.CHANGE_SORT_BY:
      return { ...state, sortBy: action.payload };
    case MOVIE.CHANGE_SEARCH_BY:
      return { ...state, searchBy: action.payload };
    case MOVIE.CHANGE_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

const initialState = {
  movieList: [],
  searchBy: 'title',
  sortBy: 'release_date',
  search: '',
  total: 0,
  movie: {},
  suggestedGenre: '',
};

export function* watchMovieSagas() {
  yield takeLatest(MOVIE.GET_MOVIES, fetchMovies);
  yield takeLatest(MOVIE.GET_MOVIE, fetchMovie);
}
