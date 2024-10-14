import i18next from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./product.css";
import "./slider.css";

const Products = () => {
  const { t } = useTranslation(["products"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng"?.length >= 2)) {
      i18next.changeLanguage("en");
    }
  }, []);
  const productData = [
    {
      category: t("cardTitle1"),
      image:
        "http://resources.perkinelmer.com/lab-solutions/resources/images_for_resize/CHEMICALS_FINE_CHEMICALS_1310x300.jpg",
      subCategory: [
        t("chemicals1"),
        t("chemicals2"),
        t("chemicals3"),
        t("chemicals4"),
        t("chemicals5"),
        t("chemicals6"),
      ],
    },
    {
      category: t("cardTitle2"),
      image:
        "https://im-mining.com/site/wp-content/uploads/2023/02/UGM-announcement-tires-604x270.png",
      subCategory: [t("machinary1"), t("machinary2")],
    },
    {
      category: t("cardTitle3"),
      image:
        "https://www.suprasteel.net/wp-content/uploads/2016/12/foto-bolas-fundidas-2.jpg",
      subCategory: [t("supply1"), t("supply2"), t("supply3"), t("supply4")],
    },
    {
      category: t("cardTitle4"),
      image:
        "https://images.squarespace-cdn.com/content/v1/579538a5725e254c7c86df4f/1524226731956-17Y87E3576BT2CTPXVDD/8-Dewalt_nail_guns.jpg",
      subCategory: [t("product1"), t("product2"), t("product3"), t("product4")],
    },
    {
      category: t("cardTitle5"),
      image:
        "https://images.squarespace-cdn.com/content/v1/579538a5725e254c7c86df4f/1524226731956-17Y87E3576BT2CTPXVDD/8-Dewalt_nail_guns.jpg",
      subCategory: [t("sample"), t("sample2")],
    },
  ];
  return (
    <>
      <div className="products" id="products">
        <div className="productHeading">
          <h2 data-aos="fade-down" data-aos-duration="2000">
            {t("productTitle")}
          </h2>
        </div>
        <div className="productCard">
          {productData.map((value, i) => {
            return (
              <>
                <div
                  key={i}
                  className="card"
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <h4>{value.category}</h4>
                  <img src={value.image} alt="" />
                  {value.subCategory.map((categories, category) => {
                    return (
                      <div key={category}>
                        <p>
                          <i className="fa fa-dot-circle-o"></i>
                          {categories}
                        </p>
                        <br />
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
