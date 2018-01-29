import {
    FETCH_EXAM_DETAIL
} from '../actions/types';

function exam_detail(state = {}, action) {
    switch(action.type) {
        case FETCH_EXAM_DETAIL :
            return action.exam_detail;
        default:
            return state;
    }
}

export default exam_detail;