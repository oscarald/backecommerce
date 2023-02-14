import express from "express";
const router = express.Router();
import {
  getProducts,
  orderProducts,
  orderProductsbyPrice,
  orderProductsbyDate,
  orderProductsbyBetweenPrice,
  searchProducts,
  allProducts,
  updateProduct,
  newProduct,
  getIdProduct
} from "../controllers/productController.js";

router.get("/", getProducts);
router.post("/", newProduct);
router.put("/", updateProduct);
router.get("/rate", orderProducts);
router.get("/price", orderProductsbyPrice);
router.get("/date", orderProductsbyDate);
router.get("/between", orderProductsbyBetweenPrice);
router.get("/search", searchProducts);
router.get("/all", allProducts);
router.get("/:id", getIdProduct);

export default router;
