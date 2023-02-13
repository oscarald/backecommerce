import express from "express";
const router = express.Router();
import {
  createSales,
  changeStatus,
  getAllSales
} from "../controllers/saleController.js";

router.get("/", getAllSales)
router.post("/", createSales);
router.put("/", changeStatus);

export default router;