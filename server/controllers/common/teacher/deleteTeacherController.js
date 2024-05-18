import express from "express";
import Teacher from "../../../models/schemas/teacher.js";
import { validationResult } from "express-validator";


const router = express.Router();

//create/add new Teacher to the list
router.delete("/", async (req, res) => {
    try {

        // check for error validation
        const errors = validationResult(req);

        //if error then throw message
        if(!errors.isEmpty()) {
            return res.status(401).send({
                success : false,
                message : "Errors",
                errors : errors.array()
            })
        };

        //receive Teacher data from body where teacher request for new Teacher
        const { id } = req.body;

        //check if the Teacher already exists
        const teacher_IsAlready_exists = await Teacher.findOne({_id : id});

        //if not exists throw some message
        if (!teacher_IsAlready_exists) {
            return res.status(404).send({
                success : false,
                err_code : "TEACHER_NOT_EXISTS",
                message : "Teacher not exists !!!"
            });
        }

        await Teacher.findByIdAndDelete({ _id : id });

        res.status(202).send({
            success : true,
            message : "Teacher_Deleted successfully !"
        })

        
    } catch (error) {
        console.error("errors occurs", error);
    }
})

export {router};
export default router;