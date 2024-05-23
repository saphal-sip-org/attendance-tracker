import express from "express";
import User from "../../models/schemas/user.js"
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import UserPermission from "../../models/schemas/userPermission.js";
import PermissionModel from "../../models/schemas/permissionModel.js";

const router = express.Router();

// user for register
router.post("/", async(req, res) => {
    try {
        // check for error validation
        const errors = validationResult(req);

        //if error then throw message
        if(!errors.isEmpty()) {
            return res.status(400).send({
                success : false,
                message : "Errors",
                errors : errors.array()
            })
        };

        // receive  username and password from user
        const { userName, password, name, contact } = req.body;

        // Check if userName is provided
        if (!userName) {
            return res.status(400).send({
                success: false,
                err_code: "USER_NAME_REQUIRED",
                message: "User name is required",
            });
        }
        
        //check  if the user already exist  
        const existingUser = await User.findOne({userName: userName});

        //if taecher is already exist send message
        if(existingUser){
            res.status(400).send({
                success: false,
                err_code:"USER_ALREADY_EXIST",
                message:"User already exist",
            });
            return;
        }
        try {
            //user password bcrypt 
            const salt = await bcrypt.genSalt(10);
            const hasedPassword = await bcrypt.hash(password, salt);

            //register & create new user 
            const newUser = new User({
                name,
                userName,
                password: hasedPassword,
                contact
            });

            //save new user in database
            const savedUser = await newUser.save();


            //assign default permissions
            const defaultPermissions = await PermissionModel.find({
                is_default : 1
            });

            //assign all the default permission to the user
            if(defaultPermissions.length > 0) {
                const permissionArray = [];
                defaultPermissions.forEach(permission => {
                    permissionArray.push({
                        permission_name : permission.permission_name,
                        permission_value : [0,1,2,3]
                    })
                })
                //add the permission to the user
                console.log(permissionArray)
                const userPermission =  new UserPermission({
                    user_id : savedUser._id,
                    permission : permissionArray
                })
                console.log(userPermission)
                await userPermission.save();
            }

            //send users data
            res.status(200).send({
                success: true,
                data: savedUser,
                message : "User registered successfully"
            });
            
            //message for server-side
            console.log("User registered successfully");
        } catch (error) {
        console.error("Error occurs:", error);
    }
    } catch (error) {
        console.log("Errors occurs: ", error);
        return res.status(400).send({
            success : false,
            message : error.message
        });
    }

});

export {router};
export default router;