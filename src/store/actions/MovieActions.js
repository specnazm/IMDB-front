import { GET_MOVIES, SET_MOVIES } from './ActionTypes';

export const getMovies = page => {
  return {
    type: GET_MOVIES,
    page
  };
};

export const setMovies = payload => {
  return {
    type: SET_MOVIES,
    payload
  };
};
