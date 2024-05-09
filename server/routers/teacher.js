import express from "express";
import Jwt  from "jsonwebtoken";
// import { Teacher } from "../models/schemas/schemas.js";
import Teacher from "../models/schemas/teacher.js"
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const router = express.Router();

// teacher for register
router.post("/register", async(req, res) => {
    try {
        // receive  username and password from teacher
        const { userName, password} = req.body;

        // Check if userName is provided
        if (!userName) {
            return res.status(400).send({
                err_code: "USER_NAME_REQUIRED",
                message: "User name is required",
            });
        }
        
        //check  if the teacher already exist  
        const existingTeacher = await Teacher.findOne({userName: userName});

        //if taecher is already exist send message
        if(existingTeacher){
            res.status(400).send({
                err_code:"USER_ALREADY_EXIST",
                message:"User already exist",
            });
            return;
        }

         //teacher password bcrypt 
        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(password, salt);

        //register & create new teacher 
        const newTeacher = new Teacher({
            userName,
            password: hasedPassword,
        });

        //save new teacher in database
        const savedTeacher = await newTeacher.save();

        //send teachers data
        res.status(200).send({
            name: savedTeacher.name,
            contact: savedTeacher.contact,
            userName: savedTeacher.userName,
            coursesTaught: savedTeacher.coursesTaught
        });
        console.log("Data registered successfully")
    } catch (error) {
        console.log("errors occurs: ", error)
    }

});


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
                message: "User don't exists"
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
                message: "User password incorrect"
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

    console.log("login successfully")
    } catch (error) {
        console.error("error occurs", error);
    }
})

//exporting teacher router
export default router;
export {router};