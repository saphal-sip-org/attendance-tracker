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


//attendance Validation

export const addAttendanceValidator = [

    //check username, password ... validation for register
    check("date").not().isEmpty().withMessage("Date is required"),
    check("date").not().isDate().withMessage("Date should be in Date Form"),
    check("isPresent").not().isEmpty().withMessage("Absent || Present is required"),
    check("isPresent").not().isBoolean().withMessage("Absent || Present should be Boolean")

] ;

export const deleteAttendanceValidator = [

    //check date ... validation for delete
    check("date").not().isEmpty().withMessage("Date is required"),

] ;

export const updateAttendanceValidator = [

    //check id ... validation for update
    check("date").not().isEmpty().withMessage("Date is required"),
    check("date").not().isDate().withMessage("Date should be in Date Form"),
    check("isPresent").not().isEmpty().withMessage("Absent || Present is required"),
    check("isPresent").not().isBoolean().withMessage("Absent || Present should be Boolean")

] ;


export default { addCourseValidator, deleteCourseValidator, updateCourseValidator, addAttendanceValidator, deleteAttendanceValidator, updateAttendanceValidator };

