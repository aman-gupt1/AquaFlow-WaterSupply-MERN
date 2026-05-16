import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate=useNavigate();
  // dummy data

  const products = [
  {
    id: 1,
    name: "Mineral Water Bottle",
    price: "₹40",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "20L Water Can",
    price: "₹120",
    image:
      "https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Water Purifier",
    price: "₹5999",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",
  },
];

  const features = [
    "100% Pure Water",
    "Fast Delivery",
    "Affordable Price",
    "24/7 Support",
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 min-h-[90vh] flex items-center px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Pure & Safe Water Delivered To Your Home
            </h1>

            <p className="text-lg text-gray-100 mb-8">
              We provide clean, healthy and affordable drinking water with
              reliable delivery services for homes and businesses.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-blue-600 px-7 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 cursor-pointer"
              onClick={()=>navigate("/products")}>
                Explore Products
              </button>

              <button className="border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              // src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop"
              src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2022/09/15230707/Number-Theory3.png"
              alt="water"
              className="rounded-3xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      

      {/* Featured Products */}
<section className="py-20 px-6 md:px-16 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Featured Products
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Experience premium quality purified water designed for
        freshness, health, and everyday hydration.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {products.map((item) => (
        <div
          key={item.id}
          className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
        >

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          {/* Overlay */}
      
          {/* Content */}
          <div className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-gray-800">
                {item.name}
              </h3>

              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">
                Premium
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Pure, refreshing and mineral-rich water crafted for
              healthy living and daily hydration.
            </p>

            <p className="text-blue-600 text-2xl font-bold">
              {item.price}
            </p>
          </div>

        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-600 text-center mb-12">
            We ensure the best quality and service for our customers.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-3xl text-center hover:bg-blue-100 transition duration-300 shadow-md"
              >
                <div className="text-5xl mb-4">💧</div>

                <h3 className="text-xl font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold mb-2">10K+</h2>
            <p className="text-lg">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-2">99%</h2>
            <p className="text-lg">Pure Water</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-2">24/7</h2>
            <p className="text-lg">Support</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-2">15+</h2>
            <p className="text-lg">Cities Covered</p>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Fresh & Pure Water Supply?
          </h2>

          <p className="text-lg mb-8 text-gray-100">
            Contact us today and get reliable water delivery services for your
            home and business.
          </p>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition duration-300">
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;