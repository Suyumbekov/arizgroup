import React from "react";
import "./aboutService.css";

const AboutService = () => {
  return (
    <>
      <div className="aboutService">
        <div className="infoSide">
          <h1>Helping you Reach your Potential</h1>
          <p>
            Prolog Supply & Services (PS&S) has been operational for more than a
            decade, initially supporting Central Asia’s mining industry. In
            recent years, Prolog has grown and now successfully completes
            projects in a number of countries and industries. We enjoy ongoing
            business with clients on a global scale, most specifically in
            Africa, Central Asia, and Europe.
          </p>
          <p>
            Within our ranks, PS&S has more than half a century’s experience in
            worldwide mining supply chain. We have a working knowledge and wide
            experience in all the latest aspects of SCM from demand management
            through to logistics.
          </p>
          <button className="aboutButton">About Us</button>
        </div>
        <div className="imageSide">
          <img src="https://www.prologsupply.co.uk/tema/img/genel/hakkimizdaresim.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutService;
