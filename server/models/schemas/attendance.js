import mongoose, { Schema } from "mongoose";

const attendanceSchema = mongoose.Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    date: {
        type: () => Date.now(),
        require: true
    },
    isPresent: {
        type: Boolean,
        require: true
    }
})

export const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
