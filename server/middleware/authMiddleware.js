import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {

  try {

    let token;

    // Check token in headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {

      token = req.headers.authorization.split(" ")[1];

      // Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      req.user = await User.findById(decoded.id).select("-password");

      next();

    } else {

      return res.status(401).json({
        success: false,
        message: "Not authorized, token missing",
      });

    }

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Token failed",
    });

  }

};

// Admin Middleware
export const admin = (req, res, next) => {

  if (req.user && req.user.role === "admin") {

    next();

  } else {

    res.status(403).json({
      success: false,
      message: "Admin access only",
    });

  }

};