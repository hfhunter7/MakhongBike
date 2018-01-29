import {
    FETCH_EXAMS
} from '../actions/types';

function exams(state = {}, action) {
    switch(action.type) {
        case FETCH_EXAMS :
            return action.exams;
        default:
            return state;
    }
}

export default exams;