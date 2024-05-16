import express from "express";
import { validationResult } from "express-validator";
import Course from "../../../models/schemas/course.js";


//connect to the route
const router = express.Router();

router.put("/", async (req, res) =>{
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
        const { id,
            course_className,
            title,
            courseType,
            courseDuration, } = req.body;

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
        
        //check if course className already exists
        const course_class_isExists = await Course.findOne({
            _id : { $ne : id },
            course_className : {
                $regex : course_className,
                $options : "i" //check if there is same name with camelcase & lowercase
            }
        });

        //if exists throw some error message
        if (course_class_isExists) {
            return res.status(404).send({
                success : false,
                err_code : "COURSE_CLASSNAME_ALREADY_ASSIGNED",
                message : "Course ClassName assigned another !!!"
            })
        }
        
        //updated data
        const updateData = await Course.findByIdAndUpdate({ _id : id },{ 
            $set : {
                course_className,
                title,
                courseType,
                courseDuration
            }
         },{ new : true });
       
        res.status(201).send({
            success : true,
            message : "Course Updated Successfully !",
            data : updateData
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