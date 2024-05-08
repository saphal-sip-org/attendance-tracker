import mongoose, { Schema } from "mongoose";

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    assignTeacher: {
        type: Schema.Types.ObjectId,
        ref: "Teacher"
    },
    contact: {
        type: Number
    }
})

export const Student = mongoose.model("Student", studentSchema);
export default Student;