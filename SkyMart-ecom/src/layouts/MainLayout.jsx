import React from 'react'
import Navbar from '../components/Navber'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import CardLayer from '../components/CardLayers'
const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <CardLayer/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default MainLayout
