import i18next from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";
import emailjs from "@emailjs/browser";

const Result = () => {
  const { t } = useTranslation(["footer"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length >= 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  return <p style={{ color: "red" }}>{t("sendMessage")}</p>;
};

const Footer = ({ host }) => {
  const { t } = useTranslation(["footer"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng"?.length >= 2)) {
      i18next.changeLanguage("en");
    }
  }, []);

  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_raut70v",
        "template_mi1g8pr",
        form.current,
        "63gran-wYufAKjYNK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 10000);

  return (
    <>
      <div className="footer" id="contact-us">
        <div
          className="infoFooter"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a href="tel:+996706939779">
            <i className="fa fa-phone-alt"></i>+996 (706) 939 779
          </a>
          <br />
          <a href={"mailto: sales@" + host + ".com"}>
            <i className="fa fa-envelope"></i>
            {"sales@" + host + ".com"}
          </a>
          <br />
          <a href={"https://" + host + ".com"}>
            <i className="fa fa-globe"></i>
            {"www." + host + ".com"}
          </a>
          <br />
          <a
            href="https://maps.app.goo.gl/TDXb9eXgVTo25Dea7"
            className="address"
          >
            <i className="fa fa-map-marker-alt" aria-hidden="true"></i>Kyrgyz
            Republic c. Bishkek, St. Lev Tolstoy 1a/1
          </a>
          <br />
        </div>
        <div
          className="contactus"
          data-aos="fade-down "
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2>{t("contact")}</h2>
          <form action="#" ref={form} onSubmit={sendEmail}>
            <div className="form">
              <input
                type="name"
                placeholder={t("fullname")}
                name="name"
                required
              />
            </div>
            <div className="form">
              <input
                type="number"
                name="number"
                placeholder={t("number")}
                required
              />
            </div>
            <div className="form">
              <input
                type="email"
                name="email"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div className="btn">
              <button type="submit">{t("send")}</button>
            </div>
            <div>{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
