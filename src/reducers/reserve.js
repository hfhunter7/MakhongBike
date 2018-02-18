import {
    FETCH_RESERVE
} from '../actions/types';

function reserve(state = {}, action) {
    switch(action.type) {
        case FETCH_RESERVE :
            return action.reserve;
        default:
            return state;
    }
}

export default reserve;