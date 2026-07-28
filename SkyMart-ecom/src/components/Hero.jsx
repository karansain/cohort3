import React from "react";
import { useNavigate } from "react-router";

const Hero = () => {

  let navigate = useNavigate()
  return (
    <section className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="text-center lg:text-left text-white flex-1">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            New Collection 2026
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Discover Your <br />
            Perfect Style
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-xl">
            Explore premium fashion, electronics, accessories and everything
            you love at unbeatable prices.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={()=> navigate("/main/shop")} className="bg-white text-indigo-600 font-semibold px-7 py-3 rounded-lg hover:bg-gray-100 transition">
              Shop Now
            </button>

            <button onClick={()=> navigate("/main/about")} className="border border-white px-7 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
              Learn More
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
            alt="Hero"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;