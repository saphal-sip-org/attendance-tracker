import express from "express";
import { validationResult } from "express-validator";
import Attendance from "../../../models/schemas/attendance.js";

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
        const { student, date, isPresent } = req.body;

        //check if student attendance already exists
        const isAlreadyExists = await Attendance.findOne({ 
            student : student._id,
            date : date
        });

        if(isAlreadyExists){
            return res.status(403).send({
                success : false,
                err_code : "ATTENDANCE_FOR_STUDENT_ALREADY_EXISTS",
                message : "Attendance for student is already exists !!!"
            })
        }

        //created new student
        const newStudentAttendance = new Attendance({
            student : student._id,
            date,
            isPresent
        }) ;

        //save new created Attendance data
        const savedAttendance = await newStudentAttendance.save();

        //send success msg to the user
        res.status(201).send({
            success : true,
            message : "Student_Attendance added successfully !",
            data : savedAttendance
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