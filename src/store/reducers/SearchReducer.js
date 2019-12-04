import { SET_SEARCH_RESULT, SET_SEARCH_PAGE_COUNT, SET_ALL_GENRES, SEARCH_MOVIES_OMDB } from '../actions/ActionTypes';

const initialState = {
  result : [],
  title: null,
  pageCount: null,
  genres: []
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULT :
      if (state.title !== action.title)
        return {...state, result: action.data, title: action.title };
      return {...state, result: action.data };
    case SET_SEARCH_PAGE_COUNT:
      return {...state, pageCount: action.pageCount }
    case SET_ALL_GENRES:
      return {...state, genres: action.payload }
    default:
      return state;
  }
};

export default searchReducer;