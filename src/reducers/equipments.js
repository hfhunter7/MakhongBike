import {
    FETCH_EQUIPMENT
} from '../actions/types';

function equipments(state = {}, action) {
    switch(action.type) {
        case FETCH_EQUIPMENT :
            return action.equipments;
        default:
            return state;
    }
}

export default equipments;