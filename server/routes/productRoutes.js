import express from "express";

import { getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct, getProductCount} from "../controllers/productController.js";

const router = express.Router();


// Routes
router.get("/", getProducts);
router.get("/product-count", getProductCount);

router.get("/:id", getSingleProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);



export default router;