import { SET_SEARCH_RESULT, SET_SEARCH_PAGE_COUNT, SET_ALL_GENRES } from '../actions/ActionTypes';

const initialState = {
  result : [],
  title: null,
  pageCount: 1,
  genres: []
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULT :
      const { data, title } = action.payload;
      if (state.title !== title)
        return {...state, result: data, title: title };
      return {...state, result: data };
    case SET_SEARCH_PAGE_COUNT:
      return {...state, pageCount: action.payload.pageCount }
    case SET_ALL_GENRES:
      return {...state, genres: action.payload }
    default:
      return state;
  }
};

export default searchReducer;