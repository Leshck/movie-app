import { movieReducer, watchMovieSagas } from './movie';

export const reducers = {
  movie: movieReducer,
};

export const watchSagas = [watchMovieSagas];
