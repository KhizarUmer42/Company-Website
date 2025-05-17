import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="AbouT">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Nexalabs is dedicated to providing innovative tech solutions to meet
            your business needs.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@nexalabs.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | LinkedIn</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nexalabs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
