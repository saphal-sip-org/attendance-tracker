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
    check("id").not().isEmpty().withMessage("ID is required")

] ;

export const updateCourseValidator = [

    //check id ... validation for update
    check("id").not().isEmpty().withMessage("ID is required"),
    check("course_className").not().isEmpty().withMessage("Course_className is required")

] ;


//attendance Validation

export const addAttendanceValidator = [

    //check date and attendance ... to add new attendance
    check("date").not().isEmpty().withMessage("Date is required"),
    check("date").not().isDate().withMessage("Invalid date format"),
    check("isPresent").not().isEmpty().withMessage("Absent || Present is required"),
    check("isPresent").isBoolean().withMessage("Absent || Present should be Boolean")

] ;

export const setHolidayValidator = [

    //check date ... validation for delete
    check("course").notEmpty().withMessage("Course ID is required"),
    check("date").not().isDate().withMessage("Invalid date format")

] ;

export const updateAttendanceValidator = [

    //check id ... validation for update
    check("date").not().isEmpty().withMessage("Date is required"),
    check("date").not().isDate().withMessage("Invalid date format"),
    check("isPresent").not().isEmpty().withMessage("Absent || Present is required"),
    check("isPresent").not().isBoolean().withMessage("Absent || Present should be Boolean")

] ;


//validator for student

//student add validator
export const addStudentValidator = [

    //check if username is empty
    check("userName").not().isEmpty().withMessage("Student_UserName is required"),

    //check if username is type email
    check("userName").isEmail().withMessage("Please Enter Valid_Email").normalizeEmail({gmail_remove_dots: true}),

    //check if name is empty
    check("name").not().isEmpty().withMessage("Student_Name is required"),

    //check if address is empty
    check("address").not().isEmpty().withMessage("Student_Address is required"),

    //check if username is empty
    check("contact").not().isEmpty().withMessage("Contact_Number is required"),

    // Allow optional spaces, dashes, or parentheses around the country code and the rest of the phone number
    check('contact').matches(/^\+\d{1,3}(?:[- \.]?\d{3,4})+$/) .withMessage('Invalid phone number format. Please enter a valid international phone number.')

];

export const updateStudentValidator = [
     //check if username is empty
    check("userName").not().isEmpty().withMessage("Student_UserName is required"),

    //check if username is type email
    check("userName").isEmail().withMessage("Please Enter Valid_Email").normalizeEmail({gmail_remove_dots: true}),

    //check if name is empty
    check("name").not().isEmpty().withMessage("Student_Name is required"),

    //check if address is empty
    check("address").not().isEmpty().withMessage("Student_Address is required"),

    //check if username is empty
    check("contact").not().isEmpty().withMessage("Contact_Number is required"),

    // Allow optional spaces, dashes, or parentheses around the country code and the rest of the phone number
    check('contact').matches(/^\+\d{1,3}(?:[- \.]?\d{3,4})+$/) .withMessage('Invalid phone number format. Please enter a valid international phone number.')

];
export const deleteStudentValidator = [

    //check id ... validation for delete
    check("id").not().isEmpty().withMessage("ID is required")
];
export const getEachStudentValidator = [

    //check id ... validation 
    check("id").not().isEmpty().withMessage("ID is required")
];


//student add validator
export const addTeacherValidator = [

    //check if username is empty
    check("userName").not().isEmpty().withMessage("Teacher_UserName is required"),

    //check if username is type email
    check("userName").isEmail().withMessage("Please Enter Valid_Email").normalizeEmail({gmail_remove_dots: true}),

    //check if name is empty
    check("name").not().isEmpty().withMessage("Teacher_Name is required"),

    //check if address is empty
    check("address").not().isEmpty().withMessage("Teacher_Address is required"),

    //check if username is empty
    check("contact").not().isEmpty().withMessage("Contact_Number is required"),

    // Allow optional spaces, dashes, or parentheses around the country code and the rest of the phone number
    check('contact').matches(/^\+\d{1,3}(?:[- \.]?\d{3,4})+$/) .withMessage('Invalid phone number format. Please enter a valid international phone number.')

];

export const updateTeacherValidator = [
     //check if username is empty
    check("userName").not().isEmpty().withMessage("Teacher_UserName is required"),

    //check if username is type email
    check("userName").isEmail().withMessage("Please Enter Valid_Email").normalizeEmail({gmail_remove_dots: true}),

    //check if name is empty
    check("name").not().isEmpty().withMessage("Teacher_Name is required"),

    //check if address is empty
    check("address").not().isEmpty().withMessage("Teacher_Address is required"),

    //check if username is empty
    check("contact").not().isEmpty().withMessage("Contact_Number is required"),

    // Allow optional spaces, dashes, or parentheses around the country code and the rest of the phone number
    check('contact').matches(/^\+\d{1,3}(?:[- \.]?\d{3,4})+$/) .withMessage('Invalid phone number format. Please enter a valid international phone number.')

];
export const deleteTeacherValidator = [

    //check id ... validation for delete
    check("id").not().isEmpty().withMessage("ID is required")
];
export const getEachTeacherValidator = [

    //check id ... validation 
    check("id").not().isEmpty().withMessage("ID is required")
];




export default { addCourseValidator, deleteCourseValidator, updateCourseValidator, addAttendanceValidator, setHolidayValidator, updateAttendanceValidator, addStudentValidator, updateStudentValidator, deleteStudentValidator, getEachStudentValidator, addTeacherValidator, updateTeacherValidator, deleteTeacherValidator,getEachTeacherValidator };

