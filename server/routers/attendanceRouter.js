import express from "express";
import { addAttendanceValidator, deleteAttendanceValidator, updateAttendanceValidator } from "../helpers/commonValidator.js";
import addAttendance from "../controllers/common/attendance/addAttendanceController.js";
import getAttendance from "../controllers/common/attendance/getAttendanceController.js";
import updateAttendance from "../controllers/common/attendance/updateAttendanceController.js";
import deleteAttendance from "../controllers/common/attendance/deleteAttendanceController.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use("/add-attendance", verifyToken, addAttendanceValidator, addAttendance);
router.use("/get-attendance", verifyToken, getAttendance);
router.use("/update-attendance", verifyToken, updateAttendanceValidator, updateAttendance);
router.use("/delete-attendance", verifyToken, deleteAttendanceValidator, deleteAttendance)

export {router};
export default router;