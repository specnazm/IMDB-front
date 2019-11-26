import { call, put, select } from 'redux-saga/effects';
import { push, go } from 'connected-react-router';
import { movieService } from '../../services/MovieService';
import { setMovies, setPageCount, setMovie } from '../actions/MovieActions';
import { SINGLE_MOVIE_PAGE } from '../../routes';

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

export function* movieGet(action) {
  try {
    const { data } = yield call(() => movieService.getMovie(action.id));
    yield put(setMovie(data));
  } catch (error) {
    console.log({ error });
  }
}