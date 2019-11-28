import { call, put, select } from 'redux-saga/effects';
import { push, go } from 'connected-react-router'
import { movieService } from '../../services/MovieService';
import { setMovies, setPageCount, setSelected, setReaction, undoReaction, setReactionSelected, undoReactionSelected } from '../actions/MovieActions';
import { getReactionFromArr } from '../../utils/utils';

const getPageCount = state => state.movie.pageCount;
const getSelected = state => state.movie.selected;

export function* moviesGet(action) {
  try {
    const { data } = yield call(() => movieService.getMovies(action.page, action.perPage));
    data.data.forEach( movie => movie.user_reaction = getReactionFromArr(movie));
    yield put(setMovies(data));
    yield put(setSelected(null));
    const pageCount = yield select(getPageCount);
    if (!pageCount )
      yield put(setPageCount(data));
  } catch (error) {
    console.log({ error });
  }
}

export function* movieGet(action) {
  try {
    let { data } = yield call(() => movieService.getMovie(action.id));
    data.user_reaction = getReactionFromArr(data);
    yield put(setSelected(data));
  } catch (error) {
    console.log({ error });
  }
}

export function* postReaction(action) {
  const selected = yield select(getSelected);
  try {
    if (selected)
      yield put(setReactionSelected(action));
    else
      yield put(setReaction(action));
    const { data } = yield call(() => movieService.addReaction(action.movieId, action.reaction));
  } catch (error) {
    action.reaction = action.old;
    if (selected)
      yield put(setReactionSelected(action));
    else
      yield put(setReaction(action));
  }
}