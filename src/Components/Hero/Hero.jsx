import React, { useState } from "react";
import "./Hero.css";
import blue from "../../assets/blue.png";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="d1">
        <img src={blue} alt="dev png" id="logo2" />
        <button id="toggle-sidebar" onClick={toggleSidebar}>
          {isOpen ? (
            <FaTimes
              className="Icon"
              style={{ fontSize: "30px", color: "blue" }}
            />
          ) : (
            <FontAwesomeIcon icon={faBarsStaggered}
              className="Icon"
              style={{ fontSize: "30px", color: "blue" }}
            />
          )}
        </button>
      </div>

      <nav className={`Navi ${isOpen ? "active" : ""}`}>
        <img src={blue} alt="dev png" id="logo" />
        <li className={`Navlist ${isOpen ? "active" : ""}`}>
          <ul onClick={toggleSidebar}>
            <a className="Nav-child" href="#ServiceS">
                Services
            </a>
          </ul>
          <ul onClick={toggleSidebar}>
            <a className="Nav-child" href="#RevieW">
                Reviews
            </a>
          </ul>
          <ul onClick={toggleSidebar}>
            <a className="Nav-child" href="#AbouT">
              About
            </a>
          </ul >
          <ul onClick={toggleSidebar}>
            <a className="Nav-child" href="#PricinG">
              Pricing
            </a>
          </ul>
        </li>
        <div id="SCD" onClick={handleButtonClick}>
          <p>Schedule Strategy Call</p>
          <FaArrowRight className="arrow" />
        </div>
      </nav>
    </>
  );
};

export default Hero;
