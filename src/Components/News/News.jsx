import React, { useEffect } from "react";
import Slider from "react-slick";
import "./news.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const newsData = [
  {
    id: 1,
    title: "Breaking News: Market hits all-time high",
    description:
      "The stock market has reached an all-time high today, boosting investor confidence...",
    image: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    id: 2,
    title: "Sports: Local team wins championship",
    description:
      "The local team won the championship in a thrilling finale yesterday...",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Weather: Storm expected this weekend",
    description:
      "A major storm is expected to hit the coast this weekend, officials have warned...",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Technology: New smartphone released",
    description:
      "The latest smartphone model has just been released and tech enthusiasts are buzzing...",
    image: "https://via.placeholder.com/300x200",
  },
];

const News = () => {
  const { t } = useTranslation(["news"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng"?.length >= 2)) {
      i18next.changeLanguage("en");
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
          {newsData.map((news) => (
            <div key={news.id} className="news-card-wrapper">
              <div className="news-card">
                <img src={news.image} alt={news.title} className="news-image" />
                <h3 className="news-title">{news.title}</h3>
                <p className="news-description">{news.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
