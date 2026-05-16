import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">
            AquaFlow
          </h2>

          <p className="text-gray-400 leading-7">
            We provide clean, safe and reliable water supply services
            for homes and businesses with fast delivery and quality assurance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link
                to="/"
                className="hover:text-cyan-400 transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-cyan-400 transition duration-300"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-cyan-400 transition duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-5">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              Home Water Delivery
            </li>

            <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              Mineral Water Supply
            </li>

            <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              Commercial Supply
            </li>

            <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
              Water Purification
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400">
            <p>📍 Bhopal, Madhya Pradesh</p>

            <p>📞 +91 9935815825</p>

            <p>✉ aman@aquaflow.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500 transition duration-300 cursor-pointer">
              F
            </div>

            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500 transition duration-300 cursor-pointer">
              I
            </div>

            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500 transition duration-300 cursor-pointer">
              T
            </div>

            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500 transition duration-300 cursor-pointer">
              L
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        <p>
          © 2026 AquaFlow. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;