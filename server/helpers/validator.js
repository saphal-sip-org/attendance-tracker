import { check } from "express-validator";

export const registerValidate = [
    //check name is not type number  // This regex matches any string that contains only letters (a-z, A-Z) and spaces
    check("name").matches(/^[a-zA-Z\s]*$/).withMessage("Name should be only characters"),

    //check username, password ... validation for register
    check("userName").not().isEmpty().withMessage("UserName is required"),
    //also can be use:- check("userName", "UserName is required")

    //check whether username is type email
    check("userName").isEmail().withMessage("Please enter valid email").normalizeEmail({gmail_remove_dots: true}),

    //check whether password is empty
    check("password").not().isEmpty().withMessage("Password is required"),

    // check whether password lenght is min 8 in length
    check("password").isLength({min : 8}).withMessage("Password must be at least 8 characters long"),

     // This regex checks for any character that is not a letter or a number
    check("password").matches(/[^a-zA-Z0-9]/).withMessage("Password must contain at least one special character"),

    // This regex checks for any digit
    check("password").matches(/\d/).withMessage("Password must contain at least one number")

] ;
export default registerValidate;