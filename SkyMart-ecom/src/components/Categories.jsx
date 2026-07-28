import React, { useContext } from "react";
import {
  FaLaptop,
  FaGem,
  FaMale,
  FaFemale,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

const Categories = () => {

  let {setselectedfilter, setSearchInp} = useContext(Auth)
  let navigate = useNavigate()

  let goToCategory = (category) => {
    setselectedfilter(category)
    setSearchInp("")
    navigate("/main/shop")
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Shop by Category
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Find your favorite products from our most popular categories.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div onClick={() => goToCategory("electronics")} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <FaLaptop className="text-3xl text-indigo-600" />
            </div>

            <h3 className="text-xl font-semibold">Electronics</h3>
            <p className="text-gray-500 mt-2">6 Products</p>
          </div>

          <div onClick={() => goToCategory("jewelery")} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <FaGem className="text-3xl text-pink-600" />
            </div>

            <h3 className="text-xl font-semibold">Jewelry</h3>
            <p className="text-gray-500 mt-2">4 Products</p>
          </div>

          <div onClick={() => goToCategory("men's clothing")} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <FaMale className="text-3xl text-yellow-500" />
            </div>

            <h3 className="text-xl font-semibold">Men&apos;s Clothing</h3>
            <p className="text-gray-500 mt-2">4 Products</p>
          </div>

          <div onClick={() => goToCategory("women's clothing")} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <FaFemale className="text-3xl text-green-600" />
            </div>

            <h3 className="text-xl font-semibold">Women&apos;s Clothing</h3>
            <p className="text-gray-500 mt-2">6 Products</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Categories;