import express from "express";

import {
  createOrder,
  getMyOrders,
  getSingleOrder,
  getAllOrders,
  updateOrderStatus,
  countOrders,
  placeOrder
} from "../controllers/orderController.js";

import {
  protect,
  admin,
} from "../middleware/authMiddleware.js";

const router = express.Router();


// User Routes
router.post("/", protect, createOrder);
router.post("/place-order",protect,placeOrder)
router.get("/count-orders",countOrders)

router.get("/my-orders", protect, getMyOrders);

router.get("/:id", protect, getSingleOrder);


// Admin Routes
router.get("/", protect, admin, getAllOrders);

router.put(
  "/:id",
  protect,
  admin,
  updateOrderStatus
);

export default router;