
                    // //add permission to user if req exists
                    // if(req.body.permission != undefined && req.body.permission.length > 0){
                    //     const addPermission = req.body.permissions;
                    //     const permissionArray = [];
                    //     await Promise.all (
                    //         addPermission.map(
                    //         async(permission) => {
                    //             const permissionData = await PermissionModel.findOne({ _id : permission._id });
                    //             permissionArray.push({
                    //                 permission_name : permissionData.permission_name,
                    //                 permission_value : permission.value
                    //             })
                    //         }
                    //     ))
                    //     const user_permission = new UserPermission({
                    //         user_id : userData._id,
                    //         permissions : permissionArray
                    //     })
                    //     await user_permission.save();
                    // }
        


import { validationResult } from "express-validator";
import User from "../../../models/schemas/user";
import bcrypt from "bcrypt";
import randomstring from "randomstring";
import express from "express";
import sendMail from "../../../helpers/mailer";

const router = express.Router();

router.use("/", async (req, res) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).send({
                success : false,
                message : "Validation Error",
                errors : errors.array()
            })
        }

        //receive username and name from request
        const { name, userName} = req.body;

        //check if userName already exists
        const isExists = User.findOne({
            userName : userName
        })
        //if username already exists then throw some message
        if (isExists) {
            return res.status(400).send({
                success : false,
                err_code : "USERNAME_ALREADY_EXISTS",
                message : "UserName Already Exists !!!"
            })
        }

        //generate random string password
        const password = randomstring.generate(6);
        //hashing password using salt
        const hashPassword = bcrypt.hash(password, 10);

        //set user req data
        var obj = {
            name,
            userName,
            password : hashPassword
        }
        //check if req has role equal to one if then throw some error message
        if(req.body.role && req.body.role == 1) {
            return res.status(400).send({
                success : false,
                err_code : "INVALID REQUEST",
                message : "You Can't Create Admin !!!"
            })
        }else if(req.body.role) {
            obj.role = req.body.role;
        }

        //assign new user
        const user = new User(obj);
        //save new user
        const userData = await user.save();

        console.log(password);

        const content = `
        <p>Hi <b>${userData.name},</b> your account is created, below is your details.</P>
        <table>
        <tr>
        <th>name</th>
        <td>${userData.name}</td>
        </tr>
        <tr>
        <th>userName</th>
        <td>${userData.userName}</td>
        </tr>
        <tr>
        <th>password</th>
        <td>${password}</td>
        </tr>
        </table>
        `

        sendMail(userData.userName, "Account Created", content)

        res.status(201).send({
            success : true,
            message : "User Created Successfully !",
            data : userData
        })
        
    } catch (error) {
        console.log("Error Occurs: ", error);
    }
})