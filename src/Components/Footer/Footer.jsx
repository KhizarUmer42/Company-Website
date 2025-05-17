import React from "react";
import "./Footer.css";
import { motion } from 'framer-motion'; // Import motion for animations

const Footer = () => {
  return (
    <footer className="footer-container" id="AbouT">
      <div className="footer-pattern"></div>
      
      <div className="footer-content">
        <motion.div 
          className="footer-section"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>About Us</h3>
          <p>
            Nexalabs is dedicated to providing innovative tech solutions to meet
            your business needs.
          </p>
        </motion.div>
        
        <motion.div 
          className="footer-section"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Contact Us</h3>
          <p>Email: contact@nexalabs.com</p>
          <p>Phone: +123-456-7890</p>
        </motion.div>
        
        <motion.div 
          className="footer-section"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p>&copy; {new Date().getFullYear()} Nexalabs. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
