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
        required: true
    },
    isPresent: {
        type: Boolean,
        required: true
    }
})

export const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
