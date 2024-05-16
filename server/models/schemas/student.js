import mongoose, { Schema } from "mongoose";

const studentSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    contactNumber : {
        type : String,
        required : true
    },
    parentName : {
        type : String
    },
    course : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    },
    assignTeacher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Teacher"
    }
})

export const Student = mongoose.model("Student", studentSchema);
export default Student;