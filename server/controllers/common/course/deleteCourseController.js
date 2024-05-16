import express from "express";
import { validationResult } from "express-validator";
import Course from "../../../models/schemas/course.js";

//connect to the route
const router = express.Router();

router.delete("/", async (req, res) =>{
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

        //receive course id from request user body
        const { id } = req.body;

        //check if course id exists
        const courseId_isExists = await Course.findOne({ _id : id });

        //if not exists throws some error message 
        if(!courseId_isExists){
            return res.status(404).send({
                success : false,
                err_code : "Course_ID_NOT_EXISTS",
                message : "Course ID Not Exists !!!"
            })
        };
       
        await Course.findByIdAndDelete({ _id : id });

        res.status(201).send({
            success : true,
            message : "Course Deleted Successfully !",
        })
        
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