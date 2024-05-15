import { check } from "express-validator";

export const addCourseValidator = [

    //check username, password ... validation for register
    check("course_className").not().isEmpty().withMessage("Class_Name is required"),
    check("title").not().isEmpty().withMessage("Course_title is required"),
    check("courseType").not().isEmpty().withMessage("Course_type is required"),
    check("courseDuration").not().isEmpty().withMessage("Course_duration is required"),
    check("courseDuration").matches(/^(?:\d+(?:\.\d+)?)\s*(?:day[s]?|week[s]?|month[s]?|year[s]?|d|w|m|y)$/i
    ).withMessage("Course_duration should be in day/week/month/year"),

] ;

export const deleteCourseValidator = [

    //check id ... validation for delete
    check("id").not().isEmpty().withMessage("ID is required"),

] ;

export const updateCourseValidator = [

    //check id ... validation for update
    check("id").not().isEmpty().withMessage("ID is required"),
    check("course_className").not().isEmpty().withMessage("Course_className is required")

] ;

export default { addCourseValidator, deleteCourseValidator, updateCourseValidator };

