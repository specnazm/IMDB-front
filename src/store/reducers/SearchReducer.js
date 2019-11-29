import { SET_SEARCH_RESULT, SET_SEARCH_PAGE_COUNT } from '../actions/ActionTypes';

const initialState = {
  result : [],
  title: null,
  pageCount: null
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULT :
      if (state.title !== action.title)
        return {...state, result: action.data, title: action.title };
      return {...state, result: action.data };
    case SET_SEARCH_PAGE_COUNT:
        return {...state, pageCount: action.pageCount }
    default:
      return state;
  }
};

export default searchReducer;