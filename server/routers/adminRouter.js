import express from "express";
import { addPermissionValidator, deletePermissionValidator, updatePermissionValidator } from "../helpers/adminValidator.js";
import addPermission from "../controllers/admin/addPermissionController.js";
import getPermission from "../controllers/admin/getPermissionController.js";
import deletePermission from "../controllers/admin/deletePermissionController.js";
import updatePermission from "../controllers/admin/updatePermissionController.js";

import verifyToken from "../middlewares/authMiddleware.js";

//router for controller (path)
const router = express.Router();

//permission router
router.use("/add-permission", verifyToken, addPermissionValidator, addPermission);
router.use("/get-permissions", verifyToken, getPermission);
router.use("/delete-permission", verifyToken, deletePermissionValidator, deletePermission);
router.use("/update-permission", verifyToken, updatePermissionValidator, updatePermission);



//exporting router
export default router;
export { router };