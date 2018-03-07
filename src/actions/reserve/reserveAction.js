import { apiUrl } from '../../helpers/urlHelper';
import { createJwtFromToken } from '../../helpers/tokenHelper';

import history from '../../history';
import { current_user_storage } from "../../helpers/sessionHelper";

const defaultUrl = apiUrl[ process.env.NODE_ENV ];

export function create_reserve( data, dispatch, update_reserve ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/reserve',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
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
            function ( json ) {
                console.log(json);
                dispatch(update_reserve);
                history.replace('/reserve-history');
            });
}

export function fetch_reserves( dispatch, update_reserve) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + `/reserve`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            }
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                // throw new Error("Bad response from server");
            }

            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_reserve(json));
        });
}

export function fetch_all_reserves( dispatch, update_all_reserve) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + `/reserve/all`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            }
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                // throw new Error("Bad response from server");
            }

            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_all_reserve(json));
        });
}

export function fetch_reserve_detail( id, dispatch, update_reserve_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;
    fetch(defaultUrl + `/reserve/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            }
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                //throw new Error("Bad response from server");
            }
            return response.json()
        }).then(
        function ( json ) {
            dispatch(update_reserve_detail(json))
        });
}

export function fetch_reserve_stat( dispatch, update_reserve_stat ) {
	const user_storage = current_user_storage();
	const auth_token = user_storage.auth_token;
	fetch(defaultUrl + `/reserve/stat`,
		{
			headers: {
				'Content-Type': 'application/json',
				'Authorization': createJwtFromToken('', auth_token)
			}
		})
	.then(function ( response ) {
		if (response.status >= 400) {
			//throw new Error("Bad response from server");
		}
		return response.json()
	}).then(
		function ( json ) {
			dispatch(update_reserve_stat(json))
		});
}

export function edit_status_payment(id, data, dispatch, update_all_reserve ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/reserve/' + id,
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
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_all_reserve(json))
        });
}

export function edit_child(id, data, dispatch, update_reserve_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/reserve/child/' + id,
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
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_reserve_detail(json))
        });
}

export function edit_adult(id, data, dispatch, update_reserve_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/reserve/adult/' + id,
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
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_reserve_detail(json))
        });
}

export function delete_reserve_by_id(id, dispatch, update_all_reserve ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/reserve/' + id,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            },
            method: "DELETE",
        })
        .then(function ( response ) {
            if (response.status >= 400) {
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_all_reserve(json));
            history.replace('/reserve-admin');
        });
}