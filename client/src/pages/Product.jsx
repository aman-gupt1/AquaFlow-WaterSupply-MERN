import React, { useEffect, useState } from "react";
import { ShoppingCart, Star, PackageCheck } from "lucide-react";
import axios from "axios";
import { API } from "../config/api";

const Products = () => {
  const [products,setProducts]=useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
     const getProducts = async () => {
  try {
    const res = await axios.get(
      `${API}/products`
    );

    setProducts(res.data.products || []);
    setLoading(false);

  } catch (error) {
    
    setLoading(false);
   
setError("Failed To Fetch Products");
  }
};
getProducts();
  },[])

// add to card logic here
const handleAddToCart = async (item) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${API}/cart/add`,{productId: item._id,quantity: 1},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    alert("Product Added To Cart");
  } catch (error) {
    
    alert(
      error?.response?.data?.message ||
      "Failed To Add Product"
    );

  }

};


  if (loading) {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-cyan-600">
        Loading Products...
      </h1>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-16 px-6 md:px-16">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-cyan-600 font-semibold uppercase tracking-widest mb-3">
          AquaFlow Products
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Pure Water Products
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
          Explore our premium water products designed for healthy and safe
          living with trusted quality and affordable pricing.
        </p>
      </div>

              {error && (
          <div className="text-center mb-8">
            <p className="text-red-500 font-semibold text-lg">
              {error}
            </p>
          </div>
        )}
                  {products.length === 0 && !loading && (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-600">
              No Products Found
            </h1>
          </div>
        )}
      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

  {products.map((item) => (
    <div
      key={item._id}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2 border border-cyan-100"
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.productName}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x300?text=No+Image";
          }}
          className="w-full h-52 md:h-56 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* STOCK BADGE */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1
          ${
            item.stock > 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <PackageCheck size={14} />
          {item.stock > 0 ? "In Stock" : "Out of Stock"}
        </div>

        {/* RATING */}
        <div className="absolute top-3 right-3 bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
          <Star size={12} fill="white" />
          4.8
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">

        {/* TITLE + PRICE */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
            {item.productName}
          </h2>

          <p className="text-cyan-600 font-bold text-xl whitespace-nowrap">
            ₹{item.price}
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 leading-6 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* STOCK */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Available Stock</span>

            <span>{item.stock}</span>
          </div>

          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full"
              style={{
                width: `${Math.max(
                  0,
                  Math.min(item.stock, 100)
                )}%`,
              }}
            ></div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2">

          <button
            disabled={item.stock === 0}
            onClick={() => handleAddToCart(item)}
            className={`flex-1 py-2.5 rounded-xl font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition duration-300 cursor-pointer
            ${
              item.stock === 0
                ? "bg-gray-300 cursor-not-allowed text-gray-500"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-[1.02]"
            }`}
          >
            <ShoppingCart size={16} />
            Add To Cart
          </button>

          <button className="px-4 py-2.5 rounded-xl border border-cyan-200 hover:bg-cyan-50 transition duration-300 text-cyan-700 text-sm font-medium">
            View
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Products;