import express from "express";
import Course from "../../../models/schemas/course.js";

//connect to the route
const router = express.Router();

router.get("/", async (req, res) =>{
    try {

        //receive all course lists
       const course_classes = await Course.find({});

        res.status(201).send({
            success : true,
            message : "Course Fetch Successfully !",
            data : course_classes
        });
        console.log(course_classes)
    } catch (error) {

        console.log("Errors occurs: ", error);
        return res.status(400).send({
            success : false,
            message : error.message
        });
    }
});

//exporting router
export {router};
export default router;