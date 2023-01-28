import express from "express";
const router = express.Router();
import {
  getUsers,
  createUser,
  verifyUser,
  profileUser,
} from "../controllers/userController.js";

import authUser from "../middlewares/auth.js";

router.get("/", getUsers);
router.post("/", createUser);
router.post("/login", verifyUser);
router.get("/profile", authUser, profileUser);

export default router;
