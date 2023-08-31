import express from "express";
import userAuth from "../middelwares/authMiddleware.js";
import { updateUserController } from "./../controllers/useController.js";

//routes object
const router = express.Router();

//router
//GeT user || GET

//UPDATE user || PUT
router.put("/update-user/", userAuth, updateUserController);

export default router;
