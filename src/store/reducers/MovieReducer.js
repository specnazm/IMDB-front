import { SET_MOVIES, SET_PAGE_COUNT, SET_SELECTED_MOVIE, SET_REACTION, UNDO_REACTION } from '../actions/ActionTypes';
import { LIKE, DISLIKE } from '../../utils/constants';

const initialState = {
  all: [],
  pageCount: null,
  selected: { user_reaction : [], id: null}
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_PAGE_COUNT:
      return {...state, pageCount: action.pageCount}
    case SET_SELECTED_MOVIE:
      return {...state, selected: action.payload};
   case SET_REACTION:
    
      const changeSelected = state.selected.id == action.movieId;
      let movie, changedArr;
      if (changeSelected) {
        movie = state.selected;
      } else{
        changedArr = state.all.slice();
        movie = state.all.find(el => el.id == action.movieId);
      }
      let { likes_count, dislikes_count, user_reaction } = movie;
      switch(action.reaction){
        case null:
          likes_count -= action.old
          dislikes_count -= action.old == DISLIKE;
          break;
        case LIKE: 
          likes_count +=  action.old != LIKE;
          dislikes_count -=  action.old == DISLIKE 
          break;
        case DISLIKE:
            dislikes_count += action.old != DISLIKE;
          likes_count -=  action.old == LIKE;
          break;
      }
      user_reaction = [{reaction: action.reaction}];

      movie = {...movie, likes_count: likes_count, dislikes_count: dislikes_count, user_reaction :user_reaction};
      if (changeSelected)
        return {...state,  selected: {...state.selected, likes_count, dislikes_count, user_reaction}};
      else{
        const foundIndex = changedArr.findIndex(x => x.id == movie.id);
        changedArr[foundIndex] = movie;
        return {...state, all : [...changedArr]}
      }

    case UNDO_REACTION:
      //    changeSelected = state.selected.movie != {};
      //    movie = changeSelected ? state.selected: state.all.find(el => el.id == action.movieId);

      //   { likes_count, dislikes_count, user_reaction } = movie;
      //   user_reaction = [{reaction: action.old}];

      //   switch(action.old){
      //     case null:
      //       likes_count -= action.reaction
      //       dislikes_count -= action.reaction == DISLIKE;
      //       break;
      //     case LIKE: 
      //       likes_count +=  action.reaction != LIKE;
      //       dislikes_count -=  action.reaction == DISLIKE 
      //       break;
      //     case DISLIKE:  
      //       dislikes_count += action.old != DISLIKE;
      //       likes_count -=  action.old == LIKE;
      //       break;
      //   }
      // return {...state,  selected: {...state.selected, likes_count, dislikes_count, user_reaction}};
    default:
      return state;
  }
};

export default movieReducer;