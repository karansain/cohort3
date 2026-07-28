import React from "react";
import {
  FaUsers,
  FaShippingFast,
  FaAward,
  FaHeadset,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-linear-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold">About SkyMart</h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 leading-8">
            SkyMart is your trusted online shopping destination where quality,
            affordability, and customer satisfaction come together. We are
            dedicated to delivering premium products with a seamless shopping
            experience.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900"
              alt="About"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              We started with one simple mission—to make online shopping
              easier, faster, and more reliable for everyone. Every product in
              our collection is carefully selected to ensure quality and value.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Whether you're looking for fashion, electronics, or accessories,
              we strive to provide an enjoyable shopping experience from
              browsing to delivery.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
              <h2 className="text-4xl font-bold text-indigo-600">10K+</h2>
              <p className="mt-3 text-gray-500">Happy Customers</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
              <h2 className="text-4xl font-bold text-indigo-600">500+</h2>
              <p className="mt-3 text-gray-500">Products</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
              <h2 className="text-4xl font-bold text-indigo-600">50+</h2>
              <p className="mt-3 text-gray-500">Brands</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
              <h2 className="text-4xl font-bold text-indigo-600">24/7</h2>
              <p className="mt-3 text-gray-500">Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Why Choose Us
            </h2>

            <p className="mt-4 text-gray-500">
              We focus on quality, trust, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <FaShippingFast className="text-5xl text-indigo-600 mx-auto mb-5" />
              <h3 className="font-semibold text-xl">Fast Delivery</h3>
              <p className="mt-3 text-gray-500">
                Quick and secure shipping nationwide.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <FaAward className="text-5xl text-yellow-500 mx-auto mb-5" />
              <h3 className="font-semibold text-xl">Premium Quality</h3>
              <p className="mt-3 text-gray-500">
                Carefully selected high-quality products.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <FaUsers className="text-5xl text-green-600 mx-auto mb-5" />
              <h3 className="font-semibold text-xl">Trusted Community</h3>
              <p className="mt-3 text-gray-500">
                Thousands of satisfied customers trust us.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <FaHeadset className="text-5xl text-pink-600 mx-auto mb-5" />
              <h3 className="font-semibold text-xl">24/7 Support</h3>
              <p className="mt-3 text-gray-500">
                Friendly customer support whenever you need.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="bg-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">

          <h2 className="text-4xl font-bold">
            Our Mission
          </h2>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            Our mission is to provide customers with high-quality products,
            affordable prices, secure payments, and exceptional customer
            service while making online shopping simple and enjoyable.
          </p>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;