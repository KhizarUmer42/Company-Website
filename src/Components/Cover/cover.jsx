import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import necessary components from Framer Motion
import "./cover.css";
import { useNavigate } from "react-router-dom";

const Cover = (props) => {
  const ref = useRef(null); // Create a ref for the cover component
  const isInView = useInView(ref, { amount: 0.2 }); // Trigger when 20% of the component is in view
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <div className="Parent" ref={ref}>
      <div className="gradient">
        <motion.p
          className="p1"
          initial={{ opacity: 0, y: 20 }} // Start invisible and slightly down
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Fade in and move up
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span id="span1">Outperform </span>the Competetion{" "}
          <span id="span2">
            with Custom <span id="span1"> AI Solutions</span>{" "}
          </span>
        </motion.p>

        <motion.p
          className="description"
          style={{ marginBottom: "0" }}
          initial={{ opacity: 0, y: 20 }} // Start invisible and slightly down
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Fade in and move up
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Work with our expert team to craft custom AI solutions that automate tasks, increase ROI, and align with your industry’s unique needs.
        </motion.p>
        <div className="buttons">
          <motion.button
            className="Button1"
            id="b1"
            initial={{ scale: 0.9, opacity: 0 }} // Start slightly smaller and invisible
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
            } // Zoom in and fade in
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
            onClick={handleButtonClick}
          >
            Schedule free Strategy call
          </motion.button>
          <motion.button
            className="Button1"
            id="b2"
            initial={{ scale: 0.9, opacity: 0 }} // Start slightly smaller and invisible
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
            } // Zoom in and fade in
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          >
            See our work
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
