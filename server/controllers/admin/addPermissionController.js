import express from "express";
import { validationResult } from "express-validator";
import PermissionModel from "../../models/schemas/permissionModel.js";

//connect to the route
const router = express.Router();

router.post("/", async (req, res) =>{
    try {

        // check for error validation
        const errors = validationResult(req);

        //if error then throw message
        if(!errors.isEmpty()) {
            return res.status(200).send({
                success : false,
                message : "Errors",
                errors : errors.array()
            })
        };

        //access permission_name
        const { permission_name } = req.body;

        //check if permission_name exists
        const permissionIsExists = await PermissionModel.findOne({
            permission_name : {
                $regex : permission_name,
                $options : "i"
            } //check if same name with camelcase exists 
        });

        //if exists throw error message
        if(permissionIsExists){
            return res.status(400).send({
                success : false,
                err_code : "PERMISSION_NAME_ALREADY_EXISTS",
                message : "Permission name already exists !!!"
            })
        };

        const obj = { permission_name };

        //check if default is assign
        if(req.body.default){
            obj.is_default = parseInt(req.body.default);
        };

        //assign the is_default value
        const permission = new PermissionModel( obj );

        //created & saved new permission to user
        const newPermission = await permission.save();

        //sending the response
        res.status(200).send({
            success : true,
            message : "Permission added successfully !",
            data : newPermission
        });

    } catch (error) {

        console.log("Errors occurs: ", error);
        return res.status(400).send({
            success : false,
            message : error.message
        });
    }
});

//exporting router
export {router};
export default router;