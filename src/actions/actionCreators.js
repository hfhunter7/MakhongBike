import {
    login_user, login_user_from_auth_token, logout_user, update_profile_trainer, add_bank,
    delete_bank_account, update_account
} from "./users/userAction";
import {
    create_course, fetch_courseById, fetch_courses, edit_course_by_id,
    publish_course,delete_course
} from "./course/courseAction";

//////////////////////////// User Action ////////////////////////////
import {
    UPDATE_USER,
    UPDATE_COURSES,
    UPDATE_COURSE_DETAIL,
    UPDATE_TAGS,
    FETCH_EXAMS,
    FETCH_EXAM_DETAIL
} from "./types";
import {
    create_exam_data, delete_exam, edit_quiz_name_by_exam, fetch_examById,
    fetch_exams_data
} from "./exams/examAction";
import { edit_tag, fetch_tags } from "./tags/tagAction";


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

export function loginUserFromAuthToken( token ) {
    return function ( dispatch ) {
        login_user_from_auth_token(token, dispatch, update_user);
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

export function addBank( data ) {
    return function ( dispatch ) {
        add_bank(data, dispatch, update_user);
    }
}

//////////// Course Action //////////////////////////////
export function update_courses( courses ) {
    return {
        type: UPDATE_COURSES,
        courses
    }
}

export function update_course_detail( course_detail ) {
    return {
        type: UPDATE_COURSE_DETAIL,
        course_detail
    }
}

export function fetch_course() {
    return function ( dispatch ) {
        fetch_courses(dispatch, update_courses)
    }
}

export function createCourse( data ) {
    return function ( dispatch ) {
        create_course(data, dispatch, update_courses)
    }
}

export function getCourseById( id ) {
    return function ( dispatch ) {
        fetch_courseById(id, dispatch, update_course_detail);
    }
}

export function editCourseById( id, data ) {
    return function ( dispatch ) {
        edit_course_by_id(id, data, dispatch, update_course_detail);
    }
}

export function editQuizNameByExamId( id, data ) {
    return function ( dispatch ) {
        edit_quiz_name_by_exam(id, data, dispatch, update_exam_detail)
    }
}

export function publishCourse( course_id, status ) {
    return function ( dispatch ) {
        publish_course(course_id, status, dispatch, update_course_detail);
    }
}

export function deleteCourse( course_id, status ) {
    return function ( dispatch ) {
        delete_course(course_id, status, dispatch, update_courses);
    }
}

//////////////// TAG Action /////////////////////

export function update_tags( tags ) {
    return {
        type: UPDATE_TAGS,
        tags
    }
}

export function getTags() {
    return function ( dispatch ) {
        fetch_tags(dispatch, update_tags);
    }
}

export function editTag( course_id, data ) {
    return function ( dispatch ) {
        edit_tag(course_id, data, dispatch, update_course_detail)
    }
}

///////////////////////// Exam Action //////////////////////////////
export function update_exams( exams ) {
    return {
        type: FETCH_EXAMS,
        exams
    }
}

export function create_exam( exam_data ) {
    return function ( dispatch ) {
        create_exam_data(exam_data, dispatch, update_exams);
    }
}

export function fetch_exams() {
    return function ( dispatch ) {
        fetch_exams_data(dispatch, update_exams)
    }
}

export function update_exam_detail( exam_detail ) {
    return {
        type: FETCH_EXAM_DETAIL,
        exam_detail
    }
}

export function fetchExamById( id ) {
    return function ( dispatch ) {
        fetch_examById(id, dispatch, update_exam_detail);
    }
}

export function deleteExam( id ) {
    return function ( dispatch ) {
        delete_exam(dispatch, id, update_exams);
    }
}

export function deleteBankAccount( id ) {
    return function ( dispatch ) {
        delete_bank_account(dispatch, id, update_user);
    }
}
export function updateAccount( id, data ) {
    return function ( dispatch ) {
        update_account(id, data, dispatch, update_user);
    }
}

