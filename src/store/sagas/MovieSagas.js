import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovies } from '../actions/MovieActions';

export function* moviesGet(action) {
  try {
    const response = yield call(() => movieService.getMovies(action.page));
    console.log(response.data);
    yield put(setMovies(response.data.data));
  } catch (error) {
    console.log({ error });
  }
}
