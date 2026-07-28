import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const PublicRoutes = () => {
    let { loggedinUser } =useContext(Auth);

    if(loggedinUser){
       return <Navigate to={"/main"}/>
    }


  return <Outlet/>
}

export default PublicRoutes