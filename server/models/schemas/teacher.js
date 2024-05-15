import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    contact: {
        type: Number
    },
    coursesTaught: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
})

export const User = mongoose.model("User", userSchema);
export default User;