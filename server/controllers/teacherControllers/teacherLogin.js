import express from "express";
import Jwt  from "jsonwebtoken";
// import { Teacher } from "../models/schemas/schemas.js";
import Teacher from "../../models/schemas/teacher.js"
import dotenv from "dotenv";
import bcrypt from "bcrypt";
const router = express.Router();

dotenv.config();

// router for teacher to login
router.post("/login", async (req, res) => {
    try {
            //receive the teacher details(userName, password) from teacher
        const { userName, password } = req.body;

        // find the teacher from database
        const teacher = await Teacher.findOne({userName: userName});

        //check if teacher exists
        if(!teacher){
            res.status(400).send({
                err_code: "USER_NOT_EXISTS",
                message: "User doesn't exists"
            })
            return;
        }

        //assign password in variable
        const teacherPassword = await teacher.password;

        // compare passwords is correct/incorrect
        const isPasswordCorrect = await bcrypt.compare(password, teacherPassword);

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
            name: Teacher.name,
            contact: Teacher.contact,
            userName: Teacher.userName,
            coursesTaught: Teacher.coursesTaught
        }, process.env.TEACHER_JWT_TOKEN, {expiresIn: "2h" });

        //send information to the user to notify
        res.send({
            name: teacher.name,
            contact: teacher.contact,
            userName: teacher.userName,
            coursesTaught: teacher.coursesTaught,
            token

        });

    console.log("Login successfully")
    } catch (error) {
        console.error("error occurs", error);
    }
})

export {router};
export default router;