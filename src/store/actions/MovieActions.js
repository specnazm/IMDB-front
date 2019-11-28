import { 
  GET_MOVIES, 
  SET_MOVIES, 
  SET_PAGE_COUNT, 
  GET_MOVIE_PAGE, 
  SET_SELECTED_MOVIE, 
  ADD_REACTION, 
  SET_REACTION,
  UNDO_REACTION } from './ActionTypes';

export const getMovies = (page, perPage) => {
  return {
    type: GET_MOVIES,
    page,
    perPage
  };
};

export const setMovies = ({ data: payload })=> {
  return {
    type: SET_MOVIES,
    payload
  };
};

export const setPageCount = ({ last_page: pageCount }) => {
    return {
    type: SET_PAGE_COUNT,
    pageCount
  };
};

export const getMovie = id => {
  return {
    type: GET_MOVIE_PAGE,
    id
  }
};

export const setSelected = payload => {
  return {
    type: SET_SELECTED_MOVIE,
    payload
  }
};

export const addReaction = (movieId, reaction, old) => {
  return {
    type: ADD_REACTION,
    movieId,
    reaction,
    old
  }
};

export const setReaction = ({ movieId, reaction, old })=> {
  return {
    type: SET_REACTION,
    movieId,
    reaction,
    old
  }
};

export const undoReaction = ({movieId, reaction, old}) => {
  return {
    type: UNDO_REACTION,
    old,
    movieId,
    reaction
  }
};