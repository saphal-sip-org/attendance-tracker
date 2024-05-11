import mongoose, { Schema } from "mongoose";

const permissionSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    permission : [{
        permission_name : String,
        permission_value : [ Number ] //can use both number or string ( we use 0-create, 1-read, 2-edit, 3-delete)
    }]
})

export const Permission = mongoose.model("Permission", permissionSchema);
export default Permission;
