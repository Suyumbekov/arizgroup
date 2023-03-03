import React from "react";
import "./contact.css";

const ContactContent = () => {
  return (
    <>
      <div className="contact">
        <div className="infoSide">
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187123.27297995618!2d74.45177469975332!3d42.87704126977527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2sBishkek!5e0!3m2!1sen!2skg!4v1677415113421!5m2!1sen!2skg"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
        </div>
        <div className="contactDetails">
          <a href="">
            <i class="fas fa-map-marker-alt	" aria-hidden="true">
              {" "}
              Coalport Room, Suite 7 Business Development Centre Stafford Park 4
              Telford TF3 4DR / United Kingdom
            </i>
          </a>
          <h6> Ross Brodie</h6>
          <h6>Managing Director</h6>
          <br />
          <a href="">
            <i class="fas fa-mobile-alt	" aria-hidden="true">
              +44 7478 260 730
            </i>
          </a> <br />
          <a href="">
            <i class="fa fa-skype" aria-hidden="true">rossjbrodie</i>
          </a> <br />
          <a href="">
            <i class="far fa-envelope " aria-hidden="true">ross.brodie@prologsupply.co.uk</i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
