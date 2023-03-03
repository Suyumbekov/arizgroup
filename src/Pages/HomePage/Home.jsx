import React from 'react'
import About from '../../Components/About/About'
import AboutService from '../../Components/AboutService/AboutService'
import Hero from '../../Components/Hero/Hero'
import Products from '../../Components/Products/Products'

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Products/>
        <AboutService/>
    </>
  )
}

export default Home