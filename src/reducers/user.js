import {
    UPDATE_USER
} from '../actions/types';

function user(state = {}, action) {
    switch(action.type) {
        case UPDATE_USER :
            return action.user;
        default:
            return state;
    }
}

export default user;