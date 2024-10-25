import React from "react";
import Slider from "react-slick";
import "./dealers.css";

function Dealers() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="dealers">
      <div className="dealersHeading">
        <h1 data-aos="fade-down" data-aos-duration="2000">
          WE ARE DEALERS OF COMPANIES:
        </h1>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="images/huahang.jpg" alt="" />
          </div>
          <div>
            <img src="images/mtg.jpg" alt="" />
          </div>
          <div>
            <img src="images/huahang.jpg" alt="" />
          </div>
          <div>
            <img src="images/mtg.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Dealers;
