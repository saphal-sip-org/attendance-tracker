import express from "express";
import Jwt  from "jsonwebtoken";
// import { User } from "../models/schemas/schemas.js";
import User from "../models/schemas/user.js"
import dotenv from "dotenv";
import bcrypt from "bcrypt";
const router = express.Router();

dotenv.config();

// router for user to login
router.post("/login", async (req, res) => {
    try {
            //receive the user details(userName, password) from user
        const { userName, password } = req.body;

        // find the user from database
        const user = await User.findOne({userName: userName});

        //check if user exists
        if(!user){
            res.status(400).send({
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
                err_code: "USER_PASSWORD_INCORRECT",
                message: "User password is incorrect"
            })
            return;
        };

        //assign user data in jwt token
        const token = Jwt.sign({
            name: User.name,
            contact: User.contact,
            userName: User.userName,
            coursesTaught: User.coursesTaught
        }, process.env.USER_JWT_TOKEN, {expiresIn: "2h" });

        //send information to the user to notify
        res.send({
            name: user.name,
            contact: user.contact,
            userName: user.userName,
            coursesTaught: user.coursesTaught,
            token

        });

    console.log("Login successfully")
    } catch (error) {
        console.error("error occurs", error);
    }
})

export {router};
export default router;