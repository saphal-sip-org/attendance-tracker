import mongoose, { Schema } from "mongoose";

const teacherSchema = mongoose.Schema({
    name: {
        type: String
    },
    contact: {
        type: Number
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    coursesTaught: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    }
})

export const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;