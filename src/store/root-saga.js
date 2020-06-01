import { all, fork } from 'redux-saga/effects';
import { watchSagas } from './ducks';

function* rootSaga() {
  yield all(watchSagas.map(fork));
}

export default rootSaga;
