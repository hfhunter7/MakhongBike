import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from "./user";
import courses from "./courses";
import course_detail from "./course_detail";
import tags from "./tags";
import exams from "./exams";
import exam_detail from "./exam_detail";

const rootReducer = combineReducers({
    user,
    courses,
    course_detail,
    tags,
    exams,
    exam_detail,
    routing: routerReducer
});

export default rootReducer;