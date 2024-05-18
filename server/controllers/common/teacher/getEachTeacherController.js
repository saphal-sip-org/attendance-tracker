import express from "express";
import { validationResult } from "express-validator";
import Teacher from "../../../models/schemas/teacher.js";


const router = express.Router();

//create/add new Teacher to the list
router.get("/:id", async (req, res) => {
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

        //id from user request
        const { id } = req.body;

        //check if id is empty
        if (!id) {
            return res.status(400).send({
                success : false,
                err_code : "TEACHER_ID_IS_REQUIRED",
                message : "Teacher_ID is Required !!!"
            })
        }

        //check if id exists
       const teacherDetails = await Teacher.findOne({ _id : id });

       //if id dont exists send some error message
       if (!teacherDetails) {
        return res.status(401).send({
            success : false,
            err_code : "TEACHER_NOT_EXISTS",
            message : "Teacher not exists !!!"
        })
       }

        res.status(201).send({
            success : true,
            message : "Teachers_Detail Fetch Successfully !",
            data : teacherDetails
        });
        
    } catch (error) {

        console.log("Errors occurs: ", error);
        return res.status(400).send({
            success : false,
            message : error.message
        });
    }
})

export {router};
export default router;