import express from "express";
import registerRouter  from "../controllers/register.js"
import loginRouter from "../controllers/login.js";
import newStudentRouter from "../controllers/newStudent.js"

const router = express.Router();

router.use("/", registerRouter);
router.use("/", loginRouter);
router.use("/", newStudentRouter);

//exporting router
export default router;
export {router};