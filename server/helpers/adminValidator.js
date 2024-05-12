import { check } from "express-validator";

export const addPermissionValidator = [

    //check username, password ... validation for register
    check("permission_name").not().isEmpty().withMessage("User Role is required"),

] ;
export default addPermissionValidator;