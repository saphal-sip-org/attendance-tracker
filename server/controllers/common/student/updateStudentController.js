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
        const {id, userName, name, contact, address } = req.body;

        //check if student exists
        const Student_isExists = await Student.findOne({ _id : id });

        //if not exist throw some message
        if (!Student_isExists) {
            return res.status(404).send({
                success : false,
                err_code : "STUDENT_NOT_EXISTS",
                message : "Student not exists !!!"
            });
        }

         //check if course className already exists
         const anotherStudent_isExists = await Student.findOne({
            _id : { $ne : id },
            userName : {
                $regex : userName,
                $options : "i" //check if there is same name with camelcase & lowercase
            }
        });

        //if exists throw some error message
        if (anotherStudent_isExists) {
            return res.status(403).send({
                success : false,
                err_code : "STUDENT_EMAIL_ALREADY_ASSIGNED",
                message : "Student_Email assigned another !!!"
            })
        }

        //update student value
        const updatedStudent = await Student.findByIdAndUpdate({ id : _id },{
            $set : {
                userName,
                name,
                contact,
                address
            }
        },{ new : true });

        //response success message
        res.status(200).send({
            success : true,
            message : "Student_Details updated successfully !!!",
            data : updatedStudent
        })
        
    } catch (error) {
        console.error("errors occurs", error);
    }
})

export {router};
export default router;