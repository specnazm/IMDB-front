import { SET_MOVIES, SET_PAGE_COUNT, SET_SELECTED_MOVIE, SET_REACTION, SET_REACTION_SELECTED, SET_POPULAR_MOVIES, ADD_MOVIE } from '../actions/ActionTypes';
import { LIKE, DISLIKE } from '../../utils/constants';

const initialState = {
  all: [],
  pageCount: null,
  selected: null,
  related: [],
  popular: []
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_PAGE_COUNT:
      return {...state, pageCount: action.pageCount}
    case SET_SELECTED_MOVIE:
      
      return {...state, selected: action.payload.movie, related: action.payload.related };
    case SET_REACTION_SELECTED:
      let movie = reduceReactions(state.selected, action.reaction);
      
      return {...state,  selected: movie};
   case SET_REACTION:
      const index = state.all.findIndex(movie => movie.id === action.movieId);
      movie = reduceReactions( state.all[index], action.reaction);
      let changedArr = state.all.slice();
      changedArr[index] = movie;

      return {...state, all : [...changedArr]};
    case SET_POPULAR_MOVIES:
      return {...state, popular: action.payload};
    case ADD_MOVIE:
      return {...state, all: [...state.all, action.payload]}
    default:
      return state;
  }
};

const reduceReactions = (movie,reaction) => {
  let changedMovie = {...movie};
  const oldReaction = movie.user_reaction;

  switch(reaction){
    case null:
      changedMovie.likes_count -= oldReaction
      changedMovie.dislikes_count -= oldReaction === DISLIKE;
      break;
    case LIKE: 
    changedMovie.likes_count +=  oldReaction !== LIKE;
    changedMovie.dislikes_count -=  oldReaction === DISLIKE 
      break;
    case DISLIKE:
        changedMovie.dislikes_count += oldReaction !== DISLIKE;
        changedMovie.likes_count -= oldReaction === LIKE;
      break;
    default:
  }
  changedMovie.user_reaction = reaction;

  return changedMovie;
}

export default movieReducer;