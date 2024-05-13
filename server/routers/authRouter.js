import express from "express";
import registerRouter  from "../controllers/auth/register.js"
import loginRouter from "../controllers/auth/login.js";
import newStudentRouter from "../controllers/newStudent.js"
import {registerValidator, loginValidator} from "../helpers/authValidator.js";
import getProfile from "../controllers/auth/getProfile.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use("/register", registerValidator, registerRouter);
router.use("/login", loginValidator, loginRouter);
router.use("/getProfile", verifyToken, getProfile)
router.use("/newStudent", newStudentRouter);

//exporting router
export default router;
export {router};