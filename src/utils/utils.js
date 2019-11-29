import { LIKE, DISLIKE, LIKE_BUTTON, DISLIKE_BUTTON } from './constants';

export const buttonColor = (buttonType, reaction) => {
    switch(buttonType){
        case LIKE_BUTTON:
            return reaction === LIKE ? "primary" : "default";
        case DISLIKE_BUTTON:
            return reaction === DISLIKE ? "secondary" : "default";
        default :
            return "default";
    };
}   

export const getReaction = ( {user_reaction} )=> {
    if (user_reaction.length)
        user_reaction = user_reaction[0].reaction;
    else 
       user_reaction = null;
    
    return user_reaction
}

export const getGenre = ( {genre} )=> {
    return genre.name.charAt(0).toUpperCase() + genre.name.slice(1);
}