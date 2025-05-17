import React, { useState, useEffect } from "react";
import "./Hero.css";
import blue from "../../assets/blue.png";
import { FaArrowRight, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* Mobile Header */}
      <div className={`mobile-header ${darkMode ? 'dark' : ''}`}>
        <img src={blue} alt="Logo" className="mobile-logo" />
        <div className="mobile-controls">
          <motion.button
            className="theme-toggle"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <FaSun className="theme-icon" />
            ) : (
              <FaMoon className="theme-icon" />
            )}
          </motion.button>
          <button 
            id="toggle-sidebar" 
            onClick={toggleSidebar}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FaTimes className="menu-icon" />
            ) : (
              <FontAwesomeIcon icon={faBarsStaggered} className="menu-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav 
        className={`main-nav ${isOpen ? "active" : ""} ${scrolled ? "scrolled" : ""} ${darkMode ? 'dark' : ''}`}
        initial={false}
        animate={{
          backgroundColor: darkMode ? 'rgba(17, 25, 40, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        }}
        transition={{ duration: 0.3 }}
      >
        <img src={blue} alt="Logo" className="nav-logo" />
        
        <ul className={`nav-list ${isOpen ? "active" : ""}`}>
          {['Services', 'Reviews', 'About', 'Pricing'].map((item, index) => (
            <motion.li 
              key={index} 
              onClick={toggleSidebar}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a 
                href={`#${item.toLowerCase()}`} 
                className="nav-link"
              >
                {item}
              </a>
            </motion.li>
          ))}
          <li>
            <motion.button
              className="theme-toggle desktop"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FaSun className="theme-icon" />
              ) : (
                <FaMoon className="theme-icon" />
              )}
            </motion.button>
          </li>
        </ul>
        
        <motion.div 
          className="cta-button"
          onClick={handleButtonClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <p>Schedule Strategy Call</p>
          <FaArrowRight className="arrow-icon" />
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={`mobile-menu-overlay ${darkMode ? 'dark' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
