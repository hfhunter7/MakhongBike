import {
    login_user, login_user_from_auth_token, login_username_from_auth_token, login_with_username, logout_user,
    update_profile_trainer
} from "./users/userAction";

//////////////////////////// User Action ////////////////////////////
import {
    FETCH_EQUIPMENT, FETCH_RESERVE, FETCH_RESERVE_DETAIL,
    UPDATE_USER
} from "./types";
import { create_user } from "./register/registerAction";
import { fetch_equipments } from "./equipment/equipmentAction";
import { create_reserve, fetch_reserve_detail, fetch_reserves } from "./reserve/reserveAction";


export function update_user( user ) {
    return {
        type: UPDATE_USER,
        user
    }
}

///////////////////////// User Service Action /////////////////////////



export function loginGoogle( userParams = {} ) {
    return function ( dispatch ) {
        login_user(userParams, dispatch, update_user)
    }
}

export function loginWithUsername( userParams = {} ) {
    return function ( dispatch ) {
        login_with_username(userParams, dispatch, update_user)
    }
}


export function loginUserFromAuthToken( token ) {
    return function ( dispatch ) {
        login_user_from_auth_token(token, dispatch, update_user);
    }
}

export function loginUsernameFromAuthToken( token ) {
    return function ( dispatch ) {
        login_username_from_auth_token(token, dispatch, update_user);
    }
}

export function updateProfileTrainer( data ) {
    return function ( dispatch ) {
        update_profile_trainer(data, dispatch, update_user);
    }
}


export function logoutUserFromAuthToken() {
    return function ( dispatch ) {
        logout_user(dispatch, update_user)
    }
}

///////////////// register service //////////////////
export function registerUser(data){
    return function ( dispatch ) {
        create_user(data , dispatch , update_user);
    }
}

///////////////// equipment action //////////////////
export function update_equipments( equipments ) {
    return {
        type: FETCH_EQUIPMENT,
        equipments
    }
}

export function getEquipments() {
    return function ( dispatch ) {
        fetch_equipments(dispatch, update_equipments);
    }
}

//////////////// reserve action ///////////////
export function reserveTrip(data){
    return function ( dispatch ) {
        create_reserve(data , dispatch , update_reserves);
    }
}

export function update_reserves( reserve ) {
    return {
        type: FETCH_RESERVE,
        reserve
    }
}

export function getReserves() {
    return function ( dispatch ) {
        fetch_reserves(dispatch, update_reserves);
    }
}

export function update_reserves_detail( reserve_detail ) {
    return {
        type: FETCH_RESERVE_DETAIL,
        reserve_detail
    }
}

export function getReservesDetail(id) {
    return function ( dispatch ) {
        fetch_reserve_detail(id,dispatch, update_reserves_detail);
    }
}