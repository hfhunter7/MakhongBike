import {
    FETCH_TRIP_DETAIL
} from '../actions/types';

function trip_detail(state = {}, action) {
    switch(action.type) {
        case FETCH_TRIP_DETAIL :
            return action.trip_detail;
        default:
            return state;
    }
}

export default trip_detail;