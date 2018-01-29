import {
	UPDATE_COURSES
} from '../actions/types';

function courses(state = {}, action) {
	switch(action.type) {
		case UPDATE_COURSES :
			return action.courses;
		default:
			return state;
	}
}

export default courses;