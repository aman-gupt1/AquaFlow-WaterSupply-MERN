import express from "express";

import {registerUser, loginUser, getUserProfile, getAllUsers, deleteUser,updateUserRole, blockUser, countUsers} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.get("/users-count",countUsers)
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUserRole);
router.put("/block-user/:id", blockUser);

// Profile
router.get("/profile", protect, getUserProfile);

export default router;