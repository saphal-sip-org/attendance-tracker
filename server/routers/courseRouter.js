import express from "express";
import verifyToken from "../middlewares/authMiddleware.js";
import {addCourseValidator, updateCourseValidator, deleteCourseValidator} from "../helpers/commonValidator.js";
import addCourse from "../controllers/common/course/addCourseController.js";
import getCourse from "../controllers/common/course/getCourseController.js";
import updateCourse from "../controllers/common/course/updateCourseController.js";
import deleteCourse from "../controllers/common/course/deleteCourseController.js";


const router = express.Router();

router.use("/add-course", verifyToken, addCourseValidator, addCourse);
router.use("/get-course", verifyToken, getCourse);
router.use("/update-course", verifyToken, updateCourseValidator, updateCourse);
router.use("/delete-course", verifyToken, deleteCourseValidator, deleteCourse);


export { router };
export default router;