import React, { useContext } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";

const ProductCard = ({ product }) => {

  let { addToCart } = useCart()

  let navigate = useNavigate()

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">

      {/* Image */}
      <div onClick={() => {navigate(`/main/detail/${product.id}`)}} className="h-64 bg-gray-100 p-6 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 onClick={() => {navigate(`/main/detail/${product.id}`)}} className="text-lg font-semibold mt-4 line-clamp-2 min-h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />

            <span className="font-medium">
              {product.rating.rate}
            </span>

            <span className="text-gray-400 text-sm">
              ({product.rating.count} Reviews)
            </span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-6">

          <h3 className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </h3>

          <button
            onClick={()=>{addToCart(product)}}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl transition"
          >
            <FaShoppingCart />
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;