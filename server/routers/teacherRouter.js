import express from "express";
import { addTeacherValidator, deleteTeacherValidator, getEachTeacherValidator, updateTeacherValidator } from "../helpers/commonValidator.js";
import addTeacher from "../controllers/common/teacher/addTeacherController.js";
import getTeacher from "../controllers/common/teacher/getTeacherController.js";
import getEachTeacher from "../controllers/common/teacher/getEachTeacherController.js";
import updateTeacher from "../controllers/common/teacher/updateTeacherController.js";
import deleteTeacher from "../controllers/common/teacher/deleteTeacherController.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use("/add-teacher", verifyToken, addTeacherValidator, addTeacher);
router.use("/get-teacher", verifyToken, getTeacher);
router.use("/get-teacher", verifyToken, getEachTeacherValidator, getEachTeacher);
router.use("/update-teacher", verifyToken, updateTeacherValidator, updateTeacher);
router.use("/delete-teacher", verifyToken, deleteTeacherValidator, deleteTeacher);

export {router};
export default router;