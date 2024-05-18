import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    userName: {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    contact: {
        type : String,
        required : true
    },
    coursesTaught: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }
})

export const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;