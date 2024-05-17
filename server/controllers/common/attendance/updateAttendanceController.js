import express from "express";
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
        const { id, student, date, isPresent } = req.body;

         //check if student attendance already exists
         const isAttendanceExists = await Attendance.findOne({ _id : id });

        if(!isAttendanceExists){
            return res.status(403).send({
                success : false,
                err_code : "ATTENDANCE_NOT_EXISTS",
                message : "Attendance Not Exists !!!"
            })
        }

        //check if student attendance already exists
        const isAlreadyExists = await Attendance.findOne({ 
            student : student._id,
            date : date
        });

        if(!isAlreadyExists){
            return res.status(403).send({
                success : false,
                err_code : "STUDENT_ATTENDANCE_NOT_EXISTS",
                message : "Student_Attendance is Not_Exists !!!"
            })
        }

        //check if course className already exists
        const anotherID_isExists = await Attendance.findOne({
            student : { $ne : student._id },
            date : { $ne : date }
        });

        //if exists throw some error message
        if (anotherID_isExists) {
            return res.status(404).send({
                success : false,
                err_code : "STUDENT_IN_THIS_DATE_ANOTHER_EXISTS",
                message : "Student in this date another exists !!!"
            })
        }

        //updated data
        const updateAttendance = await Attendance.findByIdAndUpdate({ _id : id },{ 
            $set : {
                student : student._id,
                date, 
                isPresent
            }
            },{ new : true });

        res.status(200).send({
            success : true,
            message : "Attendance Updated Successfully !",
            data : updateAttendance
        });
        
    } catch (error) {
        return res.status(400).send({
            success : false,
            message : error.message
        });
    }
})

export {router};
export default router;