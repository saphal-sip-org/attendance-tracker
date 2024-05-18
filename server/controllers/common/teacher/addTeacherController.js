import express from "express";
import { validationResult } from "express-validator";
import Teacher from "../../../models/schemas/teacher.js";



const router = express.Router();

//create/add new Teacher to the list
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

        //receive Teacher data from body where teacher request for new Teacher
        const { userName, name, address, contact } = req.body;

        // Check if userName is provided
        if (!userName || !name || !contact || !address) {
            return res.status(404).send({
                err_code: "TEACHER_INPUTS_REQUIRED",
                message: "Teacher inputs are required !!!",
            });
        }

        //const is already exists
        const teacher_isAlreadyExists = await Teacher.findOne({
            userName : {
                $regex : userName,
                $options : "i" //check if there is same name with camelcase & lowercase
            }
        });

        //if exists throw some error message
        if (teacher_isAlreadyExists) {
            return res.status(405).send({
                success : false,
                err_code : "TEACHER_ALREADY_EXISTS",
                message : "Teacher already exists !!!"
            })
        };

        const newTeacher = new Teacher({
            name,
            userName,
            contact,
            address
        });

        const savedTeacher = await newTeacher.save();

        res.status(201).send({
            success : true,
            message : "Teacher created successfully !",
            data : savedTeacher
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