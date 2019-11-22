import { SET_MOVIES, SET_PAGE_COUNT } from '../actions/ActionTypes';

const initialState = {
  all: [],
  pageCount: null
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_PAGE_COUNT:
      return {...state, pageCount: action.pageCount};
    default:
      return state;
  }
};

export default movieReducer;
