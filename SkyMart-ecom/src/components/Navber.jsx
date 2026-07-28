import React, { useContext, useState } from "react";
import {
  FiMenu,
  FiX,
  FiUser,
  FiShoppingCart,
  FiLogOut,
} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let {setLoggedinUser, setIsCartOpen} = useContext(Auth)
  let navigate = useNavigate()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 onClick={() => {navigate("/")}} className="text-2xl font-bold text-blue-600 cursor-pointer">
          Sky Mart
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <NavLink to={"/main"} className={({isActive}) => isActive? "hover:text-blue-600 cursor-pointer transition text-yellow-300" :"hover:text-blue-600 cursor-pointer transition"} end>
            Home
          </NavLink>
          <NavLink to={"/main/shop"} className={({isActive}) => isActive? "hover:text-blue-600 cursor-pointer transition text-yellow-300" :"hover:text-blue-600 cursor-pointer transition"}>
            Shop
          </NavLink>
          <NavLink to={"/main/about"} className={({isActive}) => isActive? "hover:text-blue-600 cursor-pointer transition text-yellow-300" :"hover:text-blue-600 cursor-pointer transition"}>
            About
          </NavLink>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 text-2xl text-gray-700">
          <FiUser className="cursor-pointer hover:text-blue-600 transition" />
          <FiShoppingCart onClick={() => setIsCartOpen(true)} className="cursor-pointer hover:text-blue-600 transition" />
          <FiLogOut onClick={()=>{
            localStorage.removeItem("loggedInUser")
            toast.warn("User LoggedOut")
            setLoggedinUser(null)
            

            }} className="cursor-pointer hover:text-red-500 transition" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium text-gray-700">
            <li onClick={() => {
              navigate("/main")
              setMenuOpen(false)
            }} className="hover:text-blue-600 cursor-pointer">Home</li>
            <li onClick={() => {
              navigate("/main/shop")
              setMenuOpen(false)
            }} className="hover:text-blue-600 cursor-pointer">Shop</li>
            <li onClick={() => {
              navigate("/main/about")
              setMenuOpen(false)
            }} className="hover:text-blue-600 cursor-pointer">About</li>

            <div className="flex gap-6 text-2xl pt-2">
              <FiUser className="cursor-pointer hover:text-blue-600" />
              <FiShoppingCart onClick={() => {
                setIsCartOpen(true)
                setMenuOpen(false)
              }} className="cursor-pointer hover:text-blue-600" />
              <FiLogOut onClick={()=>{
                localStorage.removeItem("loggedInUser")
                toast.warn("User LoggedOut")
                setLoggedinUser(null)
                setMenuOpen(false)
              }} className="cursor-pointer hover:text-red-500" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;