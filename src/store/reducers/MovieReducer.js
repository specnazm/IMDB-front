import { SET_MOVIES, SET_PAGE_COUNT, SET_SELECTED_MOVIE } from '../actions/ActionTypes';

const initialState = {
  all: [],
  pageCount: null,
  selected: {}
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_PAGE_COUNT:
      return {...state, pageCount: action.pageCount}
    case SET_SELECTED_MOVIE:
      console.log(action.movie);
      return {...state, selected: action.movie};
    default:
      return state;
  }
};

export default movieReducer;
