import { Children, createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({children}) => {

    const [regUsers, setRegUsers] = useState(JSON.parse(localStorage.getItem("RegisteredUsers")) || []);
    const [loggedinUser, setLoggedinUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")));
    const [products, setProducts] = useState([])
    const [searchInp, setSearchInp] = useState("")
    const [selectedfilter, setselectedfilter] = useState("all")
    const [priceSort, setPriceSort] = useState("noSort")
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || [])

    return <Auth.Provider 
    value={
        {
            regUsers,
            setRegUsers,
            loggedinUser,
            setLoggedinUser,
            products,
            setProducts,
            searchInp,
            setSearchInp,
            selectedfilter,
            setselectedfilter,
            priceSort,
            setPriceSort,
            isCartOpen,
            setIsCartOpen,
            cartProducts,
            setCartProducts,



        }
    }>{children}</Auth.Provider>
}