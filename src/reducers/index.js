import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from "./user";
import equipments from './equipments';
import reserve from "./reserve";
import reserve_detail from "./reserve_detail";
import trip from "./trip";
import trip_detail from "./trip_detail";
import trip_image_url from "./trip_image_url";
import reserve_all from "./reserver_all";

const rootReducer = combineReducers({
    user,
    equipments,
    reserve,
    reserve_detail,
    trip,
    trip_detail,
    trip_image_url,
    reserve_all,
    routing: routerReducer
});

export default rootReducer;