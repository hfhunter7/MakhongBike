import {
    FETCH_RESERVE_DETAIL
} from '../actions/types';

function reserve_detail(state = {}, action) {
    switch(action.type) {
        case FETCH_RESERVE_DETAIL :
            return action.reserve_detail;
        default:
            return state;
    }
}

export default reserve_detail;