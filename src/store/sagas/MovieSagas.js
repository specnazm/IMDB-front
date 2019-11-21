import { call, put, select } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovies, setPageCount } from '../actions/MovieActions';

const getPageCount = state => state.movie.pageCount;

export function* moviesGet(action) {
  try {
    const { data } = yield call(() => movieService.getMovies(action.page, action.perPage));
    yield put(setMovies(data));
    const pageCount = yield select(getPageCount);
    if (!pageCount )
      yield put(setPageCount(data));
  } catch (error) {
    console.log({ error });
  }
}
