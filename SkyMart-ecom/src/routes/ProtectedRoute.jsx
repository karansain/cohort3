import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const ProtectedRoute = () => {
    let { loggedinUser } =useContext(Auth);

    if(!loggedinUser){
       return <Navigate to={"/"}/>
    }


  return <Outlet/>
}

export default ProtectedRoute