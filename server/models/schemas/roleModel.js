import mongoose from "mongoose";

const roleSchema = mongoose.Schema({
    role_name : {
        type : String,
        required : true
    },
    value : {
        type : Number,
        required : true
    }
});

export const Role = mongoose.model("Role", roleSchema);
export default Role;