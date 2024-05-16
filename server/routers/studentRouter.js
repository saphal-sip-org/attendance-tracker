import express from "express";
import { addStudentValidator, deleteStudentValidator, getEachStudentValidator, updateStudentValidator } from "../helpers/commonValidator.js";
import addStudent from "../controllers/common/student/addStudentController.js";
import getStudent from "../controllers/common/student/getStudentController.js";
import getEachStudent from "../controllers/common/student/getEachStudentController.js";
import updateStudent from "../controllers/common/student/updateStudentController.js";
import deleteStudent from "../controllers/common/student/deleteStudentController.js";
import verifyToken from "../middlewares/authMiddleware.js";



const router = express.Router();

router.use("/add-student", verifyToken, addStudentValidator, addStudent);
router.use("/get-student", verifyToken, getStudent);
router.use("/get-student", verifyToken, getEachStudentValidator, getEachStudent);
router.use("/update-student", verifyToken, updateStudentValidator, updateStudent);
router.use("/delete-student", verifyToken, deleteStudentValidator, deleteStudent);

export {router};
export default router;