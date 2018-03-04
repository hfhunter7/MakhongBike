import {
    FETCH_ALL_RESERVE
} from '../actions/types';

function reserve_all(state = {}, action) {
    switch(action.type) {
        case FETCH_ALL_RESERVE :
            return action.reserve_all;
        default:
            return state;
    }
}

export default reserve_all;