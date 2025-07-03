import React from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import './Footer.css'; // Import the CSS file
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <div className="logo">
            <span className="logo-main">Mentor</span>
            <span className="logo-main">Bridge</span>
          </div>
          <p className="tagline">
            Advancing the Research and Practice of Educational Development in Higher Education since 2025.
          </p>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <h3>Contact Information</h3>
          <p className="contact-desc">Send questions, concerns, comments, or suggestions to the xyz office using any of the avenues below.</p>
          <p><strong>Email:</strong> <a href="mailto:XYZoffice@podnetwork.org">XYZoffice@xyz.org</a></p>
          <p><strong>Phone:</strong> (303) 835-0456</p>

          <div className="address">
            <strong>Address</strong>
            <p>The XYZ Network</p>
            <p>XYZ Box 11515</p>
          </div>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © The BRIDGE MENTOR - 2025. All rights reserved. | <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
