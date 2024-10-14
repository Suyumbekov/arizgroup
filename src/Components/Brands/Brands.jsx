import React, { useEffect } from "react";
import "./brands.css";
import "./sliderBrands.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collapsible from "react-collapsible";
import brandsData from "./brandsData";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Brands = () => {
  const { t } = useTranslation(["brands"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng"?.length >= 2)) {
      i18next.changeLanguage("en");
    }
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      <section className="brands" id="brands">
        <div className="sliderLogo">
          <h2 data-aos="fade-down" data-aos-duration="2000">
            {t("brandTitle")}
          </h2>
          <Slider {...settings} className="slog">
            <div className="logoBrands">
              <img src="./images/brands/cat.svg" alt="logoBrands" />
            </div>
            <div className="logoBrands">
              <img src="./images/brands/komatsu-3.svg" alt="logoBrands" />
            </div>
            <div className="logoBrands">
              <img src="./images/brands/liebherr.svg" alt="logoBrands"/>
            </div>
            <div className="logoBrands">
              <img src="./images/brands/isuzu-2.svg" alt="logoBrands"/>
            </div>
            <div className="logoBrands">
              <img src="./images/brands/bobcat-3.svg" alt="logoBrands"/>
            </div>
            <div className="logoBrands">
              <img src="./images/brands/sandvik-2.svg" alt="logoBrands"/>
            </div>
            <div className="logoBrands">
              <img src="./images/brands/kubota-logo.svg" alt="logoBrands"/>
            </div>
            <div className="logoBrands">
              <img src="./images/brands/hitachi-2.svg" alt="logoBrands"/>
            </div>
            <div className="logoBrands">
              <img src="./images/brands/bosch.svg" alt="logoBrands"/>
            </div>
            <div className="logoBrands">
              <img src="./images/brands/linde-1.svg" alt="logoBrands"/>
            </div>
            <div className="logoBrands">
              <img src="./images/brands/allen-bradley-63428.svg" alt="logoBrands"/>
            </div>
            <div className="logoBrands">
              <img src="./images/brands/hilti-1.svg" alt="logoBrands" />
            </div>
            <div className="logoBrands">
              <img src="./images/brands/Dewalt.svg" alt="logoBrands"/>
            </div>
            <div className="logoBrands">
              <img src="./images/brands/bridgestone-26989.svg" alt="logoBrands"/>
            </div>
          </Slider>
        </div>
        <div className="collapse" data-aos="fade-up">
          <Collapsible trigger={t("more")} className="trigger">
            <div className="imageContainer" data-aos="fade-down">
              {brandsData.map((value, index) => {
                return (
                  <div key={index}>
                    <img
                      src={value}
                      alt=""
                      data-aos="fade-up"
                      data-aos-duration="4000"
                    />
                  </div>
                );
              })}
            </div>
          </Collapsible>
        </div>
      </section>
    </>
  );
};

export default Brands;
