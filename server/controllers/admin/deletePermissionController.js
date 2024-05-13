import express from "express";
import { validationResult } from "express-validator";
import PermissionModel from "../../models/schemas/permissionModel.js";

const router = express.Router();

router.delete("/", async (req, res) => {
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
        const { id } = req.body;

        //check where the id exists. if then delete it
        await PermissionModel.findByIdAndDelete({ _id : id });

        //respone message
        res.status(200).send({
            success : true,
            message : "Deleted permission successfully !"
        });
        
    } catch (error) {
        res.status(400).send({
            success : false,
            message : error.message
        });
    }

});

export { router };
export default router;