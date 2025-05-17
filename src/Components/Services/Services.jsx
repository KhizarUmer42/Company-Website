import React from "react";
import { FaGlobe } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Services.css";

const Services = ({ title, description, Icon }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger at 20% visibility
    triggerOnce: false, // Allow re-triggering on exit and re-entry
  });

  React.useEffect(() => {
    if (inView) {
      // Animate in when the component is in view
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      });
    } else {
      // Animate out when the component scrolls out of view
      controls.start({
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3, ease: "easeIn" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      id="ServiceS"
      ref={ref}
      className="flexy_Row"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
    >
      <div className="flexycolumn1">
        <Icon size={25} color="#4f7bda" className="globe" />
      </div>
      <div className="flexycolumn2">
        <p id="p1">{title}</p>
        <p id="p2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Services;


