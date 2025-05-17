import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './CatchLine.css';

const CatchLine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const words = "From Idea to Completion, we bring Full-Stack Expertise".split(" ");

  return (
    <motion.div 
      className="catchline-container" 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="catchline-content">
        <div className="catchline-text">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              className="catchline-word"
            >
              {word}{" "}
            </motion.span>
          ))}
        </div>
        
        <motion.div 
          className="catchline-accent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
        >
          <div className="accent-line"></div>
          <div className="accent-dot"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CatchLine;
