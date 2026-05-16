import express from "express";

import {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
  getTotalCartProduct
} from "../controllers/cartController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


// Add To Cart
router.post("/add", protect, addToCart);

// Get Cart
router.get("/", protect, getCart);

// get cart data 
router.get("/total-cart-products",protect,getTotalCartProduct)

// Update Quantity
router.put("/update/:productId", protect, updateCartItem);

// Remove Item
router.delete("/remove/:productId", protect, removeCartItem);

export default router;