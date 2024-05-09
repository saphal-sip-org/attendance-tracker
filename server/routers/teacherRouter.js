import express from "express";
import teacherRegisterRouter  from "../controllers/teacherRegister.js"
import teacherLoginRouter from "../controllers/teacherLogin.js";

const router = express.Router();

router.use("/", teacherRegisterRouter);
router.use("/", teacherLoginRouter);

//exporting teacher router
export default router;
export {router};