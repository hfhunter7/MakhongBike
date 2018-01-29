import { apiUrl } from '../../helpers/urlHelper'
import { current_user_storage } from "../../helpers/sessionHelper";
import { createJwtFromToken } from "../../helpers/tokenHelper";

const defaultUrl = apiUrl[ process.env.NODE_ENV ];

export function create_exam_data( exams_data, dispatch , fetch_exams) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    return fetch(defaultUrl + '/exam/',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            },
            method: "POST",
            body: JSON.stringify(exams_data)
        }).then(
        function ( json ) {
            dispatch(fetch_exams(json));
            fetch_exams_data(dispatch, fetch_exams)
        })
}

export function fetch_exams_data( dispatch, fetch_exams) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    fetch(defaultUrl + `/exam`,
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
            dispatch(fetch_exams(json));
        });
}

export function fetch_examById( id, dispatch, update_exam_detail ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;
    fetch(defaultUrl + `/exam/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token) }
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                //throw new Error("Bad response from server");
            }
            return response.json()
        }).then(
        function ( json ) {
            dispatch(update_exam_detail(json))
        });
}

export function delete_exam( dispatch, examId, fetch_exams ) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    return fetch(defaultUrl + `/exam/${examId}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            },
            method: "DELETE"
        }).then(
        function ( res ) {
            fetch_exams_data(dispatch, fetch_exams)
        }
    )
}

export function edit_quiz_name_by_exam(id, data, dispatch, update_exam_detail) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;

    return fetch(defaultUrl + `/exam/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': createJwtFromToken('', auth_token)
            },
            path:id,
            method: "PUT",
            body: JSON.stringify(data)
        })
        .then(function ( response ) {
            if (response.status >= 400) {
            }
            return response.json()
        })
        .then(function () {
            fetch_examById( id, dispatch, update_exam_detail )
        });
}