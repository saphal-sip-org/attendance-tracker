import express from "express";
import { validationResult } from "express-validator";
import Course from "../../../models/schemas/course.js";


//connect to the route
const router = express.Router();

router.post("/", async (req, res) =>{
    try {

        // check for error validation
        const errors = validationResult(req);

        //if error then throw message
        if(!errors.isEmpty()) {
            return res.status(200).send({
                success : false,
                message : "Errors",
                errors : errors.array()
            })
        };

        //receive course detail from user request
        const { course_className, title, courseType, courseDuration } = req.body;

        //check if course_className already exists
        const course_class_isExists = await Course.findOne({
            course_className : {
                $regex : course_className,
                $options : "i" //check if there is same name with camelcase & lowercase
            }
        });

        //if exists throw some error message
        if (course_class_isExists) {
            return res.status(404).send({
                success : false,
                err_code : "COURSE_CLASSNAME_ALREADY_EXISTS",
                message : "Course ClassName Already Exists !!!"
            })
        }
        //if not exists then now save new course in lists
        const newCourse_class = new Course({
            course_className,
            title,
            courseType,
            courseDuration,
        })

        //saved the enter data in database
        const savedNewCourseClass = await newCourse_class.save();

        res.status(201).send({
            success : true,
            message : "New Course Class Created Successfully !",
            data : savedNewCourseClass
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