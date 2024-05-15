import mongoose, { Schema } from "mongoose";

const studentSchema = mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    assignTeacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    },
    contact: {
        type: Number
    }
})

export const Student = mongoose.model("Student", studentSchema);
export default Student;