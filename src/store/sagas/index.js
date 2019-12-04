import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, CREATE_MOVIE, GET_MOVIE_PAGE, ADD_REACTION, SEARCH_MOVIES, GET_ALL_GENRES, GET_POPULAR_MOVIES, SEARCH_MOVIES_OMDB } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { moviesGet, movieGet, searchOMDB, postReaction, searchMovie, genresGet, popularGet, movieAdd, movieCreate } from './MovieSagas';


export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE_PAGE, movieGet),
    takeLatest(ADD_REACTION, postReaction),
    takeLatest(SEARCH_MOVIES, searchMovie),
    takeLatest(GET_ALL_GENRES, genresGet),
    takeLatest(GET_POPULAR_MOVIES, popularGet),
    takeLatest(CREATE_MOVIE, movieCreate),
    takeLatest(SEARCH_MOVIES_OMDB, searchOMDB)
  ]);
}