import { call, put, select } from 'redux-saga/effects';
import { movieService } from '../../services/MovieService';
import { setMovies, addMovie, setPageCount, setSelected, setReaction, setReactionSelected, setSearchResult, setSearchPageCount, setGenres, setPopular } from '../actions/MovieActions';
import { getReaction, getGenre } from '../../utils/utils';
import { DASHBOARD } from '../../routes';
import { push, go } from 'connected-react-router';


const getPageCount = state => state.movie.pageCount;
const getSelected = state => state.movie.selected;

export function* moviesGet(action) {
  try {
    const { data } = yield call(() => movieService.getMovies(action.page, action.perPage));
    data.data.forEach( movie => {
      movie.user_reaction = getReaction(movie);
      movie.genre = getGenre(movie);
    });
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
    data.movie.user_reaction = getReaction(data.movie);
    data.movie.genre = getGenre(data.movie);
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

export function* searchMovie(action) {
  try {
    let { data } = yield call(() => movieService.search(action));
    data.data.forEach( movie => movie.genre = getGenre(movie));
    yield put(setSearchResult(data.data, action.title));
    yield put(setSearchPageCount(data));
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

export function* popularGet(action) {
  try {
    const { data } = yield call(() => movieService.getPopular());
    yield put(setPopular(data));
  } catch (error) {
    console.log({ error });
  }
}

export function* movieCreate(action) {
  try {
    const { data } = yield call(() => movieService.createMovie(action.payload));
    yield put(addMovie(data));
  } catch (error) {
    console.log({ error });
  }
}

export function* searchOMDB(action) {
  try {
    const response = yield call(() => movieService.getMoviesOMDB(action.payload));
    yield put(setSearchResult([response.data], null));
  } catch (error) {
    console.log({ error });
  }
}