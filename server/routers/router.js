import express from "express";
import registerRouter  from "../controllers/register.js"
import loginRouter from "../controllers/login.js";
import newStudentRouter from "../controllers/newStudent.js"
import {registerValidator, loginValidator} from "../helpers/validator.js";

const router = express.Router();

router.use("/register", registerValidator, registerRouter);
router.use("/login",loginValidator, loginRouter);
router.use("/newstudent", newStudentRouter);

//exporting router
export default router;
export {router};