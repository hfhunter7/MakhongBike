import { apiUrl } from '../../helpers/urlHelper';
import { createJwtFromToken } from '../../helpers/tokenHelper';

import { current_user_storage } from '../../helpers/sessionHelper';

const defaultUrl = apiUrl[ process.env.NODE_ENV ];

export function fetch_courses( dispatch, update_courses) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + `/course`,
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
            dispatch(update_courses(json));
        });
}

export function create_course(data, dispatch, update_courses) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + '/course',
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
                fetch_courses(dispatch,update_courses)
            });
}

export function fetch_courseById( id, dispatch, update_course_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;
    fetch(defaultUrl + `/course/id/${id}`,
        {
            headers: { 'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token) }
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                //throw new Error("Bad response from server");
            }
            return response.json()
        }).then(
        function ( json ) {
            dispatch(update_course_detail(json))
        });
}

export function edit_course_by_id(id, data, dispatch, update_course_detail) {
	const user_storage = current_user_storage();
	const auth_token = user_storage.auth_token;

	fetch(defaultUrl + `/course/${id}`,
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
	.then(function (json) {
		fetch_courseById(id, dispatch, update_course_detail)
    });
}



export function publish_course( course_id, status, dispatch, update_course_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;
    fetch(defaultUrl + `/course/is_publish/${course_id}`,
        {
            headers: { 'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token) },
            path: course_id,
            method: 'PUT',
            body: JSON.stringify(status),
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                //throw new Error("Bad response from server");
            }
            return response.json()
        }).then(
        function ( json ) {
            fetch_courseById( course_id, dispatch, update_course_detail )
        });
}
export function delete_course( course_id, status ,dispatch, update_courses ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;
    fetch(defaultUrl + `/course/is_delete/${course_id}`,
        {
            headers: { 'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token) },
            path: course_id,
            method: 'PUT',
            body: JSON.stringify(status),
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                //throw new Error("Bad response from server");
            }
            return response.json()
        }).then(
        function ( json ) {
	        fetch_courses( dispatch, update_courses )
        });
}