import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";

const CreateProduct = () => {

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const navigate=useNavigate();

  const handleCreateProduct = async (e) => {
    e.preventDefault();
     const productData = {
        productName,
        price,
        image,
        stock,
        description,
      };

    try {
        const res=  await axios.post(`${API}/products`,productData);
       navigate("/dashboard/products");

      setProductName("");
      setPrice("");
      setImage("");
      setStock("");
      setDescription("");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-5 rounded-[24px] shadow-lg">

      {/* HEADING */}
      <h1 className="text-2xl font-bold text-gray-800 mb-5">
        Create Product
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleCreateProduct}
        className="space-y-4"
      >

        {/* PRODUCT NAME */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Product Name
          </label>

          <input
            type="text"
            placeholder="Enter Product Name"
            value={productName}
            onChange={(e) =>
              setProductName(e.target.value)
            }
            className="w-full border border-gray-200 focus:border-cyan-500 outline-none px-4 py-2.5 rounded-xl transition"
          />
        </div>

        {/* PRICE */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Price
          </label>

          <input
            type="number"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="w-full border border-gray-200 focus:border-cyan-500 outline-none px-4 py-2.5 rounded-xl transition"
          />
        </div>

        {/* IMAGE */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Image URL
          </label>

          <input
            type="text"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
            className="w-full border border-gray-200 focus:border-cyan-500 outline-none px-4 py-2.5 rounded-xl transition"
          />
        </div>

        {/* STOCK */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Stock
          </label>

          <input
            type="number"
            placeholder="Enter Product Stock"
            value={stock}
            onChange={(e) =>
              setStock(e.target.value)
            }
            className="w-full border border-gray-200 focus:border-cyan-500 outline-none px-4 py-2.5 rounded-xl transition"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>

          <textarea
            placeholder="Enter Product Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full border border-gray-200 focus:border-cyan-500 outline-none px-4 py-2.5 rounded-xl h-24 resize-none transition"
          ></textarea>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r cursor-pointer from-cyan-500 to-blue-600 hover:scale-[1.02] transition duration-300 text-white py-2.5 rounded-xl font-semibold shadow-md"
        >
          Create Product
        </button>

      </form>
    </div>
  );
};

export default CreateProduct;