import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">

        <span className="uppercase tracking-widest text-sm font-medium">
          Stay Updated
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Subscribe to Our Newsletter
        </h2>

        <p className="mt-5 text-lg text-gray-200 max-w-2xl mx-auto">
          Get the latest product updates, exclusive offers, and special
          discounts delivered straight to your inbox.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-105 px-5 py-4 rounded-xl bg-white text-gray-800 outline-none"
          />

          <button className="w-full sm:w-auto bg-black hover:bg-gray-900 transition px-8 py-4 rounded-xl font-semibold">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;