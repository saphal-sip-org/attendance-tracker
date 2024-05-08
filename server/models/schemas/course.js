import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title: {
        type: String
    },
    shortName:  {
        type: String
    },
    courseDuration:  {
        type: TimeRanges
    },
    teacher: { 
        type: Schema.Types.ObjectId,
        ref: 'Teacher' },
    students: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Student' 
    }]
});

export const Course = mongoose.model("Course", courseSchema);
export default Course;