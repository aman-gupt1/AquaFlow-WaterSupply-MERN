import React, { useEffect, useState } from "react";
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck, Truck, ShoppingBag, BadgeCheck,} from "lucide-react";
import axios from "axios";
import { API } from "../config/api";


const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading]=useState(true);

  // GET CART ITEMS
  const getCartItems = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(`${API}/cart`,{  headers: { Authorization: `Bearer ${token}`,},});
      setCartItems(res.data.cart.products || []);
      setLoading(false)

    } catch (error) {
      console.log(error);
    }
  };

  // DELETE CART ITEM
  const handleDeleteCartItem = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete( `${API}/cart/remove/${productId}`, { headers: { Authorization: `Bearer ${token}`,},});
      setCartItems((prev) =>
        prev.filter(
          (item) =>
            item.product._id !== productId
        )
      );
      getCartItems()

    } catch (error) {
      console.log(error);
    }
  };

  // QUANTITY INCREASE
  const increaseQuantity = async (productId) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.product._id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  //  QUANTITY DECREASE
  const decreaseQuantity = async (productId) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.product._id === productId &&
        item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  // USE EFFECT 
  useEffect(() => {
    getCartItems();
  }, []);

  //  CALCULATIONS 
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      item.product.price * item.quantity,
    0
  );

  const deliveryCharge = 50;

  const total = subtotal + deliveryCharge;

const handleCheckout = async () => {
  try {

    const token = localStorage.getItem("token");

    const res = await axios.post(
      `${API}/orders/place-order`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message);

  } catch (error) {

    console.log(error.response.data);

  }
};
     if (loading) {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-cyan-600">
        Loading Carts...
      </h1>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 px-3 sm:px-6 lg:px-10 py-5 overflow-hidden">

      {/* TOP */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

        <div>

          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-semibold mb-3 text-xs">

            <ShoppingBag size={14} />

            Shopping Cart

          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-gray-800 leading-tight">
            Review Your Products
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-2xl leading-6">
            Manage your selected products before checkout.
          </p>

        </div>

        {/* ITEMS */}
        <div className="bg-white border border-cyan-100 shadow-lg rounded-[22px] p-4 min-w-[180px]">

          <p className="text-gray-500 font-medium text-xs">
            Total Products
          </p>

          <h2 className="text-3xl font-black text-cyan-600 mt-2">
            {cartItems.length}
          </h2>

          <div className="mt-3 h-2 bg-cyan-100 rounded-full overflow-hidden">

            <div className="w-[75%] h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>

          </div>

          <p className="text-[10px] text-gray-500 mt-2">
            Ready for checkout 🚀
          </p>

        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_310px] gap-5">

        {/* LEFT SIDE */}
        <div className="space-y-3">

          {cartItems.map((item) => (

            <div
              key={item._id}
              className="group bg-white/90 backdrop-blur-xl border border-cyan-100 rounded-[22px] shadow-md overflow-hidden hover:shadow-xl transition duration-500"
            >

              <div className="p-2 sm:p-2.5 flex gap-2 items-start">

                {/* IMAGE */}
                <div className="relative w-[82px] h-[82px] sm:w-[110px] sm:h-[110px] rounded-[14px] overflow-hidden shrink-0">

                  <img
                    src={item.product.image}
                    alt={item.product.productName}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-md text-cyan-700 px-1.5 py-[3px] rounded-full text-[7px] font-bold shadow">

                    Best

                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 flex flex-col justify-between min-w-0">

                  {/* TOP */}
                  <div>

                    <div className="flex items-start justify-between gap-2">

                      <div className="min-w-0">

                        <h2 className="text-[14px] sm:text-lg font-bold text-gray-800 leading-tight line-clamp-1">
                          {item.product.productName}
                        </h2>

                        <p className="text-gray-500 mt-0.5 leading-4 text-[10px] sm:text-xs line-clamp-2">
                          {item.product.description}
                        </p>

                      </div>

                      <button
                        onClick={() =>
                          handleDeleteCartItem(
                            item.product._id
                          )
                        }
                        className="w-7 h-7 rounded-lg bg-red-100 hover:bg-red-500 hover:text-white transition flex items-center justify-center text-red-500 shadow shrink-0 mr-3 mt-2 "
                      >

                        <Trash2 size={13} />

                      </button>
                    </div>

                    {/* BADGES */}
                    <div className="flex flex-wrap items-center gap-1 mt-1.5">

                      <div className="inline-flex items-center gap-1 bg-cyan-100 text-cyan-700 px-2 py-[5px] rounded-full font-semibold text-[8px] sm:text-[9px]">

                        <ShieldCheck size={9} />

                        {item.product.stock > 0
                          ? "In Stock"
                          : "Out Of Stock"}

                      </div>

                      <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-[5px] rounded-full font-semibold text-[8px] sm:text-[9px]">

                        <BadgeCheck size={9} />

                        Checked

                      </div>

                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-1.5 flex items-end justify-between gap-2">

                    {/* QUANTITY */}
                    <div>

                      <p className="text-gray-500 mb-1 font-medium text-[9px]">
                        Quantity
                      </p>

                      <div className="flex items-center gap-1.5 bg-gray-100 rounded-xl p-1 w-fit">

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.product._id
                            )
                          }
                          className="w-6 h-6 rounded-md bg-white shadow hover:bg-cyan-500 hover:text-white transition flex items-center justify-center"
                        >

                          <Minus size={11} />

                        </button>

                        <span className="text-xs font-bold text-gray-800 min-w-[14px] text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.product._id
                            )
                          }
                          className="w-6 h-6 rounded-md bg-white shadow hover:bg-cyan-500 hover:text-white transition flex items-center justify-center"
                        >

                          <Plus size={11} />

                        </button>

                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="text-right mr-3">

                      <p className="text-gray-500 font-medium text-[9px]">
                        Total
                      </p>

                      <h2 className="text-base sm:text-xl font-bold text-cyan-600 mt-0.5 ">
                        ₹
                        {item.product.price *
                          item.quantity}
                      </h2>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div>

          <div className="sticky top-24 bg-white/90 backdrop-blur-xl border border-cyan-100 rounded-[24px] shadow-xl p-4 overflow-hidden">

            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-200 blur-3xl opacity-30 rounded-full"></div>

            <div className="relative">

              <h2 className="text-xl font-black text-gray-800 mb-5">
                Order Summary
              </h2>

              {/* PRICE DETAILS */}
              <div className="space-y-3 border-b border-gray-200 pb-4">

                <div className="flex items-center justify-between text-sm">

                  <span className="text-gray-600">
                    Subtotal
                  </span>

                  <span className="font-bold text-gray-800">
                    ₹{subtotal}
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="text-gray-600">
                    Delivery Charge
                  </span>

                  <span className="font-bold text-gray-800">
                    ₹{deliveryCharge}
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="text-gray-600">
                    Discount
                  </span>

                  <span className="font-bold text-green-600">
                    - ₹0
                  </span>

                </div>
              </div>

              {/* TOTAL */}
              <div className="flex items-center justify-between py-4">

                <h2 className="text-base font-black text-gray-800">
                  Total
                </h2>

                <h2 className="text-2xl font-black text-cyan-600">
                  ₹{total}
                </h2>

              </div>

              {/* BUTTON */}
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 hover:scale-[1.02] transition duration-300 text-white py-3 rounded-2xl font-bold shadow-lg text-sm"
              onClick={handleCheckout}>

                Proceed To Checkout

                <ArrowRight size={16} />

              </button>

              {/* EXTRA */}
              <div className="mt-4 bg-cyan-50 border border-cyan-100 rounded-2xl p-3">

                <div className="flex items-center gap-2 mb-1.5">

                  <Truck className="text-cyan-600" size={14} />

                  <h3 className="font-bold text-cyan-700 text-xs">
                    Fast Delivery
                  </h3>

                </div>

                <p className="text-gray-600 text-[10px] leading-5">
                  Free delivery on orders above ₹999.
                </p>

              </div>

              {/* SECURE */}
              <div className="mt-3 flex items-center gap-2 text-gray-600 bg-green-50 border border-green-100 rounded-2xl p-3">

                <ShieldCheck className="text-green-500" size={14} />

                <p className="font-medium text-[10px]">
                  100% Secure Payment
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


