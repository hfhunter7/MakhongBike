import { apiUrl } from '../../helpers/urlHelper';
import { createJwtFromToken } from '../../helpers/tokenHelper';

import { current_user_storage } from "../../helpers/sessionHelper";
import history from '../../history';
const defaultUrl = apiUrl[ process.env.NODE_ENV ];

export function create_trip( data, dispatch, update_trip ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/trip',
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
        .then(function ( json ) {
            fetch_trips(dispatch, update_trip)
        });
}

export function fetch_trips( dispatch, update_trip ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + `/trip/all`,
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
            console.log(json)
            dispatch(update_trip(json));
        });
}

export function fetch_trip_detail( id, dispatch, update_trip_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;
    fetch(defaultUrl + `/trip/${id}`,
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
            dispatch(update_trip_detail(json))
        });
}

export function edit_image_trip(id, data, dispatch, update_trip_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/trip/image/' + id,
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
            dispatch(update_trip_detail(json))
        });
}

export function edit_trip(id, data, dispatch, update_trip_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/trip/' + id,
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
            dispatch(update_trip_detail(json))
        });
}

export function add_trip_image(trip_id, data, dispatch, update_trip_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/trip/trip-image/'+ trip_id,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            },
            path: trip_id,
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(function ( response ) {
            if (response.status >= 400) {
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_trip_detail(json))
        });
}

export function delete_trip( trip_id ,dispatch, update_trip ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;
    fetch(defaultUrl + `/trip/${trip_id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token) },
            method: 'DELETE',
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                //throw new Error("Bad response from server");
            }
            return response.json()
        }).then(
        function ( json ) {
            fetch_trips(dispatch, update_trip)
            history.replace('/admin');
        });
}

export function delete_trip_image( trip_image_id ,dispatch, update_trip_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;
    fetch(defaultUrl + `/trip/trip-image/${trip_image_id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token) },
            method: 'DELETE',
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                //throw new Error("Bad response from server");
            }
            return response.json()
        }).then(
        function ( json ) {
            dispatch(update_trip_detail(json))
        });
}