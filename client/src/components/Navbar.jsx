import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";


import {Menu,X,ShoppingCart,User,Droplets,Phone,MessageCircle,} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { API } from "../config/api";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [cartCount, setCartCount] = useState(0);


  // get localstorage item
  const isLogin = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  

  const getCartCount = async () => {
  try {

    const token = localStorage.getItem("token");

    const res = await axios.get(
      `${API}/cart/total-cart-products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setCartCount(res.data.totalProducts);

  } catch (error) {
    console.log(error);
  }
};

useEffect(()=>{
getCartCount()
},[])

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-cyan-600 font-semibold relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-cyan-500 after:left-0 after:-bottom-1"
      : "text-gray-700 hover:text-cyan-500 transition duration-300";

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-cyan-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-cyan-100 p-2 rounded-full">
            <Droplets className="text-cyan-600" size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-cyan-700 leading-none">
              AquaFlow
            </h1>

            <p className="text-xs text-gray-500">
              Water Supply Service
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkStyle}>
            Products
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          {user?.role === "admin" && (
           <NavLink to="/dashboard" className={navLinkStyle}>
              Dashboard
              </NavLink>
                )}
        </div>

        

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
          
            <p className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-5 py-3 rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-cyan-300/50 transition-all duration-300 cursor-pointer">
            {/* GLOW EFFECT */}
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000"></span>
          {/* PHONE ICON */}
          <span className="relative z-10 animate-pulse">📞</span>
          {/* NUMBER */}
            <span className="relative z-10 tracking-wide">+91 9935815825</span>
          </p>
          {/* WHATSAPP BUTTON */}
          <button className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition"
           onClick={() =>
         window.open("https://wa.me/919935815825", "_blank")}>
            <FaWhatsapp className="text-green-600" size={22} />
          </button>

          {/* CART ICON */}
          <NavLink to="/cart" className="relative text-gray-700 hover:text-cyan-500 transition">
            <ShoppingCart size={26} />
            <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {cartCount}
            </span>
          </NavLink>

          {isLogin ? (
          <div className="relative">
          {/* USER ICON */}
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center hover:bg-blue-600 transition shadow-sm"
          >
            {/* <User className="text-cyan-700" size={20} /> */}
            <p className="font-semibold text-2xl text-white ">{user.name.charAt().toUpperCase()}</p>
          </button>

    {/* DROPDOWN */}
    {showProfile && (
      <div className="absolute right-0 mt-4 w-56 bg-white backdrop-blur-xl rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-cyan-500 p-3 z-50">
  
  <NavLink
    to="/profile"
    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition duration-300 font-medium"
  >
    👤 Profile
  </NavLink>

  <button
    onClick={handleLogout}
    className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition duration-300 font-medium mt-2"
  >
    🚪 Logout
  </button>
</div>
    )}
        </div>
        ) : (
            <NavLink
              to="/login"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2.5 rounded-xl transition shadow-md hover:scale-105"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
     {menuOpen && (
  <>
    {/* OVERLAY */}
    <div
      className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      onClick={() => setMenuOpen(false)}
    ></div>

    {/* SIDEBAR */}
    <div className="md:hidden fixed top-0 right-0 h-screen w-[82%] max-w-sm bg-white z-50 shadow-[0_10px_50px_rgba(0,0,0,0.25)] flex flex-col rounded-l-3xl overflow-hidden animate-slideIn">

      {/* TOP HEADER */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-6 text-white">
        
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Droplets size={28} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                AquaFlow
              </h1>

              <p className="text-sm text-cyan-100">
                Pure Water Supply
              </p>
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* MENU LINKS */}
      {/* MENU LINKS */}
<div className="flex flex-col px-5 py-8 gap-1/3">

  <NavLink
    to="/"
    className="flex items-center gap-3 px-5 py-4 rounded-2xl text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition font-medium"
    onClick={() => setMenuOpen(false)}
  >
    🏠 Home
  </NavLink>

  <NavLink
    to="/products"
    className="flex items-center gap-3 px-5 py-4 rounded-2xl text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition font-medium"
    onClick={() => setMenuOpen(false)}
  >
    💧 Products
  </NavLink>

  <NavLink
    to="/about"
    className="flex items-center gap-3 px-5 py-4 rounded-2xl text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition font-medium"
    onClick={() => setMenuOpen(false)}
  >
    ℹ About
  </NavLink>

  {/* ADMIN DASHBOARD */}
  {user?.role === "admin" && (
    <NavLink
      to="/dashboard"
      className="flex items-center gap-3 px-5 py-4 rounded-2xl text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition font-medium"
      onClick={() => setMenuOpen(false)}
    >
      📊 Dashboard
    </NavLink>
  )}

  <NavLink
    to="/cart"
    className="flex items-center gap-3 px-5 py-4 rounded-2xl text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition font-medium"
    onClick={() => setMenuOpen(false)}
  >
    <ShoppingCart size={20} />
    Cart
  </NavLink>

</div>

      {/* CONTACT BUTTONS */}
      <div className="px-5 mt-2">
        <div className="grid grid-cols-2 gap-4">
          
          <button className="bg-cyan-100 hover:bg-cyan-200 text-cyan-700 py-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition font-medium"
            onClick={() => window.location.href = "tel:+919876543210"}>
            <Phone size={20} />
            Call
          </button>

          <button className="bg-green-100 hover:bg-green-200 text-green-700 py-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition font-medium"
            onClick={() =>
    window.open("https://wa.me/919935815825", "_blank")
  } >
             <FaWhatsapp className="text-green-600" size={22} />
            WhatsApp
          </button>
        </div>
      </div>

      {/* LOGIN / LOGOUT */}
     {/* LOGIN / PROFILE / LOGOUT */}
<div className="mt-auto p-5">
  {isLogin ? (
    <div className="space-y-4">
      
      {/* PROFILE BUTTON */}
      <NavLink
        to="/profile"
        onClick={() => setMenuOpen(false)}
        className="w-full bg-cyan-50 hover:bg-cyan-100 text-cyan-700 py-4 rounded-2xl transition flex items-center justify-center gap-3 font-semibold shadow-sm"
      >
        <User size={20} />
        Profile
      </NavLink>

      {/* LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:scale-[1.02] text-white py-4 rounded-2xl transition shadow-lg font-semibold"
      >
        Logout
      </button>
    </div>
  ) : (
    <NavLink
      to="/login"
      className="block text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] text-white py-4 rounded-2xl transition shadow-lg font-semibold"
      onClick={() => setMenuOpen(false)}
    >
      Login
    </NavLink>
  )}
</div>
    </div>
  </>
)}
    </nav>
  );
}

export default Navbar;