import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./hero.css";
import "./slider.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="hero">
        <Slider {...settings} className="slider">
          <div>
            <img
              src="https://www.prologsupply.co.uk/tema/img/slider/1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.prologsupply.co.uk/tema/img/slider/2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.prologsupply.co.uk/tema/img/slider/4.jpg"
              alt=""
            />
          </div>
        </Slider>
        <div className="sliderCaption">
          <div className="firstCaption">
            <div className="line"></div>
            <h1>ARIZ GROUP</h1>
            <div className="line"></div>
          </div>
          <div className="secondCaption">
           <p>Committed Your Success</p> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
