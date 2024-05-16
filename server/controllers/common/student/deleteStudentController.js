import express from "express";
import Student from "../../../models/schemas/student.js";
import { validationResult } from "express-validator";


const router = express.Router();

//create/add new student to the list
router.post("/", async (req, res) => {
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

        //receive student data from body where teacher request for new student
        const { id } = req.body;

        //check if the student already exists
        const Student_IsAlready_exists = await Student.findOne({_id : id});

        //if not exists throw some message
        if (!Student_IsAlready_exists) {
            return res.status(404).send({
                success : false,
                err_code : "STUDENT_NOT_EXISTS",
                message : "Student not exists !!!"
            });
        }

        await Student.findByIdAndDelete({ _id : id });

        res.status(202).send({
            success : true,
            message : "Student_Deleted successfully !"
        })

        
    } catch (error) {
        console.error("errors occurs", error);
    }
})

export {router};
export default router;