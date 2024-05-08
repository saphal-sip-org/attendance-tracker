import express from "express";
import Jwt  from "jsonwebtoken";
import { Teacher } from "./models/schemas/schemas.js";
import { config } from "dotenv";

config();

const router = express.Router();

router.post("/register", (req, res))
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
            err_code: "User_don't exists",
            message: "User don't exists"
        })
        return;
    };

    //assign password in variable
    const teacherPassword = await Teacher.password;

    // compare passwords is correct/incorrect
    const isPasswordCorrect = await bcrypt.compare(password, teacherPassword);

    //if password is incorrect then send error message
    if(!isPasswordCorrect) {
        res.status(400).send({
            err_code: "User_password_incorrect",
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
    }, process.env.TEACHER_JWT_TOKEN, {expiresIn: "2hr" });

    //send information to the user to notify
    res.send({
        name: teacher.name,
        contact: teacher.contact,
        userName: teacher.userName,
        coursesTaught: teacher.coursesTaught

    })

    console.error("something error", error);
    } catch (error) {
        console.error("error occurs", error);
    }
})

//exporting teacher router
export default router;