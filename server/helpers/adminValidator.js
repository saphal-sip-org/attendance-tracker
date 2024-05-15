import { check } from "express-validator";

export const addPermissionValidator = [

    //check username, password ... validation for register
    check("permission_name").not().isEmpty().withMessage("User_Permission is required"),

] ;

export const deletePermissionValidator = [

    //check username, password ... validation for register
    check("id").not().isEmpty().withMessage("ID is required"),

] ;

export const updatePermissionValidator = [

    //check username, password ... validation for register
    check("id").not().isEmpty().withMessage("ID is required"),
    check("permission_name").not().isEmpty().withMessage("Permission_name is required"),

] ;



export default { addPermissionValidator, deletePermissionValidator, updatePermissionValidator };