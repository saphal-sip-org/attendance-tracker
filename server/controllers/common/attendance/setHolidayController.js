import express from "express";
import { validationResult } from "express-validator";
import Course from "../../../models/schemas/course.js";
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
        const { course, date } = req.body;

        // Validate the date format
        if (!isValidDate(date)) {
            return res.status(400).json({ 
                success : false,
                message : "Invalid date format" 
            });
        }

        // Find the course by ID
        const courseData = await Course.findById(course);
        if (!courseData) {
            return res.status(404).json({ 
                success : false,
                err_code : "COURSE_NOT_FOUND",
                message: "Course not found" 
            });
        }
        
         // Iterate over each student in the course and update their attendance
         for (let id of courseData.student) {
            await Attendance.updateMany(
                { student: id, date: date },
                { $set: { isPresent: false, holiday: true } }
            );
        }

        res.status(200).json({ 
            success : true,
            message: "Holiday marked for all students in the course" 
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