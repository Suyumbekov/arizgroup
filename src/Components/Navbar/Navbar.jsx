import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link as LinkRoll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = ({ host }) => {
  const [logo, setLogo] = useState("logo_on_black.png");
  const { i18n, t } = useTranslation(["navbar"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length >= 2) {
      i18next.changeLanguage("en");
    }
    if (host === "kambros") {
      setLogo("kambros.png");
    }
  }, [host]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  const isActive = useState();

  const [mobile, setMobile] = useState(false);
  const handleClick = () => setMobile(!mobile);
  const closeMobileMenu = () => setMobile(false);

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav");
    navbar.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <nav className="nav" data-aos="fade-down">
        <div className="logo">
          <img src={"./images/" + logo} alt="" />
        </div>
        <div
          className={mobile ? "navbar-mobile" : "navbar"}
          onClick={handleClick}
        >
          <ul>
            <li>
              <LinkRoll to="hero" smooth={true} onClick={closeMobileMenu}>
                {t("home")}
              </LinkRoll>
            </li>
            <li>
              <LinkRoll to="brands" smooth={true} onClick={closeMobileMenu}>
                {t("news")}
              </LinkRoll>
            </li>
            <li>
              <LinkRoll to="brands" smooth={true} onClick={closeMobileMenu}>
                {t("brands")}
              </LinkRoll>
            </li>
            <li>
              <LinkRoll to="products" smooth={true} onClick={closeMobileMenu}>
                {t("products")}
              </LinkRoll>
            </li>
            <li>
              <LinkRoll
                to="procurement-services"
                smooth={true}
                onClick={closeMobileMenu}
              >
                {t("aboutservice")}
              </LinkRoll>
            </li>
            <li>
              <LinkRoll to="contact-us" smooth={true} onClick={closeMobileMenu}>
                {t("contactus")}
              </LinkRoll>
            </li>
          </ul>
          <button className="mobile-menu-icon" onClick={handleClick}>
            {mobile ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="langs">
          <button
            onClick={() => handleLanguageChange("en")}
            className={isActive ? "active" : " "}
          >
            ENG
          </button>
          <hr />
          <button
            onClick={() => handleLanguageChange("ru")}
            className={isActive ? "active" : ""}
          >
            RU
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
