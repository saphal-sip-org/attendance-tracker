import express from "express";
import { validationResult } from "express-validator";
import Role from "../../models/schemas/roleModel.js";

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

        //static role........admin can't access

        //receive role data from req
        const { role_name, value } = req.body;

        //create new role 
        const role = new Role({
            role_name,
            value
        });

        //save the role date 
        await role.save();

        //send success message 
        res.status(200).send({
            success : true,
            message : "Role created successfully !",
            data : role
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