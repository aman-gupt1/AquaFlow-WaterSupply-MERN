import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Pencil,Trash2,Package,IndianRupee,Boxes,Plus,} from "lucide-react";
import axios from "axios";
import { API } from "../config/api";

const DashboardProducts = () => {
  const [products, setProducts] = useState([]);

  // get product
  const getProducts = async () => {
  try {
    const res = await axios.get(
      `${API}/products`
    );

    setProducts(res.data.products);

  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  getProducts();
}, []);

  // delete product 
  const handleDeleteProduct = async (id) => {
  try {

    const res = await axios.delete(`${API}/products/${id}`);

   

    // remove deleted product from UI
    setProducts(
      products.filter((item) => item._id !== id)
    );

    alert("Product Deleted Successfully");

  } catch (error) {
    console.log(error);

    alert("Delete Failed");
  }
};





  return (
    <div className="w-full">

      {/* TOP */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Products Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all products and stock details
          </p>
        </div>

        <Link
          to="/dashboard/create-product"
          className="w-fit flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition text-white px-6 py-4 rounded-2xl shadow-lg font-semibold">
          <Plus size={20} /> Add Product</Link>
        </div>


      {/* DESKTOP TABLE */}
      <div className="hidden lg:block bg-white rounded-[35px] shadow-xl border border-cyan-100 overflow-hidden">

        <table className="w-full">
          <thead className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">

            <tr>

              <th className="p-6 text-left">
                Product
              </th>

              <th className="p-6 text-left">
                Price
              </th>

              <th className="p-6 text-left">
                Stock
              </th>

              <th className="p-6 text-left">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {products.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-cyan-50 transition"
              >

                {/* PRODUCT */}
                <td className="p-6">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                      <Package size={24} />
                    </div>

                    <div>
                      <h2 className="font-bold text-gray-800">
                        {item.productName}
                      </h2>

                      <p className="text-sm text-gray-500">
                        Product ID : #{item._id}
                      </p>
                    </div>

                  </div>
                </td>

                {/* PRICE */}
                <td className="p-6">

                  <div className="flex items-center gap-2 font-bold text-gray-800">

                    <IndianRupee size={18} />

                    {item.price}
                  </div>
                </td>

                {/* STOCK */}
                <td className="p-6">

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold">

                    <Boxes size={16} />

                    {item.stock} In Stock
                  </div>

                </td>

                {/* ACTIONS */}
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <Link
                      to={`/dashboard/update-product/${item._id}`}
                      className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 transition text-white px-5 py-3 rounded-2xl shadow-md">
                      <Pencil size={18} /> Edit </Link>

                    <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-white px-5 py-3 rounded-2xl shadow-md"
                      onClick={() => handleDeleteProduct(item._id)} >

                      <Trash2 size={18} /> Delete</button>
                  </div>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="lg:hidden space-y-5">

        {products.map((item) => (

          <div
            key={item._id}
            className="bg-white rounded-[30px] shadow-lg border border-cyan-100 overflow-hidden"
          >

            {/* TOP */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-5 text-white">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">

                  <Package size={28} />

                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    {item.productName}
                  </h2>

                  <p className="text-cyan-100 text-sm mt-1">
                    Product ID : #{item._id}
                  </p>

                </div>
              </div>
            </div>

            {/* BODY */}
            <div className="p-5 space-y-5">

              {/* PRICE */}
              <div className="flex items-center justify-between">

                <p className="text-gray-500 font-medium">
                  Price
                </p>

                <div className="flex items-center gap-1 text-xl font-bold text-gray-800">

                  <IndianRupee size={18} />

                  {item.price}

                </div>
              </div>

              {/* STOCK */}
              <div className="flex items-center justify-between">

                <p className="text-gray-500 font-medium">
                  Stock
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold">

                  <Boxes size={16} />

                  {item.stock}

                </div>
              </div>

              {/* ACTIONS */}
              <div className="grid grid-cols-2 gap-4 pt-2">

                <Link
                  to={`/dashboard/update-product/${item._id}`}
                  className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 transition text-white py-4 rounded-2xl shadow-md font-semibold"
                >
                  <Pencil size={18} />Edit</Link>

                <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition text-white py-4 rounded-2xl shadow-md font-semibold"
                onClick={() => handleDeleteProduct(item._id)}>
                  <Trash2 size={18} />Delete </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardProducts;