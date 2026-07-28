import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Auth } from "../context/AuthContext";

const ShopFilter = () => {

  let {searchInp, setSearchInp, selectedfilter, setselectedfilter, setPriceSort, priceSort} = useContext(Auth)


  let debounce = (fnc, delay) =>{
    let timer;
    return (...arg) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fnc(...arg);
      }, delay);
    };
  };

  let search = (val) =>{
    setSearchInp(val)
  }

  const debounceSearch = debounce(search, 500)




  return (
    <section className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Shop
          </h1>

          <p className="text-gray-500 mt-2">
            Browse our latest collection of premium products.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Search */}
          <div className="relative lg:col-span-2">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
            onChange={(e)=>{const val = e.target.value
              debounceSearch(val)
            }}

              type="text"
              placeholder="Search products..."
              className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Category */}
          <select value={selectedfilter} onChange={(e) => {setselectedfilter(e.target.value)}} className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>

          {/* Sort */}
          <select onChange={(e) => {setPriceSort(e.target.value)}} className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
            <option value={"noSort"}>Default Sorting</option>
            <option value={"lowToHigh"}>Price: Low to High</option>
            <option value={"highToLow"}>Price: High to Low</option>
          </select>

        </div>

      </div>
    </section>
  );
};

export default ShopFilter;