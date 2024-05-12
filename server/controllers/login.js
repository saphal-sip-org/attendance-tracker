import express from "express";
import Jwt  from "jsonwebtoken";
import User from "../models/schemas/user.js"
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

//connection to the router
const router = express.Router();

//connect .env data
dotenv.config();

// router for user to login
router.post("/", async (req, res) => {
    try {

        // check for error validation
        const errors = validationResult(req);

        //if error then throw message
        if(!errors.isEmpty()) {
            return res.status(200).send({
                success : false,
                message : "Errors",
                errors : errors.array()
            })
        };
   

        //receive the user details(userName, password) from user
        const { userName, password } = req.body;

        // find the user from database
        const user = await User.findOne({userName: userName});

        //check if user exists
        if(!user){
            res.status(400).send({
                success: false,
                err_code: "USER_NOT_EXISTS",
                message: "User doesn't exists"
            })
            return;
        }


        //assign password in variable
        const userPassword = await user.password;

        // compare passwords is correct/incorrect
        const isPasswordCorrect = await bcrypt.compare(password, userPassword);

        //if password is incorrect then send error message
        if(!isPasswordCorrect) {
            res.status(400).send({
                success: false,
                err_code: "USER_PASSWORD_INCORRECT",
                message: "User password is incorrect"
            })
            return;
        };
        try {

            const savedUser = { 
                name: User.name,
                contact: User.contact,
                userName: User.userName,
                coursesTaught: User.coursesTaught
            };

            //assign user data in jwt token
            const token = Jwt.sign(savedUser, process.env.USER_JWT_TOKEN, {expiresIn: "2h" });

            //send information to the user to notify
            res.status(200).send({
                success: true,
                data: savedUser,
                message : "Login successfully",
                token,
                tokenType : "Bearer"
            });

            console.log("Login successfully")
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
})

export {router};
export default router;