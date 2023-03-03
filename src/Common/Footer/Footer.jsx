import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="infoFooter">
          <img src="./images/logo.png" alt="" />
          <p>
            Prolog Supply & Services (PS&S) has been operational for more than a
            decade, initially supporting Central Asia’s mining industry. In
            recent years, Prolog has grown and now successfully completes
            projects in a number of countries and industries. We enjoy ongoing
            business with clients on a global scale, most specifically in
            Africa, Central Asia, and Europe.
          </p>
        </div>
        <div className="sitemap">
          <h4>Site Map</h4>
          <ul>
            <a href="">
              <li>- Home</li>
            </a>
            <a href="">
              <li>- About Us / Our Company</li>
            </a>
            <a href="">
              <li>- Procurement & Logistics Services</li>
            </a>
            <a href="">
              <li>- Products</li>
            </a>
            <a href="">
              <li>- Contact Us</li>
            </a>
          </ul>
        </div>
        <div className="sitemap">
          <h4>Site Map</h4>
          <ul>
            <a href="">
              <li>- Froth Flotation Reagents</li>
            </a>
            <a href="">
              <li>- Flocculants</li>
            </a>
            <a href="">
              <li>- Ceramic Beads & Steel Grindings</li>
            </a>
            <a href="">
              <li>- Mineral Processing Consultancy</li>
            </a>
          </ul>
        </div>
        <div className="contactus">
          <h4 className="contactInfo">Contact Us</h4>
          <a href="">
            <li>
              Coalport Room, Suite 7 Business Development Centre Stafford Park 4
              Telford TF3 4DR United Kingdom
            </li>
          </a>
          <a href="">
            <li>Phone : +44 7478 260 730</li>
          </a>
        </div>
      </div>
      <div className="bottomSide">© Copyright 2023 Ariz Group</div>
    </>
  );
};

export default Footer;
