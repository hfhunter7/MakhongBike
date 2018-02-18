import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from "./user";
import equipments from './equipments';
import reserve from "./reserve";
import reserve_detail from "./reserve_detail";

const rootReducer = combineReducers({
    user,
    equipments,
    reserve,
    reserve_detail,
    routing: routerReducer
});

export default rootReducer;