import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role : {
        type : Number,
        default : 0  //0-noraml(student) teacher-1 adim-2
    }
})

export const User = mongoose.model("User", userSchema);
export default User;