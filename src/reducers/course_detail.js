import {
    UPDATE_COURSE_DETAIL
} from '../actions/types';

function course_detail(state = {}, action) {
    switch(action.type) {
        case UPDATE_COURSE_DETAIL :
            return action.course_detail;
        default:
            return state;
    }
}

export default course_detail;