import React, { useEffect, useRef, useState } from "react";
import "./Review.css"; // Ensure your CSS file is correctly linked
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Card = ({ statement, summary, user, index }) => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const ref = useRef(null); // Ref to the card element

  // Effect to observe the card's visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when in view
        } else {
          setIsVisible(false); // Set not visible when out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the card is in view
    );

    if (ref.current) {
      observer.observe(ref.current); // Observe the card element
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup the observer
      }
    };
  }, []);

  return (
    <motion.div
      id="div3"
      ref={ref} // Attach ref to the card element
      initial={{ opacity: 0, scale: 0.9 }} // Start off invisible and slightly smaller
      animate={isVisible ? { opacity: 1, scale: 1, transition: { duration: 0.3, delay: index * 0.2 } } : { opacity: 0, scale: 0.9 }} // Animate based on visibility with delay
      exit={{ opacity: 0, scale: 0.9 }} // Animate back to invisible and smaller
    >
      <div>
        <FaStar className="Star" />
        <FaStar className="Star" />
        <FaStar className="Star" />
        <FaStar className="Star" />
        <FaStar className="Star" />
      </div>
      {/* Motion divs for text elements */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} // Start off text invisible and slightly below
        animate={isVisible ? { opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.2 } } : { opacity: 0, y: 10 }} // Animate based on visibility with delay
        exit={{ opacity: 0, y: 10 }} // Animate back to invisible and below
      >
        <div style={{ margin: "0.5rem 0",padding:'0' }}>{statement}</div> {/* Add margin here */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }} // Start off text invisible and slightly below
        animate={isVisible ? { opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.2 + 0.1 } } : { opacity: 0, y: 10 }} // Animate based on visibility with delay
        exit={{ opacity: 0, y: 10 }} // Animate back to invisible and below
      >
        <div style={{ margin: "0.5rem 0" ,padding:'0'}}>{summary}</div> {/* Add margin here */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }} // Start off text invisible and slightly below
        animate={isVisible ? { opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.2 + 0.2 } } : { opacity: 0, y: 10 }} // Animate based on visibility with delay
        exit={{ opacity: 0, y: 10 }} // Animate back to invisible and below
      >
        <div style={{ margin: "0.5rem 0" ,padding:'0'}}>{user}</div> {/* Add margin here */}
      </motion.div>
    </motion.div>
  );
};

export default Card;
