import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FaGoogle,
  FaFacebookF,
  FaEye,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { Navigate, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const Register = ({ setToggle }) => {

  const {regUsers , setRegUsers, setLoggedinUser} = useContext(Auth)


  let navigate = useNavigate()
  let {handleSubmit, register, formState:{errors}, reset} = useForm()
  let formSubmint = (data) => {
    let arr = [...regUsers, data]
     setRegUsers(arr);
     setLoggedinUser(data)
     localStorage.setItem("loggedInUser", JSON.stringify(data))
     localStorage.setItem("RegisteredUsers", JSON.stringify(arr));
     toast.success("User Registered Successfully");
    navigate("/main")

     reset();
  }

  


  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900 md:grid md:grid-cols-2">
      {/* Left column: register form */}
      <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-200">
              <FaShoppingBag size={20} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              Sky<span className="text-violet-600">Mart</span>
            </h1>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Create account
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-500">
            Join SkyMart and start your personalized shopping journey.
          </p>

          <form onSubmit={handleSubmit(formSubmint)} className="mt-8 space-y-4">
            {/* Name field */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Full Name
              </label>
              <div className="relative rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur-sm transition focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-100">
                <input
                {...register("name", {
                  required:"Name is required"
                })}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl bg-transparent p-4 pr-12 text-sm outline-none placeholder:text-slate-400"
                  
                />
                <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
              {errors.name && <p className="mt-2 text-sm font-semibold text-red-600">{errors.name.message}</p> }
            </div>

            {/* Email field */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Email Address
              </label>
              <div className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur-sm transition focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-100">
                <input
                {...register("email", {
                    required:"Email is required"
                  })}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-2xl bg-transparent p-4 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
              {errors.email && <p className="mt-2 text-sm font-semibold text-red-600">{errors.email.message}</p> }
            </div>

            {/* Password field */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Password
              </label>
              <div className="relative rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur-sm transition focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-100">
                <input
                {...register("password", {
                  required:"Password is required",
                  minLength:{
                    value:6,
                    massage:"minimum 6 charecter requaired"
                  }
                })}
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-2xl bg-transparent p-4 pr-12 text-sm outline-none placeholder:text-slate-400"
                />
                <button type="button" className="absolute inset-y-0 right-4 flex items-center text-slate-400 transition hover:text-violet-600">
                  <FaEye />
                </button>
              </div>
              {errors.password && <p className="mt-2 text-sm font-semibold text-red-600">{errors.password.message}</p> }
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-600">
              <input type="checkbox" className="mt-0.5 h-4 w-4 accent-violet-600" />
              <span>
                I agree to the{" "}
                <span className="cursor-pointer font-medium text-violet-600 hover:underline">
                  Terms & Conditions
                </span>
              </span>
            </label>

            {/* Register button */}
            <button className="w-full rounded-2xl bg-violet-600 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700">
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 flex items-center justify-center">
            <span className="w-full border-t border-slate-200"></span>
            <span className="absolute bg-[#f7f7fb] px-4 text-sm text-slate-400">
              Or continue with
            </span>
          </div>

          {/* Google button */}
          <button type="button" className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-4 font-medium text-slate-700 shadow-sm transition hover:border-violet-200 hover:bg-violet-50">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          <p onClick={() => navigate("/")} className="mt-6 cursor-pointer text-center text-sm text-slate-500">
            Already have an account?{" "}
            <span className="font-semibold text-violet-600 transition hover:text-violet-700 hover:underline">
              Sign In
            </span>
          </p>
        </div>
      </section>

      {/* Right column: shopping image and testimonial */}
      <section className="relative m-4 hidden min-h-[calc(100vh-2rem)] overflow-hidden rounded-4xl md:block">
        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1400"
          alt="SkyMart shopping"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/10 via-violet-950/10 to-slate-950/70"></div>

        <div className="absolute left-8 right-8 top-8 text-white lg:left-12 lg:right-12 lg:top-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">
            Start something new
          </p>
          <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight lg:text-5xl">
            Your next favorite find is waiting.
          </h2>
        </div>

        {/* Testimonial card — replace with your name, image and comment */}
        <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/20 bg-white/15 p-5 text-white shadow-2xl backdrop-blur-xl lg:bottom-12 lg:left-12 lg:right-auto lg:w-100">
          <div className="flex items-start gap-4">
            <img
              src="/src/assets/Risat-p.png"
              alt="Testimonial profile"
              className="h-12 w-12 rounded-2xl object-cover"
            />
            <div>
              <p className="font-semibold">Syed Risat</p>
              <p className="text-sm text-white/65">@sayed_risat</p>
              <p className="mt-3 text-sm leading-6 text-white/90">
                "All function and logic writed by me, and only ui created by the help of AI. Thank you for visiting 💜"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;