import React from "react";
import {LayoutDashboard,Package,ShoppingBag,Users,PlusCircle,LogOut,} from "lucide-react";

import {NavLink,Outlet,useNavigate,} from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  // NAV STYLE
  const navStyle = ({ isActive }) =>
    `flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 font-medium whitespace-nowrap ${
      isActive
        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
        : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">

      {/* MOBILE TOP MENU */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-cyan-100 shadow-sm">

        <div className="flex items-center gap-3 overflow-x-auto px-4 py-4 scrollbar-hide">

          <NavLink
            to="/dashboard"
            className={navStyle}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/products"
            className={navStyle}
          >
            <Package size={20} />
            Products
          </NavLink>

          <NavLink
            to="/dashboard/orders"
            className={navStyle}
          >
            <ShoppingBag size={20} />
            Orders
          </NavLink>

          <NavLink
            to="/dashboard/users"
            className={navStyle}
          >
            <Users size={20} />
            Users
          </NavLink>

          <NavLink
            to="/dashboard/create-product"
            className={navStyle}
          >
            <PlusCircle size={20} />
            Create Product
          </NavLink>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg whitespace-nowrap"
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>
      </div>

      <div className="flex">

        {/* DESKTOP SIDEBAR */}
        <div className="hidden lg:flex w-[290px] min-h-screen bg-white/90 backdrop-blur-xl border-r border-cyan-100 shadow-xl flex-col p-5 sticky top-0">

          {/* LOGO */}
          <div className="mb-10">

            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              AquaFlow
            </h1>

            <p className="text-gray-500 mt-2">
              Admin Dashboard
            </p>
          </div>

          {/* MENU */}
          <div className="space-y-3 flex-1">

            <NavLink
              to="/dashboard"
              className={navStyle}
            >
              <LayoutDashboard size={22} />
              Dashboard
            </NavLink>

            <NavLink
              to="/dashboard/products"
              className={navStyle}
            >
              <Package size={22} />
              Products
            </NavLink>

            <NavLink
              to="/dashboard/orders"
              className={navStyle}
            >
              <ShoppingBag size={22} />
              Orders
            </NavLink>

            <NavLink
              to="/dashboard/users"
              className={navStyle}
            >
              <Users size={22} />
              Users
            </NavLink>

            <NavLink
              to="/dashboard/create-product"
              className={navStyle}
            >
              <PlusCircle size={22} />
              Create Product
            </NavLink>
          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:scale-[1.02] text-white py-4 rounded-2xl transition shadow-xl font-semibold"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">

          <div className="bg-white/60 backdrop-blur-xl rounded-[35px] shadow-lg border border-white/50 min-h-full p-4 sm:p-6">
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;