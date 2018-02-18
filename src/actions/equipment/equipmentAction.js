import { apiUrl } from '../../helpers/urlHelper';

const defaultUrl = apiUrl[ process.env.NODE_ENV ];

export function fetch_equipments(dispatch, update_equipments) {
    fetch(defaultUrl + `/equipment`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                // throw new Error("Bad response from server");
            }

            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_equipments(json));
        });
}