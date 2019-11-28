import { LIKE, DISLIKE, LIKE_BUTTON, DISLIKE_BUTTON } from './constants';

export const buttonColor = (buttonType, reaction) => {
    switch(buttonType){
        case LIKE_BUTTON:
            return reaction == LIKE ? "primary" : "none";
        case DISLIKE_BUTTON:
            return reaction == DISLIKE ? "secondary" : "none";
    };
}   