import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './CatchLine.css';

const CatchLine = () => {
  const ref = useRef(null); // Reference to trigger in-view detection
  const isInView = useInView(ref, { amount: 0.3 }); // Detects when 30% of the component is in view

  return (
    <div className="CatchP" ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate back out when out of view
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        From Idea to Completion, we bring Full-Stack Expertise
      </motion.p>
      <motion.img
        className="line"
        src="https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/65e9d803e7334ec910a26f85_Underline_.svg"
        alt="underline"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} // Animate back out when out of view
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
};

export default CatchLine;
