import express from "express";
import teacherRegisterRouter  from "../controllers/teacherControllers/teacherRegister.js"
import teacherLoginRouter from "../controllers/teacherControllers/teacherLogin.js";

const router = express.Router();

router.use("/", teacherRegisterRouter);
router.use("/", teacherLoginRouter);
router.use("/", )

//exporting teacher router
export default router;
export {router};