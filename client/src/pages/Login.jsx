import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Droplets } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../config/api";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${API}/auth/login`,{email,password,});
    if (res.data.success) {
      // USER STORE
      localStorage.setItem( "user", JSON.stringify(res.data.user));
      // localStorage me token save
      localStorage.setItem("token", res.data.token);

      navigate("/");
    }
  } catch (error) {
  
    alert(
      error.response?.data?.message || "Something went wrong"
    );
  }
};


  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 via-blue-200 to-cyan-300 px-4">

      <div className="w-full max-w-6xl bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-cyan-600 p-12 text-white relative overflow-hidden">

          <div className="absolute w-72 h-72 bg-cyan-400 rounded-full top-[-60px] left-[-60px] opacity-30"></div>

          <div className="absolute w-80 h-80 bg-blue-400 rounded-full bottom-[-80px] right-[-80px] opacity-30"></div>

          <div className="relative z-10 text-center">

            <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-lg">

              <Droplets size={50} />

            </div>

            <h1 className="text-5xl font-bold leading-tight">
              AquaFlow
            </h1>

            <p className="mt-5 text-cyan-100 text-lg max-w-sm">
              Smart and reliable water supply management system
              for better service and faster delivery.
            </p>

          </div>

        </div>



        {/* RIGHT SIDE */}
        <div className="bg-white p-8 sm:p-12 flex flex-col justify-center">

          <div className="mb-8">

            <h2 className="text-4xl font-bold text-gray-800">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue
            </p>

          </div>



          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-6">

            {/* EMAIL */}
            <div>

              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>

              <div className="flex items-center border border-gray-300 rounded-2xl px-4 focus-within:border-cyan-500 transition">

                <Mail className="text-cyan-600" size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-4 outline-none rounded-2xl"
                  onChange={(e)=>setEmail(e.target.value)}
                />

              </div>

            </div>



            {/* PASSWORD */}
            <div>

              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>

              <div className="flex items-center border border-gray-300 rounded-2xl px-4 focus-within:border-cyan-500 transition">

                <Lock className="text-cyan-600" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-3 py-4 outline-none rounded-2xl"
                  onChange={(e)=>setPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>



            {/* FORGOT PASSWORD */}
            <div className="flex justify-end">

              <button
                type="button"
                className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
              >
                Forgot Password?
              </button>

            </div>



            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg transition duration-300 hover:scale-[1.02]"
            >
              Login
            </button>

          </form>



          {/* FOOTER */}
          <p className="text-center text-gray-500 mt-8 text-sm">
            © 2026 AquaFlow Water Supply <NavLink to='/register' className="text-blue-500 font-bold underline ml-1">Register</NavLink>
          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;