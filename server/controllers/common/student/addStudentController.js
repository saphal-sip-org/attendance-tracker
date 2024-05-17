import express from "express";
import { validationResult } from "express-validator";
import Student from "../../../models/schemas/student.js"


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
        const { userName, name, address, contact } = req.body;

        console.log(userName)
        console.log(name)
        console.log(contact)
        console.log(address)


        // Check if userName is provided
        if (!userName || !name || !contact || !address) {
            return res.status(404).send({
                err_code: "STUDENT_INPUTS_REQUIRED",
                message: "Student inputs are required !!!",
            });
        }

        //const is already exists
        const Student_isAlreadyExists = await Student.findOne({
            userName : {
                $regex : userName,
                $options : "i" //check if there is same name with camelcase & lowercase
            }
        });

        //if exists throw some error message
        if (Student_isAlreadyExists) {
            return res.status(405).send({
                success : false,
                err_code : "STUDENT_ALREADY_EXISTS",
                message : "Student already exists !!!"
            })
        };

        const newStudent = new Student({
            name,
            userName,
            contact,
            address
        });

        const savedStudent = await newStudent.save();

        res.status(201).send({
            success : true,
            message : "Student created successfully !",
            data : savedStudent
        })
        
    } catch (error) {
        return res.status(400).send({
            success : false,
            message : error.message
        });
    }
})

export {router};
export default router;