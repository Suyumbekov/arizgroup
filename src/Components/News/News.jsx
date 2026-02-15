import React, { useEffect } from "react";
import Slider from "react-slick";
import "./news.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation(["news"]);

  useEffect(() => {
    const language = localStorage.getItem("i18nextLng");
    if (language?.length >= 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2200,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="news">
      <div className="newsHeading">
        <h2 data-aos="fade-down" data-aos-duration="2000">
          {t("newsTitle")}
        </h2>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {t("news", { returnObjects: true }).map((newsItem) => (
            <div key={newsItem.id} className="news-card-wrapper">
              <div className="news-card">
                <div className="news-images">
                  {newsItem.media && Array.isArray(newsItem.media)
                    ? newsItem.media.map((mediaUrl, index) => (
                        <img
                          key={index}
                          src={mediaUrl}
                          alt="news"
                          className={`news-image ${newsItem.class} ${
                            newsItem.media.length === 1 ? "single" : "double"
                          }`}
                        />
                      ))
                    : null}
                </div>

                <h3 className="news-title">{newsItem.title}</h3>
                <p className="news-description">{newsItem.description}</p>
                <p className="news-date">{newsItem.date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
