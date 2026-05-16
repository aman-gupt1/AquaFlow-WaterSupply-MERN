import Cart from "../models/Cart.js";
import Product from "../models/Product.js";



// Add Product To Cart
export const addToCart = async (req, res) => {

  try {

    const { productId, quantity } = req.body;

    // Check Product Exists
    const productExists = await Product.findById(productId);

    if (!productExists) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Find User Cart
    let cart = await Cart.findOne({ user: req.user._id });

    // If cart not exists
    if (!cart) {

      cart = await Cart.create({
        user: req.user._id,
        products: [
          {
            product: productId,
            quantity,
          },
        ],
      });

    } else {

      // Check product already exists in cart
      const productIndex = cart.products.findIndex(
        (item) => item.product.toString() === productId
      );

      // Product already exists
      if (productIndex > -1) {

        cart.products[productIndex].quantity += quantity;

      } else {

        // Add new product
        cart.products.push({
          product: productId,
          quantity,
        });

      }

      await cart.save();

    }

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Get User Cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("products.product");

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart is empty",
      });
    }

    res.status(200).json({
      success: true,
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// Update Cart Quantity
export const updateCartItem = async (req, res) => {

  try {

    const { quantity } = req.body;

    const cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === req.params.productId
    );

    if (productIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart",
      });
    }

    cart.products[productIndex].quantity = quantity;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// Remove Product From Cart
export const removeCartItem = async (req, res) => {

  try {

    const cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.products = cart.products.filter(
      (item) => item.product.toString() !== req.params.productId
    );

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product removed from cart",
      cart,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// get total product from cast

export const getTotalCartProduct = async (req, res) => {
  try {

    const cart = await Cart.findOne({
      user: req.user._id,
    });

    const totalProducts = cart
      ? cart.products.length
      : 0;

    res.status(200).json({
      success: true,
      totalProducts,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};