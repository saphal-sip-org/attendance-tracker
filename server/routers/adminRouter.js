import express from "express";
import addPermissionValidator from "../helpers/adminValidator.js";
import permissionController from "../controllers/admin/permissionController.js"

const router = express.Router();

router.use("/add-permission", addPermissionValidator, permissionController);

//exporting router
export default router;
export { router };