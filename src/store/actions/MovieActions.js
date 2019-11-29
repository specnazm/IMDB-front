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
  SET_SEARCH_PAGE_COUNT
 } from './ActionTypes';

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

export const setSearchPageCount = ({ last_page: pageCount }) => {
  return {
  type: SET_SEARCH_PAGE_COUNT,
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

export const setReactionSelected = ({movieId, reaction, old })=> {
  return {
    type: SET_REACTION_SELECTED,
    reaction,
    old,
    movieId
  }
};

export const setSearchResult = (data, title)=> {
  return {
    type: SET_SEARCH_RESULT,
    data,
    title
  }
};

export const search = (perPage, title, page = 1)=> {
  return {
    type: SEARCH_MOVIES,
    page,
    perPage,
    title
  }
};