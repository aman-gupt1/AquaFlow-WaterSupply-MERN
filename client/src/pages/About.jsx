import React from "react";
import {
  Droplets,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Users,
  Clock3,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Droplets size={30} />,
      title: "100% Pure Water",
      desc: "Advanced purification technology ensures clean and healthy drinking water.",
    },
    {
      icon: <Truck size={30} />,
      title: "Fast Delivery",
      desc: "Quick and reliable doorstep water delivery service for homes and businesses.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Quality Assurance",
      desc: "Every drop of water passes through strict quality and safety checks.",
    },
    {
      icon: <Clock3 size={30} />,
      title: "24/7 Support",
      desc: "Our support team is always available to assist you anytime.",
    },
  ];

  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
    },
    {
      number: "99%",
      label: "Water Purity",
    },
    {
      number: "15+",
      label: "Cities Covered",
    },
    {
      number: "24/7",
      label: "Customer Support",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 md:px-16 overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <Droplets size={20} />
            <span>Trusted Water Supply Company</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            About AquaFlow
          </h1>

          <p className="text-lg md:text-xl text-cyan-100 leading-8 max-w-3xl mx-auto">
            We are committed to delivering clean, safe, and sustainable water
            solutions with advanced purification systems and reliable delivery
            services.
          </p>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1200&auto=format&fit=crop"
              alt="water supply"
              className="rounded-[35px] shadow-2xl w-full"
            />

            <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-2xl p-6 border border-cyan-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700">
                  <BadgeCheck size={30} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    10+
                  </h3>
                  <p className="text-gray-500">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-cyan-600 font-semibold uppercase tracking-wide mb-4">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Delivering Pure Water With Care & Trust
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-6">
              AquaFlow is a modern water supply company focused on providing
              purified drinking water for homes, offices, restaurants, and
              industries. Our mission is to ensure healthy and accessible water
              for every customer.
            </p>

            <p className="text-gray-600 leading-8 text-lg mb-8">
              Using advanced filtration technologies and smart monitoring
              systems, we maintain the highest standards of purity and customer
              satisfaction.
            </p>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 px-6 md:px-16 bg-cyan-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-[35px] shadow-xl border border-cyan-100 hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-6">
              <Droplets size={32} />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              To provide clean, affordable, and sustainable water supply
              solutions while maintaining the highest standards of quality,
              reliability, and customer service.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[35px] shadow-xl border border-cyan-100 hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
              <Users size={32} />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              To become the most trusted and innovative water supply company by
              ensuring safe drinking water access for every home and business.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-600 font-semibold uppercase tracking-wide mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted By Thousands Of Customers
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-8 mb-16">
            We combine advanced purification technology with reliable delivery
            services to ensure safe and fresh drinking water every day.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-cyan-50 hover:bg-white border border-cyan-100 rounded-[30px] p-8 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                {item.number}
              </h2>

              <p className="text-cyan-100 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-600 font-semibold uppercase tracking-wide mb-4">
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            How We Deliver Pure Water
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Water Collection",
              "Advanced Purification",
              "Quality Testing",
              "Safe Delivery",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center mx-auto text-2xl font-bold mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold text-gray-800">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] px-10 py-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-16 -left-10 w-52 h-52 bg-white/10 rounded-full"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Need Reliable Water Supply Services?
            </h2>

            <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto leading-8 mb-10">
              Contact AquaFlow today and experience premium quality water
              delivery services for your home and business.
            </p>

            <button className="bg-white text-cyan-700 hover:scale-105 transition duration-300 px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
