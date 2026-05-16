import Product from "../models/Product.js";


// Get All Products
export const getProducts = async (req, res) => {

  try {

    const products = await Product.find();

    res.status(200).json({
      success: true,
      products,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Get Single Product
export const getSingleProduct = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
// Create Product
export const createProduct = async (req, res) => {
    console.log(req.body)

  try {

    const product = await Product.create(req.body);
    

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });

  } catch (error) {
        
    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
// Update Product
export const updateProduct = async (req, res) => {

  try {

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
// Delete Product
export const deleteProduct = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// get the product count
export const getProductCount = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();

    res.status(200).send({
      success: true,
      totalProducts,
    });
  } catch (error) {

    res.status(500).send({
      success: false,
      message: "Error in product count",
    });
  }
};
