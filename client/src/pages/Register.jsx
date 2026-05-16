import React, { useState } from "react";

import {Eye,EyeOff,Mail,Lock,Droplets,User,Phone,MapPin,} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../config/api";

function Register() {

  const [showPassword, setShowPassword] = useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [address,setAddress]=useState("");
  const navigate = useNavigate();


const handleRegister= async(e)=>{
e.preventDefault();
try {
    const userData={name, email, password, phone, address};
    const res=await axios.post(`${API}/auth/register`,userData);

    if (res.data.success) {
      // redirect
      localStorage.setItem("token", res.data.token);
      localStorage.setItem( "user", JSON.stringify(res.data.user));
      navigate("/");
    }
} catch (error) {
    alert("Something went wrong");
}
}


  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 via-blue-200 to-cyan-300 px-4 py-10">

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
              Join our smart water supply management system
              for fast and trusted delivery service.
            </p>

          </div>

        </div>



        {/* RIGHT SIDE */}
        <div className="bg-white p-8 sm:p-12 flex flex-col justify-center">

          <div className="mb-8">

            <h2 className="text-4xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Signup to continue
            </p>

          </div>



          {/* FORM */}
          <form  className="space-y-5" onSubmit={handleRegister}>

            {/* NAME */}
            <div>

              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>

              <div className="flex items-center border border-gray-300 rounded-2xl px-4 focus-within:border-cyan-500 transition">

                <User className="text-cyan-600" size={20} />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-4 outline-none rounded-2xl"
                   onChange={(e) => setName(e.target.value)} 
                />

              </div>

            </div>



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
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

            </div>



            {/* PHONE */}
            <div>

              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>

              <div className="flex items-center border border-gray-300 rounded-2xl px-4 focus-within:border-cyan-500 transition">

                <Phone className="text-cyan-600" size={20} />

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full px-3 py-4 outline-none rounded-2xl"
                  onChange={(e) => setPhone(e.target.value)}
                />

              </div>

            </div>



            {/* ADDRESS */}
            <div>

              <label className="block text-gray-700 font-medium mb-2">
                Address
              </label>

              <div className="flex items-start border border-gray-300 rounded-2xl px-4 focus-within:border-cyan-500 transition">

                <MapPin className="text-cyan-600 mt-4" size={20} />

                <textarea
                  rows="3"
                  placeholder="Enter your address"
                  className="w-full px-3 py-4 outline-none rounded-2xl resize-none"
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>

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
                  placeholder="Enter password"
                  className="w-full px-3 py-4 outline-none rounded-2xl"
                  onChange={(e) => setPassword(e.target.value)}
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



            {/* SIGNUP BUTTON */}
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg transition duration-300 hover:scale-[1.02]"
            >
              Create Account
            </button>

          </form>



          {/* FOOTER */}
          <p className="text-center text-gray-500 mt-8 text-sm">
            © 2026 AquaFlow Water Supply <NavLink to="/login" className="text-blue-500 font-bold underline ml-1">I've account</NavLink>
          </p>

        </div>

      </div>

    </div>

  );
}

export default Register;
