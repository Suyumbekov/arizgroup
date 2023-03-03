import React from "react";
import "./product.css";
import productData from "./productData";

const Products = () => {
  return (
    <>
      <div className="products">
        <div className="productHeading">
          <h1>Products</h1>
        </div>
        <div className="productCard">
          {productData.map((value, index) => {
            return (
              <a href="">
                <div key={index}>
                <h4>{value.heading}</h4>
                <img src={value.image} alt="" />
              </div>
              </a>
              
            );
          })}
        </div>
        <div className="productDescription">
          <p>
            We offer tailor made services specific to your mineral processing in
            froth flotation. Our high performing products and services are
            proven to fix all mine related problems. The applications we deliver
            are concentrated on various ores and we can solve your problems with
            our industry experience over 3 decades. We are a trusted partner
            when it comes to Feasibility Studies for Mineral Processing and
            on-site technical support with optimization services.
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;
