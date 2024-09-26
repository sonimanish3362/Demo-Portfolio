import React from "react";
import "./Foooter.css";
import logo from "../../assets/footer_logo.svg";
import user from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            velit dolorum.{" "}
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user} alt="" />
            <input type="email" placeholder="your email" name="email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ copyright right reserved. All Right</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
