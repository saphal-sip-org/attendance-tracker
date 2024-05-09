import express from "express";
import Teacher from "../../models/schemas/teacher.js"
import bcrypt from "bcrypt";

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
        console.log("User registered successfully")
    } catch (error) {
        console.log("errors occurs: ", error)
    }

});

export {router};
export default router;