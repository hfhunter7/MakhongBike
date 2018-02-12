import {
    login_user, login_user_from_auth_token, login_username_from_auth_token, login_with_username, logout_user,
    update_profile_trainer
} from "./users/userAction";

//////////////////////////// User Action ////////////////////////////
import {
    UPDATE_USER
} from "./types";
import { create_user } from "./register/registerAction";


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