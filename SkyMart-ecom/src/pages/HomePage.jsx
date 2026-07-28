import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import WhyChooseUs from '../components/WhyChooseUs'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Auth } from '../context/AuthContext'

const HomePage = () => {

  let {products} = useContext(Auth)


  return (
    <div>
      <Hero/>
      <Categories/>
      <FeaturedProducts products={products}/>
      <WhyChooseUs/>
      <Newsletter/>
    </div>
  )
}

export default HomePage