import express from "express";
import Role from "../../models/schemas/roleModel.js";

//connect to the route
const router = express.Router();

router.post("/", async (req, res) =>{
    try {

        //role accept admin 
        const get_role = await Role.find({
            value : {
                $ne : 1 //find except admin (value-1 is for admin)
            }
        });
        //send success response
        res.status(200).send({
            success : true,
            message : "Role fetch successfully !",
            data : get_role
        })

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