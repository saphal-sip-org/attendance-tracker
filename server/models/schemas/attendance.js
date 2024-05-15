import mongoose, { Schema } from "mongoose";

const attendanceSchema = mongoose.Schema({
    student: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Student"
    },
    course : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    teacher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Teacher"
    },
    date: {
        type : () => Date.now(),
        required : true
    },
    isPresent: {
        type : Boolean,
        required : true
    }
})

export const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
