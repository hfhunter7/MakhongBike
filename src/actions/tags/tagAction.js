import { apiUrl } from '../../helpers/urlHelper';
import { createJwtFromToken } from '../../helpers/tokenHelper';

import { current_user_storage } from '../../helpers/sessionHelper';
import { fetch_courseById } from '../course/courseAction'

const defaultUrl = apiUrl[ process.env.NODE_ENV ];


export function fetch_tags(dispatch, update_tags) {

    fetch(defaultUrl + `/tag`,
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
            dispatch(update_tags(json));
        });
}

export function edit_tag(course_id,data, dispatch, update_course_detail) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + `/course/tag/${course_id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            },
            path: course_id,
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
                fetch_courseById(course_id, dispatch, update_course_detail)
            });
}