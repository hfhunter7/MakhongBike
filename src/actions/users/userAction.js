import { apiUrl } from '../../helpers/urlHelper';
import { createJwtFromToken } from '../../helpers/tokenHelper';
import {
    privateLoginFunction,
    logout_user_storage,
    // current_user_storage
} from '../../helpers/sessionHelper';
import history from '../../history';

import { current_user_storage } from '../../helpers/sessionHelper';

const defaultUrl = apiUrl[ process.env.NODE_ENV ];

export function login_user( userInfoParams = {}, dispatch, update_user ) {
    fetch(defaultUrl + '/login/trainer',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken()
            },
            method: "POST",
            body: JSON.stringify(userInfoParams)
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                response.json().then(function ( errors ) {

                });
                // throw new Error("Bad response from server");
            }
            return response.json()
        })
        .then(function ( json ) {
            console.log(json)
            privateLoginFunction(json, dispatch, update_user);
            // browserHistory.push(`/`);
            // history.replace('/');
        });
}

export function login_with_username( userInfoParams = {}, dispatch, update_user ) {
    fetch(defaultUrl + '/login/user/user',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken()
            },
            method: "POST",
            body: JSON.stringify(userInfoParams)
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                response.json().then(function ( errors ) {

                });
                // throw new Error("Bad response from server");
            }
            return response.json()
        })
        .then(function ( json ) {
            console.log(json)
            privateLoginFunction(json, dispatch, update_user);
            // browserHistory.push(`/`);
            //history.replace('/');
        });
}

// to do it
export function logout_user( dispatch, update_user ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + `/login/logout/trainer`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            },
            method: "POST"
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                response.json().then(function ( errors ) {

                });
                //throw new Error("Bad response from server");
            }
            return null;
        })
        .then(function () {
            dispatch(update_user({}));
            logout_user_storage();
            history.replace('/');

        });
}

export function login_user_from_auth_token( auth_token, dispatch, update_user ) {

    fetch(defaultUrl + '/login/token/trainer',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            },
            method: "POST"
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                response.json().then(function ( errors ) {
                    dispatch(update_user({}));
                });

                history.replace('/login');
                logout_user_storage();
                // browserHistory.push(`/login`);
                // throw new Error("Bad response from server");
            }

            return response.json()
        })
        .then(function ( json ) {
            privateLoginFunction(json, dispatch, update_user);
            // hideLoadingState(dispatch)
        });
}

export function login_username_from_auth_token( auth_token, dispatch, update_user ) {

    fetch(defaultUrl + '/login/token/user',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            },
            method: "POST"
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                response.json().then(function ( errors ) {
                    dispatch(update_user({}));
                });

                history.replace('/loginWithUsername');
                logout_user_storage();
                // browserHistory.push(`/login`);
                // throw new Error("Bad response from server");
            }

            return response.json()
        })
        .then(function ( json ) {
            privateLoginFunction(json, dispatch, update_user);
            // hideLoadingState(dispatch)
        });
}

export function update_profile_trainer( data, dispatch, update_user ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/trainer/update-profile/',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            },
            method: "PUT",
            body: JSON.stringify(data)
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                //throw new Error("Bad response from server");
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_user(json));
        });
}