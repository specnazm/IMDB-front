import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, GET_MOVIE_PAGE, ADD_REACTION, SEARCH_MOVIES } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { moviesGet, movieGet, postReaction, searchMovie } from './MovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE_PAGE, movieGet),
    takeLatest(ADD_REACTION, postReaction),
    takeLatest(SEARCH_MOVIES, searchMovie)
  ]);
}