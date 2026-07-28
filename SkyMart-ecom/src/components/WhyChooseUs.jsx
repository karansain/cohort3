import React from "react";
import {
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            We provide the best shopping experience with quality products,
            fast delivery and reliable customer support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center">
              <FaShippingFast className="text-4xl text-indigo-600" />
            </div>

            <h3 className="text-xl font-semibold mt-6">
              Fast Delivery
            </h3>

            <p className="text-gray-500 mt-3">
              Get your orders delivered quickly and safely to your doorstep.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <FaShieldAlt className="text-4xl text-green-600" />
            </div>

            <h3 className="text-xl font-semibold mt-6">
              Secure Payment
            </h3>

            <p className="text-gray-500 mt-3">
              Your payments are protected with trusted and secure gateways.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 mx-auto rounded-full bg-yellow-100 flex items-center justify-center">
              <FaUndoAlt className="text-4xl text-yellow-500" />
            </div>

            <h3 className="text-xl font-semibold mt-6">
              Easy Returns
            </h3>

            <p className="text-gray-500 mt-3">
              Hassle-free returns and refunds for a smooth shopping experience.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 mx-auto rounded-full bg-pink-100 flex items-center justify-center">
              <FaHeadset className="text-4xl text-pink-600" />
            </div>

            <h3 className="text-xl font-semibold mt-6">
              24/7 Support
            </h3>

            <p className="text-gray-500 mt-3">
              Our support team is always available whenever you need help.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;