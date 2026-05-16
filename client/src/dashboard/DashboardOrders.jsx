import React, { useEffect, useState } from "react";
import {PackageCheck,Truck,Clock3,XCircle,IndianRupee,} from "lucide-react";
import axios from "axios";
import { API } from "../config/api";

const DashboardOrders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(
      `${API}/orders`,
      {
        headers: {
           Authorization: `Bearer ${token}`,
        },
      }
    );

    setOrders(res.data.orders);
  
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getOrders();
}, []);

  return (
    <div className="w-full">

      {/* TOP */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Orders Management
          </h1>

          <p className="text-gray-500 mt-2">
            Track customer orders and delivery status
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-3xl shadow-lg w-fit">
          <p className="text-sm opacity-90">
            Total Orders
          </p>

          <h2 className="text-3xl font-bold">
            {orders.length}
          </h2>
        </div>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden lg:block bg-white rounded-[35px] shadow-xl border border-cyan-100 overflow-hidden">

        <table className="w-full">

          <thead className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">

            <tr>

              <th className="p-6 text-left">
                Customer
              </th>

              <th className="p-6 text-left">
                Order ID
              </th>

              <th className="p-6 text-left">
                Amount
              </th>

              <th className="p-6 text-left">
                Payment
              </th>

              <th className="p-6 text-left">
                Delivery
              </th>

              <th className="p-6 text-left">
                Action
              </th>

            </tr>
          </thead>
          <tbody>

  {orders.map((order) =>
    order.orderedProducts.map((item, index) => (

      <tr
        key={index}
        className="border-b hover:bg-cyan-50 transition"
      >

        <td className="p-6">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {order.user?.name?.charAt(0)}
            </div>

            <div>

              <h2 className="font-bold text-gray-800">
                {order.user?.name}
              </h2>

              <p className="text-sm text-gray-500">
                AquaFlow Customer
              </p>

            </div>

          </div>
        </td>

        <td className="p-6 font-semibold text-cyan-700">
          {order._id.slice(0, 8)}
        </td>

        <td className="p-6">

          <div className="flex items-center gap-2 font-bold text-gray-800">

            <IndianRupee size={18} />

            {item.product?.price * item.quantity}

          </div>
        </td>

        <td className="p-6">

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              order.paymentStatus === "paid"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {order.paymentStatus}
          </span>

        </td>

        <td className="p-6">

          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
              order.deliveryStatus === "processing"
                ? "bg-yellow-100 text-yellow-700"
                : order.deliveryStatus === "shipped"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }`}
          >

            {order.deliveryStatus === "processing" && (
              <Clock3 size={16} />
            )}

            {order.deliveryStatus === "shipped" && (
              <Truck size={16} />
            )}

            {order.deliveryStatus === "delivered" && (
              <PackageCheck size={16} />
            )}

            {order.deliveryStatus}

          </div>
        </td>

        <td className="p-6">

          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-white px-5 py-3 rounded-2xl shadow-md">
            <XCircle size={18} />
            Cancel
          </button>

        </td>

      </tr>

    ))
  )}

</tbody>
          
        </table>
      </div>

      {/* MOBILE CARDS */}
     <div className="lg:hidden space-y-5">

  {orders.map((order) =>
    order.orderedProducts.map((item, index) => (

      <div
        key={index}
        className="bg-white rounded-[30px] shadow-lg border border-cyan-100 overflow-hidden"
      >

        {/* TOP */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-5 text-white">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-xl">
                {order.user?.name ? order.user.name.charAt(0) : "U"}
              </div>

              <div>

                <h2 className="font-bold text-lg">
                  {order.user?.name || "Unknown User"}
                </h2>

                <p className="text-cyan-100 text-sm">
                  {order._id.slice(0, 8)}
                </p>

              </div>
            </div>

            <div className="text-right">

              <p className="text-cyan-100 text-sm">
                Amount
              </p>

              <h2 className="text-2xl font-bold">
                ₹{item.product?.price * item.quantity}
              </h2>

            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="p-5 space-y-5">

          {/* PAYMENT */}
          <div className="flex items-center justify-between">

            <p className="text-gray-500 font-medium">
              Payment
            </p>

            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                order.paymentStatus === "paid"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {order.paymentStatus}
            </span>

          </div>

          {/* DELIVERY */}
          <div className="flex items-center justify-between">

            <p className="text-gray-500 font-medium">
              Delivery
            </p>

            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                order.deliveryStatus === "processing"
                  ? "bg-yellow-100 text-yellow-700"
                  : order.deliveryStatus === "shipped"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700"
              }`}
            >

              {order.deliveryStatus === "processing" && (
                <Clock3 size={16} />
              )}

              {order.deliveryStatus === "shipped" && (
                <Truck size={16} />
              )}

              {order.deliveryStatus === "delivered" && (
                <PackageCheck size={16} />
              )}

              {order.deliveryStatus}

            </div>
          </div>

          {/* BUTTON */}
          <button className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition text-white py-4 rounded-2xl shadow-md font-semibold">

            <XCircle size={18} />

            Cancel Order

          </button>

        </div>
      </div>

    ))
  )}

</div>
    </div>
  );
};

export default DashboardOrders;