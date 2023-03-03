import React, { useRef } from 'react'
import './navbar.css'

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav");
    navbar.classList.toggle("active", window.scrollY > 10);
  });

  const defaultTitle = useRef()
  console.log(defaultTitle)
  return (
    <>
       <nav className='nav'>
        <div className="logo">
            <img src="./images/logo.png" alt="" />
        </div>
        <div className='navbar'>
            <ul>
                <li><a href="/">Home</a> </li>
                <li><a href="/about">About Us</a></li>
                <li><a href="">Products</a>
                  <div className="subMenu">
                    <ul>
                      <li><a href="/ceramic-beads-steel-grinding">Ceramic Beads & Steel Grinding</a></li>
                      <li><a href="/chemicals">Chemicals</a></li>
                      <li><a href="/mineral-processing-consultancy">Mineral Processing Consultancy</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="/procurement-logistics-services">Procurement&Logistics Services</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
            </ul>
        </div>
       </nav>
    </>
  )
}

export default Navbar