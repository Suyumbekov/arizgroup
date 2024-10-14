import React, { useEffect, useState } from "react";
import "./hero.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Hero = ({ host }) => {
  const [com, setCom] = useState("ARIZ GROUP");
  const { t } = useTranslation(["hero"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng"?.length >= 2)) {
      i18next.changeLanguage("en");
    }
    if (host === "kambros") {
      setCom("KAMBROS LLC");
    }
  }, [host]);

  return (
    <>
      <div className="hero" id="hero">
        <div className="heroImage"></div>
      <div className="hero" id="hero">
        <div className="heroImage"></div>
        <div className="sliderCaption">
          <div className="left">
            <div className="firstCaption">
              <div className="line"></div>
              <h1>{com}</h1>
              <div className="line"></div>
            </div>
            <div className="secondCaption">
              <p>YOUR SUPPLY CHAIN SOLUTIONS</p>
            </div>
          </div>
          <div className="right">
            <div
              className="description"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p>{com + t("description")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
