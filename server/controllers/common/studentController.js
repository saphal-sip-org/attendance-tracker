import express from "express";
import Student from "../../models/schemas/student.js";

const router = express.Router();

//create/add new student to the list
router.post("/", async (req, res) => {
    try {
        //receive student data from body where teacher request for new student
        const { name, userName, assignTeacher, course, contact} = req.body;

          // Check if userName is provided
          if (!userName || !name || !contact) {
            return res.status(400).send({
                err_code: "STUDENT_INPUTS_REQUIRED",
                message: "Student inputs are required",
            });
        }

        //check if the student already exists in database
        const existingStudent = await Student.findOne({userName: userName});

        // if student already exists throw error or send message
        if (existingStudent){
            res.status(400).send({
                err_code: "STUDENT_ALREADY_EXISTS",
                message: "Student already exists"
            });
            return;
        }

        // create new student
        const newStudent = new Student({
            name, 
            userName, 
            assignTeacher,
            course,
            contact
        })

        //save new student to the database
        const saveNewStudent = await newStudent.save();

        //send some data to the user
        res.status(200).send({
            name: saveNewStudent.name, 
            userName: saveNewStudent.userName, 
            assignTeacher: saveNewStudent.assignTeacher,
            course: saveNewStudent.course,
            contact: saveNewStudent.contact
        });
        console.log("Student created Successfully");
        
    } catch (error) {
        console.error("errors occurs", error);
    }
})

export {router};
export default router;