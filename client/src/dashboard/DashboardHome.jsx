import React, { useEffect, useState } from "react";
import {Users,Package,ShoppingCart,IndianRupee,TrendingUp,ArrowUpRight,} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";
const DashboardHome = () => {
const [totalProduct,setTotalProduct]=useState(0);
const [totalUser,setTotalUser]=useState(0);
const [totalOrder,setTotalOrder]=useState(0);

const navigate=useNavigate();

// count the total product
useEffect(() => {
  const getCount = async () => {
    try {
      const res = await axios.get(
        `${API}/products/product-count`
      );
      setTotalProduct(res.data.totalProducts);
    } catch (error) {
      console.log(error);
    }
  };
  getCount();
}, []);
 
// <!-- count the total user -->
useEffect(() => {
  const countUser = async () => {
    try {
      const res = await axios.get(
        `${API}/auth/users-count`
      );
      setTotalUser(res.data.totalUsers);
    } catch (error) {
      console.log(error);
    }
  };
  countUser();
}, []);

// count the total orders

useEffect(()=>{
  const countOrders= async()=>{
try {
    const res= await axios.get(`${API}/orders/count-orders`);
    setTotalOrder(res.data.totalOrders)
  }catch (error) {
    console.log(error);
  };
};
  countOrders()
},[])
 

  const stats = [
    {
      title: "Total Users",
      value: totalUser,
      icon: <Users size={28} />,
      bg: "from-cyan-500 to-blue-600",
    },

    {
      title: "Products",
      value: totalProduct,
      icon: <Package size={28} />,
      bg: "from-purple-500 to-pink-500",
    },

    {
      title: "Orders",
      value: totalOrder,
      icon: <ShoppingCart size={28} />,
      bg: "from-orange-400 to-red-500",
    },

    {
      title: "Revenue",
      value: "₹45K",
      icon: <IndianRupee size={28} />,
      bg: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="space-y-10">

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard Overview
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Welcome back 👋 Manage your AquaFlow business efficiently.
          </p>
        </div>

        {/* SMALL ANALYTICS CARD */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-5 rounded-3xl shadow-xl flex items-center gap-5">

          <div className="bg-white/20 p-4 rounded-2xl">
            <TrendingUp size={30} />
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              Monthly Growth
            </h2>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-3xl font-bold">
                +24%
              </span>

              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">

        {stats.map((item, index) => (

          <div
            key={index}
            className="group relative overflow-hidden rounded-[32px] bg-white p-7 shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100 hover:-translate-y-2"
          >

            {/* BACKGROUND GLOW */}
            <div
              className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.bg} opacity-10 rounded-full blur-3xl`}
            ></div>

            {/* TOP */}
            <div className="flex items-center justify-between relative z-10">

              <div>

                <p className="text-gray-500 text-sm font-medium mb-3">
                  {item.title}
                </p>

                <h2 className="text-5xl font-bold text-gray-800">
                  {item.value}
                </h2>

              </div>

              {/* ICON */}
              <div
                className={`bg-gradient-to-r ${item.bg} text-white p-4 rounded-2xl shadow-lg group-hover:scale-110 transition duration-500`}
              >
                {item.icon}
              </div>
            </div>

            {/* BOTTOM TEXT */}
            <div className="mt-7 flex items-center gap-2 text-green-600 font-semibold relative z-10">

              <TrendingUp size={18} />

              <span>
                12% increase this month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* RECENT ACTIVITY SECTION */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* RECENT ORDERS */}
        <div className="bg-white rounded-[32px] p-8 shadow-xl border border-gray-100">

          <div className="flex items-center justify-between mb-8">

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Recent Orders
              </h2>

              <p className="text-gray-500 mt-1">
                Latest customer activities
              </p>
            </div>

            <button className="text-cyan-600 font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-5">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="flex items-center justify-between p-4 rounded-2xl hover:bg-cyan-50 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold">
                    A
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Order #10{item}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Water Can Delivery
                    </p>
                  </div>
                </div>

                <span className="text-cyan-600 font-bold">
                  ₹500
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-[32px] p-8 shadow-xl border border-gray-100">

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Quick Actions
          </h2>

          <p className="text-gray-500 mb-8">
            Manage your business quickly
          </p>

          <div className="grid grid-cols-2 gap-5">

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition"
            onClick={()=>navigate('/dashboard/create-product')}>

              <Package size={30} className="mb-4" />

              <h3 className="text-lg font-semibold">
                Add Product
              </h3>
            </button>

            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition"
            onClick={()=>navigate('/dashboard/orders')}>

              <ShoppingCart size={30} className="mb-4" />

              <h3 className="text-lg font-semibold">
                View Orders
              </h3>
            </button>

            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition"
            onClick={()=>navigate('/dashboard/users')}>

              <Users size={30} className="mb-4" />

              <h3 className="text-lg font-semibold">
                Manage Users
              </h3>
            </button>

            <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition">

              <IndianRupee size={30} className="mb-4" />

              <h3 className="text-lg font-semibold">
                Revenue
              </h3>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;