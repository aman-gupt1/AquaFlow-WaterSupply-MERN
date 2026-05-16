import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save, ImageIcon, Package2 } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {

  const { id } = useParams();
  const navigate=useNavigate();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  // REAL DATA HERE
  useEffect(() => {
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`${API}/products/${id}`);
      const product = res.data.product;
      setProductName(product.productName);
      setPrice(product.price);
      setImage(product.image);
      setStock(product.stock);
      setDescription(product.description);

    } catch (error) {
      console.log(error);
    }
  };
  getSingleProduct();
}, [id]);

const handleEditProduct = async (e) => {
  e.preventDefault();
  const updatedProduct = { productName, price, image, stock, description,};
  try {
    const res = await axios.put(`${API}/products/${id}`,updatedProduct);
   
    navigate("/dashboard/products")
    // HERE WE CAN APPLY TOSTIFY
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="max-w-4xl mx-auto">

      {/* TOP */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Update Product
        </h1>

        <p className="text-gray-500 mt-2">
          Edit and update your product details
        </p>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-[30px] shadow-2xl border border-cyan-100 overflow-hidden">

        <div className="grid lg:grid-cols-2">

          {/* LEFT PREVIEW */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 flex items-center justify-center">

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-[24px] shadow-xl w-full">

              <div className="flex items-center gap-3 mb-5 text-white">
                <ImageIcon size={22} />

                <h2 className="text-xl font-bold">
                  Product Preview
                </h2>
              </div>

              <div className="bg-white rounded-[22px] overflow-hidden shadow-xl">

                <img
                  src={image}
                  alt="Product"
                  className="w-full h-[240px] object-cover"
                />

                <div className="p-5">

                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {productName}
                  </h2>

                  <p className="text-cyan-600 text-2xl font-bold mb-3">
                    ₹{price}
                  </p>

                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Package2 size={18} />
                    Stock : {stock}
                  </div>

                  <p className="text-gray-500 text-sm leading-6">
                    {description}
                  </p>

                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-6 lg:p-7">


            {/* update product form here */}

            <form onSubmit={handleEditProduct}className="space-y-4">
              {/* PRODUCT NAME */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Product Name
                </label>

                <input
                  type="text"
                  value={productName}
                  onChange={(e) =>
                    setProductName(e.target.value)
                  }
                  className="w-full border border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none px-4 py-3 rounded-xl transition"
                />
              </div>

              {/* PRICE */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Price
                </label>

                <input
                  type="number"
                  value={price}
                  onChange={(e) =>
                    setPrice(e.target.value)
                  }
                  className="w-full border border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none px-4 py-3 rounded-xl transition"
                />
              </div>

              {/* IMAGE */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Image URL
                </label>

                <input
                  type="text"
                  value={image}
                  onChange={(e) =>
                    setImage(e.target.value)
                  }
                  className="w-full border border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none px-4 py-3 rounded-xl transition"
                />
              </div>

              {/* STOCK */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Stock
                </label>

                <input
                  type="number"
                  value={stock}
                  onChange={(e) =>
                    setStock(e.target.value)
                  }
                  className="w-full border border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none px-4 py-3 rounded-xl transition"
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  className="w-full border border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none px-4 py-3 rounded-xl h-24 resize-none transition"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition duration-300 text-white py-3 rounded-xl font-semibold shadow-lg"
              >
                <Save size={18} />
                Update Product
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;