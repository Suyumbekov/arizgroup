import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./companies.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Companies = () => {
  const { t } = useTranslation(["companies"]);

  useEffect(() => {
    const language = localStorage.getItem("i18nextLng");
    if (language?.length >= 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 1200,
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
        <h2
          className="companies-title"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          {t("companiesTitle")}
        </h2>
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
