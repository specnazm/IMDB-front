import { 
  GET_MOVIES, 
  SET_MOVIES, 
  SET_PAGE_COUNT, 
  GET_MOVIE_PAGE, 
  SET_SELECTED_MOVIE, 
  ADD_REACTION, 
  SET_REACTION,
  SET_REACTION_SELECTED,
  SET_SEARCH_RESULT,
  SEARCH_MOVIES,
  SET_SEARCH_PAGE_COUNT,
  GET_ALL_GENRES,
  SET_ALL_GENRES
 } from './ActionTypes';

export const getMovies = (payload) => {
  return {
    type: GET_MOVIES,
    payload
  };
};

export const setMovies = (payload)=> {
  return {
    type: SET_MOVIES,
    payload
  };
};

export const setPageCount = (payload) => {
    return {
    type: SET_PAGE_COUNT,
    payload
  };
};

export const setSearchPageCount = (payload) => {
  return {
  type: SET_SEARCH_PAGE_COUNT,
  payload
};
};

export const getMovie = payload => {
  return {
    type: GET_MOVIE_PAGE,
    payload
  }
};

export const setSelected = payload => {
  return {
    type: SET_SELECTED_MOVIE,
    payload
  }
};

export const addReaction = payload => {
  return {
    type: ADD_REACTION,
    payload
  }
};

export const setReaction = payload => {
  return {
    type: SET_REACTION,
    payload
  }
};

export const setReactionSelected = payload => {
  return {
    type: SET_REACTION_SELECTED,
    payload
  }
};

export const setSearchResult = payload => {
  return {
    type: SET_SEARCH_RESULT,
    payload
  }
};

export const search = payload => {
  return {
    type: SEARCH_MOVIES,
    payload
  }
};

export const getGenres = ()=> {
  return {
    type: GET_ALL_GENRES
  }
};

export const setGenres = payload => {
  return {
    type: SET_ALL_GENRES,
    payload
  }
};