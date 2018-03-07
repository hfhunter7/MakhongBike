import {
	FETCH_RESERVE_STAT
} from '../actions/types';

function reserve_stat(state = {}, action) {
	switch(action.type) {
		case FETCH_RESERVE_STAT :
			return action.reserve_stat;
		default:
			return state;
	}
}

export default reserve_stat;