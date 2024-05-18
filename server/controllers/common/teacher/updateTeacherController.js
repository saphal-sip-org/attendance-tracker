import express from "express";
import Teacher from "../../../models/schemas/teacher.js";
import { validationResult } from "express-validator";

const router = express.Router();

//create/add new Teacher to the list
router.put("/", async (req, res) => {
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
        const {id, userName, name, contact, address } = req.body;

        //check if Teacher exists
        const Teacher_isExists = await Teacher.findOne({ _id : id });

        //if not exist throw some message
        if (!Teacher_isExists) {
            return res.status(404).send({
                success : false,
                err_code : "TEACHER_NOT_EXISTS",
                message : "Teacher not exists !!!"
            });
        }

         //check if course className already exists
         const anotherTeacher_isExists = await Teacher.findOne({
            _id : { $ne : id },
            userName : {
                $regex : userName,
                $options : "i" //check if there is same name with camelcase & lowercase
            }
        });

        //if exists throw some error message
        if (anotherTeacher_isExists) {
            return res.status(403).send({
                success : false,
                err_code : "TEACHER_EMAIL_ALREADY_ASSIGNED",
                message : "Teacher_Email assigned another !!!"
            })
        }

        //update Teacher value
        const updatedTeacher = await Teacher.findByIdAndUpdate(id,{
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
            message : "Teacher_Details updated successfully !!!",
            data : updatedTeacher
        })
        
    } catch (error) {
        console.error("errors occurs", error);
    }
})

export {router};
export default router;