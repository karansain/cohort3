import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

export const useCart = () => {
    let {cartProducts, setCartProducts, setIsCartOpen} = useContext(Auth)

  let addToCart = (product) => {
    let isProductExist = cartProducts.find((item) => item.id === product.id)
    let updatedCart;

    if(isProductExist){
      updatedCart = cartProducts.map((item) => {
        if(item.id === product.id){
          return {...item, quantity: item.quantity + 1}
        }
        return item;
      })
    }else{
      updatedCart = [...cartProducts, {...product, quantity: 1}]
    }

    setCartProducts(updatedCart)
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart))
    setIsCartOpen(true)
    toast.success("Product added to cart")
  }
    return{
        addToCart,
    }
}