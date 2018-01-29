import {
    UPDATE_TAGS
} from '../actions/types';

function tags(state = {}, action) {
    switch(action.type) {
        case UPDATE_TAGS :
            return action.tags;
        default:
            return state;
    }
}

export default tags;