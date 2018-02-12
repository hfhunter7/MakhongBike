import { apiUrl } from '../../helpers/urlHelper';
import { createJwtFromToken } from '../../helpers/tokenHelper';

import { current_user_storage, privateLoginFunction } from '../../helpers/sessionHelper';
import history from '../../history';
const defaultUrl = apiUrl[ process.env.NODE_ENV ];

export function create_user( data, dispatch ,update_user) {
    fetch(defaultUrl + '/user/register',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken()
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(function ( response ) {
            if (response.status >= 400) {
            }
            return response.json()
        })
        .then(
            function (json) {
                dispatch(update_user(json));
                history.replace('/');
            }
        );
}