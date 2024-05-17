import express from "express";
import Student from "../../../models/schemas/student.js";

const router = express.Router();

//create/add new student to the list
router.get("/", async (req, res) => {
    try {

        //receive all student lists
       const studentDetails = await Student.find({});

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