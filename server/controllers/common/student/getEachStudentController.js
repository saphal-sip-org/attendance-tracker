import express from "express";
import { validationResult } from "express-validator";


const router = express.Router();

//create/add new student to the list
router.post("/:id", async (req, res) => {
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
                err_code : "STUDENT_ID_IS_REQUIRED",
                message : "Student_ID is Required !!!"
            })
        }

        //check if id exists
       const studentDetails = await Student.findOne({ _id : id });

       //if id dont exists send some error message
       if (!studentDetails) {
        return res.status(401).send({
            success : false,
            err_code : "STUDENT_NOT_EXISTS",
            message : "Student not exists !!!"
        })
       }

        res.status(201).send({
            success : true,
            message : "Students_Detail Fetch Successfully !",
            data : studentDetails
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