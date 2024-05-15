import express from "express";
import { validationResult } from "express-validator";
import PermissionModel from "../../models/schemas/permissionModel.js";

const router = express.Router();

router.put("/", async (req, res) => {
    try {

        // check for error validation
        const errors = validationResult(req);

        //if error then throw message
        if(!errors.isEmpty()) {
            return res.status(400).send({
                success : false,
                message : "Errors",
                errors : errors.array()
            })
        }; 
        
        //receive id from body
        const { id, permission_name } = req.body;

        //check whether the id exists
        const idIsExists = await PermissionModel.findOne({ _id : id});

        //if id not exists then throw some error message
        if (!idIsExists) {
            return res.status(403).send({
                success : false,
                err_code : "PERMISSION_ID_NOT_EXISTs",
                message : "Permission ID not exists !!!"
            });
        };

        //check whether if permission_name is assigned to other except this permission_name
        const isNameAssigned = await PermissionModel.findOne({
            _id : { $ne : id },
            permission_name : {
                $regex : permission_name,
                $options : "i"
            }  //check if same name with camelcase exists 
        });

        //if then throw some error message
        if (isNameAssigned) {
           return res.status(400).send({
                success : false,
                err_code : "PERMISSION_NAME_ALREADY_ASSIGNED_TO_ANOTHER",
                message : "Permission name already assigned to another !!!"
            });
        };

        //update permission obj
        const updatePermission = {
            permission_name : permission_name
        };

        //set provided default in is_default
        if (req.body.default !== null) {
            updatePermission.is_default = req.body.default;
        };
        
        //update permission
        const updatedPermission = await PermissionModel.findByIdAndUpdate({_id : id} , { $set : updatePermission}, { new : true });

        //respone message
        res.status(200).send({
            success : true,
            message : "Updated permission successfully !",
            data : updatedPermission
        });
        
    } catch (error) {
        res.status(400).send({
            success : false,
            message : ["Permission ID not found or mistake!!!", error]
        });
    }
});

export {router};
export default router;