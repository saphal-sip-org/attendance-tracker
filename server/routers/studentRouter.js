import express from "express";
import { addStudentValidator, deleteStudentValidator, updateStudentValidator } from "../helpers/commonValidator.js";
import addStudent from "../controllers/common/student/addStudentController.js";
import getStudent from "../controllers/common/student/getStudentController.js";
import updateStudent from "../controllers/common/student/updateStudentController.js";
import deleteStudent from "../controllers/common/student/deleteStudentController.js";
import verifyToken from "../middlewares/authMiddleware.js";



const router = express.Router();

router.use("/add-student", verifyToken, addStudentValidator, addStudent);
router.use("/get-student", verifyToken, getStudent);
router.use("/update-student", verifyToken, updateStudentValidator, updateStudent);
router.use("/delete-student", verifyToken, deleteStudentValidator, deleteStudent);

export {router};
export default router;