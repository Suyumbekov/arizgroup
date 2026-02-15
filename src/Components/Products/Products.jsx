import i18next from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./product.css";
import "./slider.css";

const Products = () => {
  const { t } = useTranslation(["products"]);

  useEffect(() => {
    const language = localStorage.getItem("i18nextLng");
    if (language?.length >= 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  const productData = [
    {
      category: t("cardTitle1"),
      image: "images/products/chemicals.jpg",
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
      image: "images/products/mining-machinery.jpg",
      subCategory: [t("machinary1"), t("machinary2")],
    },
    {
      category: t("cardTitle3"),
      image: "images/products/fundidas.jpg",
      subCategory: [t("supply1"), t("supply2"), t("supply3"), t("supply4")],
    },
    {
      category: t("cardTitle4"),
      image: "images/products/dewalt.jpg",
      subCategory: [t("product1"), t("product2"), t("product3"), t("product4")],
    },
    {
      category: t("cardTitle5"),
      image: "images/products/hydro.jpg",
      subCategory: [
        t("sample1"),
        t("sample2"),
        t("sample3"),
        t("sample4"),
        t("sample5"),
      ],
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
