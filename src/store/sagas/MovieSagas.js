import { call, put, select } from 'redux-saga/effects';
import { movieService } from '../../services/MovieService';
import { setMovies, setPageCount, setSelected, setReaction, setReactionSelected, setSearchResult, setSearchPageCount, setGenres } from '../actions/MovieActions';
import { getReaction, getGenre } from '../../utils/utils';

const getPageCount = state => state.movie.pageCount;
const getSelected = state => state.movie.selected;

export function* moviesGet(action) {
  try {
    const { data } = yield call(() => movieService.getMovies(action.payload));
    data.data.forEach( movie => {
      movie.user_reaction = getReaction(movie);
      movie.genre = getGenre(movie);
    });
    yield put(setMovies(data.data));
    yield put(setSelected(null));
    const pageCount = yield select(getPageCount);
    if (!pageCount )
      yield put(setPageCount({ pageCount :data.last_page }));
  } catch (error) {
    console.log({ error });
  }
}

export function* movieGet(action) {
  try {
    let { data } = yield call(() => movieService.getMovie(action.payload));
    data.user_reaction = getReaction(data);
    data.genre = getGenre(data);
    yield put(setSelected(data));
  } catch (error) {
    console.log({ error });
  }
}

export function* postReaction(action) {
  const selected = yield select(getSelected);
  try {
    if (selected)
      yield put(setReactionSelected(action.payload));
    else
      yield put(setReaction(action));
      console.log(action)
    const { data } = yield call(() => movieService.addReaction(action.payload));
  } catch (error) {
    action.reaction = action.old;
    if (selected)
      yield put(setReactionSelected(action.payload));
    else
      yield put(setReaction(action.payload));
  }
}

export function* searchMovie(action) {
  try {
    let { data } = yield call(() => movieService.search(action.payload));
    data.data.forEach( movie => movie.genre = getGenre(movie));
    yield put(setSearchResult({data: data.data, title: action.payload.title}));
    yield put(setSearchPageCount({ pageCount: data.last_page }));
  } catch (error) {
    console.log({ error });
  }
}

export function* genresGet(action) {
  try {
    const { data } = yield call(() => movieService.getGenres());
    yield put(setGenres(data));
  } catch (error) {
    console.log({ error });
  }
}