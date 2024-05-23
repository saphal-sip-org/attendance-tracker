import express from "express";
import Teacher from "../../../models/schemas/teacher.js";

const router = express.Router();

//create/add new Teacher to the list
router.get("/", async (req, res) => {
    try {

        //receive all Teacher lists
       const teacherDetails = await Teacher.find({});

       

        res.status(201).send({
            success : true,
            message : "Teachers_Detail Fetch Successfully !",
            data : teacherDetails
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