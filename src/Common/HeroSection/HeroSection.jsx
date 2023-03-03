import React, { useState } from "react";
import "./heroSection.css";
import { useLocation } from "react-router-dom";

const HeroSection = () => {
  const location = useLocation();


  return (
    <>
      <div className="hero">
        <div className="heroImage">
          <img
            src="https://www.prologsupply.co.uk/tema/img/genel/icsayfaust1.jpg"
            alt=""
          />
        </div>
        <div className="image-heading ">
          <h1>{location.pathname.split("/")[1]}</h1>
          <button>
            <a to="/"> Home / </a>
            <span>{location.pathname.split("/")[1]}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
