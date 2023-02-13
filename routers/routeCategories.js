import express from "express";
const router = express.Router();
import {
  getCategories,
  newCategory
} from "../controllers/categoryController.js";

router.get("/", getCategories);
router.post("/", newCategory);

export default router;