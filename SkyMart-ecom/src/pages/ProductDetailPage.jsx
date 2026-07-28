import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { api } from '../config/axioxInstence'
import { Camera, ChevronRight, Heart, RotateCcw, Share2, ShieldCheck, ShoppingCart, Star, Tag, Truck } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { ToastContainer, toast } from 'react-toastify'

const ProductDetailPage = () => {

    const [singleProductData, setSingleProductData] = useState({})
    let {id} = useParams()
    console.log(singleProductData)

    let getSingleProduct = async () => {
        try {
            let res = await api.get(`/products/${id}`)
            setSingleProductData(res.data)
        } catch (error) {
            console.log("error is", error)
        }
    }

    
    useEffect(() => {
      getSingleProduct()
    
      
    }, [])


    let {addToCart} = useCart()
    
   



  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-7 flex items-center gap-2 text-sm text-slate-500">
          <span className="transition hover:text-violet-600">Home</span>
          <ChevronRight className="h-4 w-4" />
          <span className="transition hover:text-violet-600">Shop</span>
          <ChevronRight className="h-4 w-4" />
          <span className="max-w-45 truncate font-medium capitalize text-slate-800 sm:max-w-sm">
            {singleProductData.category || "Product"}
          </span>
        </nav>

        {!singleProductData.id ? (
          /* Loading UI */
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="aspect-square animate-pulse rounded-4xl bg-slate-200"></div>
            <div className="space-y-5 py-4">
              <div className="h-5 w-28 animate-pulse rounded-full bg-slate-200"></div>
              <div className="h-12 w-full animate-pulse rounded-xl bg-slate-200"></div>
              <div className="h-12 w-40 animate-pulse rounded-xl bg-slate-200"></div>
              <div className="h-28 w-full animate-pulse rounded-2xl bg-slate-200"></div>
            </div>
          </div>
        ) : (
          <main className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Product image section */}
            <section>
              <div className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-4xl border border-slate-200 bg-white p-10 shadow-sm sm:p-14">
                <span className="absolute left-5 top-5 rounded-full bg-violet-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-violet-700">
                  {singleProductData.category}
                </span>

                {/* Favorite button */}
                <button
                  type="button"
                  aria-label="Add to favorites"
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
                >
                  <Heart className="h-5 w-5" />
                </button>

                <img
                  src={singleProductData.image}
                  alt={singleProductData.title}
                  className="h-[75%] w-[75%] object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-center justify-end">
                {/* Find similar button */}
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                >
                  <Camera className="h-4 w-4" />
                  Find Similar
                </button>
              </div>
            </section>

            {/* Product information section */}
            <section className="flex flex-col lg:py-3">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
                    <Tag className="h-4 w-4" />
                    {singleProductData.category}
                  </p>
                  <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.7rem]">
                    {singleProductData.title}
                  </h1>
                </div>

                {/* Share button */}
                <button
                  type="button"
                  aria-label="Share product"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

              {/* Product rating */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${
                        index < Math.round(singleProductData.rating?.rate || 0)
                          ? "fill-amber-400 text-amber-400"
                          : "fill-slate-200 text-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-slate-800">
                  {singleProductData.rating?.rate}
                </span>
                <span className="text-sm text-slate-500">
                  ({singleProductData.rating?.count} customer reviews)
                </span>
              </div>

              {/* Product price */}
              <div className="mt-7 flex items-end gap-3">
                <span className="text-4xl font-bold tracking-tight text-slate-950">
                  ${singleProductData.price}
                </span>
              </div>

              {/* Description */}
              <div className="mt-8 border-y border-slate-200 py-7">
                <h2 className="text-lg font-bold text-slate-900">
                  Product details
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-600">
                  {singleProductData.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {/* Add to cart button */}
                <button
                onClick={()=> {addToCart(singleProductData)}}
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>

                {/* Buy now button */}
                <button
                onClick={()=>{
                    toast.success("Your Order is Confirmed")
                }}
                  type="button"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                >
                  Buy Now
                </button>
              </div>

              {/* Shopping benefits */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <Truck className="h-5 w-5 text-violet-600" />
                  <p className="mt-3 text-sm font-semibold text-slate-800">Fast delivery</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <ShieldCheck className="h-5 w-5 text-violet-600" />
                  <p className="mt-3 text-sm font-semibold text-slate-800">Secure shopping</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <RotateCcw className="h-5 w-5 text-violet-600" />
                  <p className="mt-3 text-sm font-semibold text-slate-800">Easy returns</p>
                </div>
              </div>
            </section>
          </main>
        )}
      </div>
    </div>
  )
}

export default ProductDetailPage
