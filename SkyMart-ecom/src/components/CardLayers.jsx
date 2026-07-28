import React, { useContext } from "react";
import {
  FiArrowRight,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import { Auth } from "../context/AuthContext";
import { ToastContainer,toast } from "react-toastify";

const CardLayer = () => {
  let {isCartOpen, setIsCartOpen, cartProducts, setCartProducts} = useContext(Auth)

  let updateCart = (updatedCart) => {
    setCartProducts(updatedCart)
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart))
  }

  let increaseQuantity = (id) => {
    let updatedCart = cartProducts.map((item) => {
      if(item.id === id){
        return {...item, quantity: item.quantity + 1}
      }
      return item;
    })

    updateCart(updatedCart)
  }

  let decreaseQuantity = (id) => {
    let updatedCart = cartProducts.map((item) => {
      if(item.id === id){
        return {...item, quantity: item.quantity - 1}
      }
      return item;
    }).filter((item) => item.quantity > 0)

    updateCart(updatedCart)
  }

  let removeProduct = (id) => {
    let updatedCart = cartProducts.filter((item) => item.id !== id)
    updateCart(updatedCart)
  }

  let totalItems = cartProducts.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  let subtotal = cartProducts.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
  

  return (
    <div
      className={`fixed inset-0 z-60 transition-all duration-300 ${
        isCartOpen ? "visible" : "invisible"
      }`}
    >
      {/* Dark background overlay */}
      <div
      onClick={()=> setIsCartOpen(false)}
        className={`absolute inset-0 bg-slate-950/45 backdrop-blur-[2px] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Right side cart drawer */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cart header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <FiShoppingBag className="text-xl" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">Your Cart</h2>
              <p className="text-sm text-slate-500">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            </div>
          </div>

          {/* Close cart button */}
          <button
          onClick={() => setIsCartOpen(false)}
            type="button"
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Cart products area */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {cartProducts.length > 0 ? (
          <div className="space-y-4">
            {cartProducts.map((item) => (
            <article key={item.id} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              {/* Product image */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-slate-100 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Product information */}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">
                      {item.category}
                    </p>
                    <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  {/* Remove product button */}
                  <button
                    onClick={() => removeProduct(item.id)}
                    type="button"
                    aria-label="Remove product"
                    className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    <FiTrash2 />
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between gap-3">
                  {/* Product quantity buttons */}
                  <div className="flex items-center rounded-lg border border-slate-200">
                    {/* Decrease quantity button */}
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      type="button"
                      aria-label="Decrease quantity"
                      className="p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <FiMinus />
                    </button>

                    {/* Product quantity */}
                    <span className="min-w-8 text-center text-sm font-semibold text-slate-800">
                      {item.quantity}
                    </span>

                    {/* Increase quantity button */}
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      type="button"
                      aria-label="Increase quantity"
                      className="p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <FiPlus />
                    </button>
                  </div>

                  {/* Product price */}
                  <p className="font-bold text-indigo-600">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </article>
            ))}
          </div>

          ) : (
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
              <FiShoppingBag className="text-4xl" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Your cart is empty
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Looks like you have not added anything to your cart yet.
            </p>

            {/* Continue shopping button */}
            <button
              onClick={() => setIsCartOpen(false)}
              type="button"
              className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Continue Shopping
            </button>
          </div>
          )}
        </div>

        {/* Cart total and checkout area */}
        <div className="border-t border-slate-200 bg-slate-50 px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-900">Subtotal</p>
              <p className="mt-1 text-xs text-slate-500">
                Shipping and taxes calculated at checkout
              </p>
            </div>

            {/* Cart subtotal */}
            <p className="text-2xl font-bold text-slate-900">${subtotal.toFixed(2)}</p>
          </div>

          {/* Checkout button */}
          <button
          onClick={() => {
            toast.success("Your Checkout Is Proceed")
          }}
            disabled={cartProducts.length === 0}
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Proceed to Checkout
            <FiArrowRight />
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CardLayer;