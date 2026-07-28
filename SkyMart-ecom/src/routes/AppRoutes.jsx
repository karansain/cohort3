import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'
import ProtectedRoute from './ProtectedRoute'
import PublicRoutes from './PublicRoutes'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ShopPage from '../pages/ShopPage'
import ProductDetailPage from '../pages/ProductDetailPage'

const AppRoutes = () => {

   let router = createBrowserRouter([
    {
        path:"/",
        element:<PublicRoutes/>,
        children:[
            {
                path:"",
                element:<AuthLayout/>,
                children:[
                {
                    path:"",
                    element:<Login/>
                },
                {
                    path:"register",
                    element:<Register/>
                }
        ]
            }

        ]
    },
    {
        path:"/main",
        element:<ProtectedRoute/>,
        children:[
            {
                path:"",
                element:<MainLayout/>,
                children:[
                    {
                        path:"",
                        element:<HomePage/>,
                    },
                    {
                        path:"about",
                        element:<AboutPage/>,
                    },
                    {
                        path:"shop",
                        element:<ShopPage/>,
                    },
                    {
                        path:"detail/:id",
                        element:<ProductDetailPage/>
                    },
                ]
            }
    ]
    }
   ])  
  return <RouterProvider router={router} />
}

export default AppRoutes