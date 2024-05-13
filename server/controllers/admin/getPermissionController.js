import express from "express";
import PermissionModel from "../../models/schemas/permissionModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {

        //all permission for admin
        const permission = await PermissionModel.find({});
        if(!permission){
            return res.status.send({
                success : false,
                err_code : "PROBLEM_FETCHING_PERMISSION",
                message : "Problem fetching permission !!!"
            });
        };
        return res.status(200).send({
            success : true,
            message : "Premission granted successfully !",
            data : permission
        });

        
    } catch (error) {
        return res.status(400).send({
            success : false,
            message : error.message
        });
    }
});

export {router};
export default router;