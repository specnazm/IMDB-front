import { GET_MOVIES, SET_MOVIES, SET_PAGE_COUNT } from './ActionTypes';

export const getMovies = (page, perPage) => {
  return {
    type: GET_MOVIES,
    page,
    perPage
  };
};

export const setMovies = ({ data: payload }) => {
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
