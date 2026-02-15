import i18next from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./aboutService.css";

const AboutService = () => {
  const { t } = useTranslation(["aboutService"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng"?.length >= 2)) {
      i18next.changeLanguage("en");
    }
  }, []);
  return (
    <>
      <div className="aboutService" id="procurement-services">
        <div className="productHeading">
          <h2 data-aos="fade-down" data-aos-duration="2000">
            {t("serviceTitle")}
          </h2>
        </div>
        <div className="infoSide">
          <div className="capsule" data-aos="fade-right">
            <p className="capsuleInfo">{t("qualityAssurance")}</p>
            <img
              alt="serviceImage"
              className="serviceImage"
              src="https://habiskerja.com/wp-content/uploads/2022/12/Improving-Your-Software-Quality-Assurance-Process-in-2021.webp"
            ></img>
          </div>
          <div className="capsule" data-aos="fade-right">
            <img
              className="serviceImage"
              src="https://media.licdn.com/dms/image/C4D12AQFgCbq3WnGZuw/article-cover_image-shrink_600_2000/0/1616926634770?e=2147483647&v=beta&t=x6A2ama4V6lpg4rPO8OwgCLxkxGFIgcG4_sP3hOM6CU"
              alt="serviceImage"
            />
            <p className="capsuleInfo">{t("logisticSolutions")}</p>
          </div>
          <div className="capsule" data-aos="fade-right">
            <p className="capsuleInfo">{t("warehouse")}</p>
            <img
              className="serviceImage"
              src="https://mecaluxcom.cdnwm.com/blog/img/warehouse-storage-techniques.1.1.jpg"
              alt="serviceImage"
            />
          </div>
          <div className="capsule" data-aos="fade-right">
            <img
              className="serviceImage"
              src="https://images.yourstory.com/cs/wordpress/2016/07/shutterstock_196240484800x400.jpg?w=752&fm=auto&ar=2:1&mode=crop&crop=faces"
              alt="serviceImage"
            />
            <p className="capsuleInfo">{t("importExport")}</p>
          </div>
          <div className="capsule" data-aos="fade-right">
            <p className="capsuleInfo">{t("productQuality")}</p>
            <img
              className="serviceImage"
              src="images/aboutService/management.jpg"
              alt="serviceImage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutService;
