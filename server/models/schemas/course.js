import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    course_className : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    courseType :  {
        type : String,
        required : true
    },
    courseDuration :  {
        type : String,
        required : true
    },
    teacher : { 
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Teacher' 
    },
    students : [{ 
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Student' 
    }]
});

export const Course = mongoose.model("Course", courseSchema);
export default Course;