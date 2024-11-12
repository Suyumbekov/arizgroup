import React from "react";
import Slider from "react-slick";
import "./dealers.css";

function Dealers() {
  const settings = {
    className: "center",
    centerMode: true,
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 1200,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
            <img src="images/mtg.jpg" alt="" />
          </div>
          <div>
            <img src="images/guney.jpg" alt="" />
          </div>
          <div>
            <img src="images/mtg.jpg" alt="" />
          </div>
          <div>
            <img src="images/huahang.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Dealers;
