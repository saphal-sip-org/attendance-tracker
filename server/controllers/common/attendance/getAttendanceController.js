import express from "express";
import Attendance from "../../../models/schemas/attendance.js";


const router = express.Router();

//create/add new student to the list
router.get("/", async (req, res) => {
    try {
       //receive all attendance lists
       const attendance = await Attendance.find({});

        res.status(201).send({
            success : true,
            message : "Course Fetch Successfully !",
            data : attendance
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