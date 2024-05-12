import mongoose from "mongoose";

const userPermissionSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    permission : [{
        permission_name : String,
        permission_value : [ Number ] //can use both number or string ( we use 0-create, 1-read, 2-edit, 3-delete)
    }]
})

export const UserPermission = mongoose.model("UserPermission", userPermissionSchema);
export default UserPermission;
