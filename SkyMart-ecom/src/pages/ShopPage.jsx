import React, { useContext, useEffect, useMemo } from 'react'
import ShopFilter from '../components/ShopFilter'
import ProductGrid from '../components/ProductGrid'
import { api } from '../config/axioxInstence'
import { Auth } from '../context/AuthContext'

const ShopPage = () => {

  let {products, setProducts, searchInp, selectedfilter, setselectedfilter, priceSort} = useContext(Auth);

  let getData = async () =>{
    try {
      let res = await api.get("/products")
    setProducts(res.data)
      
    } catch (error) {
      console.log("error is ->", error)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  const filteredProducts = useMemo(() => {
  const searchText = searchInp.trim().toLowerCase();

  return products.filter((product) =>
    product.title.toLowerCase().includes(searchText)
  );
  }, [products, searchInp]);

  const categoryFilteredProducts = filteredProducts.filter((product) => {
  return (
    selectedfilter === "all" ||
    product.category === selectedfilter
     );
    });

    let sortpriceproducts = [...categoryFilteredProducts]

        if(priceSort === "lowToHigh"){          
          sortpriceproducts.sort((a, b) => a.price - b.price)
        }

        if(priceSort === "highToLow"){
          sortpriceproducts.sort((a, b) => b.price - a.price)
        } 
        

  return (
    <div>
      <ShopFilter/>
      <ProductGrid products={sortpriceproducts}/>
    </div>
  )
}

export default ShopPage
