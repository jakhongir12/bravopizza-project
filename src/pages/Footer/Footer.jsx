import React from "react";
import "./Footer.css";
import instagram from "./Footer-images/instagram.png";
import facebook from "./Footer-images/facebook.png";
import twitter from "./Footer-images/twitter.png";
import youTube from "./Footer-images/utube.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="inner-txt">
        <div className="div-one">
          <h4>LOCATION</h4>
          <p>Tashkent, Uzbekistan</p>
        </div>

        <div className="div-one">
          <h4>WORKING HOURS</h4>
          <p>Mon-Fri: 10:00 AM - 10:00 PM</p>
          <p>Saturday: 10:00 AM - 11:00 PM</p>
          <p>Sunday: 10:00 AM - 11:00 PM</p>
        </div>

        <div className="div-one">
          <h4>ORDER NOW</h4>
          <p>Quaerat neque purus ipsum at neque dolor primis tempus</p>
          <p>789-654-3210</p>
        </div>

        <div className="div-one">
          <h4>FOLLOW US</h4>
          <p>Quaerat neque purus ipsum at neque dolor primis tempus</p>
          <p>Quaerat neque purus ipsum at neque  </p>
        </div>
      </div>
        <div className="icon-links">
            {/* <div> */}

            {/* </div> */}
          <div className="icons">
            <p>© Copyright 2022.All Rights Reserved</p>
            <a><img src={facebook} /></a>
             <a><img src={instagram} /></a>
             <a><img src={youTube} /></a>
            <a><img src={twitter} /></a>
          </div>
        </div>
    </div>
  );
};

export default Footer;
