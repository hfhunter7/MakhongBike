import {
    FETCH_TRIP
} from '../actions/types';

function trip(state = {}, action) {
    switch(action.type) {
        case FETCH_TRIP :
            return action.trip;
        default:
            return state;
    }
}

export default trip;