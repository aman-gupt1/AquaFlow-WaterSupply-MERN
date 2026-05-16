import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

export const placeOrder = async (req, res) => {
  try {
    // get user cart
    const cart = await Cart.findOne({
      user: req.user.id,
    }).populate("products.product");

    // cart empty
    if (!cart || cart.products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    // calculate total amount
    const totalAmount = cart.products.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    );

    // create order
    const order = await Order.create({

      user: req.user.id,

      orderedProducts: cart.products.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),

      totalAmount,

    });

    // clear cart
    cart.products = [];

    await cart.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Create Order
export const createOrder = async (req, res) => {

  try {

    const { shippingAddress, paymentMethod } = req.body;

    // Find User Cart
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("products.product");

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    // Calculate Total Amount
    const totalAmount = cart.products.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    );

    // Create Order
    const order = await Order.create({
      user: req.user._id,

      products: cart.products.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),

      totalAmount,

      shippingAddress,

      paymentMethod,

      paymentStatus: "Pending",

      deliveryStatus: "Processing",
    });

    // Clear Cart
    await Cart.findOneAndDelete({
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Get Logged In User Orders
export const getMyOrders = async (req, res) => {

  try {

    const orders = await Order.find({
      user: req.user._id,
    }).populate("products.product");

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// Get Single Order
export const getSingleOrder = async (req, res) => {

  try {

    const order = await Order.findById(req.params.id)
      .populate("products.product")
      .populate("user", "name email");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// Admin Get All Orders
export const getAllOrders = async (req, res) => {

  try {

    const orders = await Order.find()
      .populate("user", "name email")
      .populate("orderedProducts.product");

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// Update Delivery Status
export const updateOrderStatus = async (req, res) => {

  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.deliveryStatus = req.body.deliveryStatus;

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order status updated",
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

export const countOrders = async(req,res)=>{
try {
  const totalOrders=await Order.countDocuments();
  res.status(200).send({
    success: true, totalOrders,
  }) 
} catch (error) {
  res.status(500).send({ success: false, message: "Error in order count", });
}
}