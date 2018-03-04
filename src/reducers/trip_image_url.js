import {
    FETCH_TRIP_URL
} from '../actions/types';

function trip_image_url(state = {}, action) {
    switch(action.type) {
        case FETCH_TRIP_URL :
            return action.trip_image_url;
        default:
            return state;
    }
}

export default trip_image_url;