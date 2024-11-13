import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./companies.css";

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const items = [
    { id: 1, logo: "images/companies/altin.svg", title: "Alliance Altyn LLC" },
    {
      id: 2,
      logo: "images/companies/etibakyr.png",
      title: "Etibakir Tereksai LLC",
    },
    {
      id: 3,
      logo: "images/companies/kazminerals.png",
      title: "KAZ Minerals Bozymchak LLC",
    },
    {
      id: 4,
      logo: "images/companies/chemonics.png",
      title: "Chemonics International Inc. in the Kyrgyz Republic",
    },
    { id: 5, logo: "images/companies/giz.gif", title: "GIZ Kyrgyzstan" },
    {
      id: 6,
      logo: "images/companies/GE.svg",
      title:
        "Toktogul Branch Office of General Electric Hydro France in Kyrgyzstan",
    },
    {
      id: 7,
      logo: "images/companies/manas.png",
      title: "Kyrgyz-Turkish Manas University",
    },
  ];

  return (
    <div className="wrapper">
      <div className="carousel-container">
        <h2 className="companies-title">Companies we work with:</h2>
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.logo} alt={item.title} className="carousel-logo" />
              <h3 className="carousel-title">{item.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Companies;
