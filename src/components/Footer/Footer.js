import React from "react";
// ImLocation2,
//   BsFillTelephoneFill,
//   MdEmail,
//   AiFillFacebook,
//   AiFillTwitterSquare,
//   AiFillLinkedin,
//   FaInstagramSquare,

import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer-info">
      {" "}
      <div className="footer">
        <div className="footer-time">
          <h2 className="logo">
            <span>PPF</span>ASL
          </h2>
          <p>Weekdays: 08:00am - 08:00pm</p>
          <p>Weekdays: 08:00am - 08:00pm</p>
          <p>
            <span>Get Social:</span>
            <a href="www.twitter.com" target="_blank">
              <FaFacebook />{" "}
            </a>

            <a href="www.twitter.com" target="_blank">
              <FaTwitter />{" "}
            </a>
            <a href="www.twitter.com" target="_blank">
              <FaLinkedin />{" "}
            </a>
            <a href="www.twitter.com" target="_blank">
              <FaInstagramSquare />{" "}
            </a>
          </p>
        </div>

        <div className="footer-contact">
          <p>
            <span>
              <FaLocationArrow />
            </span>{" "}
            2 Wilkinson Road, Freetown Sierra Leone
          </p>
          <p>
            <span>
              <FaPhone />
            </span>{" "}
            +232 00 000 000
          </p>
          <p>
            <span>
              <FaEnvelope />
            </span>{" "}
            info@ppsl.org
          </p>
        </div>
        <form action="POST" className="contact-form">
          <h3>Contact Us</h3>
          <input type="text" placeholder="name" name="name" />
          <input type="email" placeholder="email" name="email" />
          <input type="text" placeholder="address" name="address" />

          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
        </form>
      </div>
      <p className="copyright">All righs reserved &copy; PPSL {date}</p>
    </div>
  );
};

export default Footer;
