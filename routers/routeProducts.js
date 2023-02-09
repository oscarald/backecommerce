import express from "express";
const router = express.Router();
import {
  getProducts,
  orderProducts,
  orderProductsbyPrice,
  orderProductsbyDate,
  orderProductsbyBetweenPrice,
  searchProducts
} from "../controllers/productController.js";

router.get("/", getProducts);
router.get("/rate", orderProducts);
router.get("/price", orderProductsbyPrice);
router.get("/date", orderProductsbyDate);
router.get("/between", orderProductsbyBetweenPrice);
router.get("/search", searchProducts);

export default router;
