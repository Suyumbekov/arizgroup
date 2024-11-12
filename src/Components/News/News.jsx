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
    slidesToShow: 2, // Number of cards to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    cssEase: "linear",
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
    <div className="news">
      <div className="newsHeading">
        <h1 data-aos="fade-down" data-aos-duration="2000">
          {t("newsTitle")}
        </h1>
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
