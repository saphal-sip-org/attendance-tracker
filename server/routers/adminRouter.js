import express from "express";
import { addPermissionValidator, deletePermissionValidator, updatePermissionValidator } from "../helpers/adminValidator.js";
import addPermission from "../controllers/admin/addPermissionController.js";
import getPermission from "../controllers/admin/getPermissionController.js";
import deletePermission from "../controllers/admin/deletePermissionController.js";
import updatePermission from "../controllers/admin/updatePermissionController.js";

import verifyToken from "../middlewares/authMiddleware.js";
import onlyAdminAccess from "../middlewares/adminUserMiddleware.js";

//router for controller (path)
const router = express.Router();

//permission router
router.use("/add-permission", verifyToken, onlyAdminAccess, addPermissionValidator, addPermission);
router.use("/get-permissions", verifyToken, onlyAdminAccess, getPermission);
router.use("/delete-permission", verifyToken, onlyAdminAccess, deletePermissionValidator, deletePermission);
router.use("/update-permission", verifyToken, onlyAdminAccess, updatePermissionValidator, updatePermission);



//exporting router
export default router;
export { router };