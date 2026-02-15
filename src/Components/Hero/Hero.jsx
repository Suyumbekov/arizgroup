import React, { useEffect } from "react";
import "./hero.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { getBranding } from "../../domainConfig";

const Hero = () => {
  const branding = getBranding();

  const { t } = useTranslation(["hero"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng"?.length >= 2)) {
      i18next.changeLanguage("en");
    }
  }, []);

  return (
    <>
      <div className="hero" id="hero">
        <div className="heroImage"></div>
        <div className="sliderCaption">
          <div className="left">
            <div className="firstCaption">
              <div className="line"></div>
              <h1>{branding.name}</h1>
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
              <p>{branding.name + t("description")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
