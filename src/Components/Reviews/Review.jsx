import React, { useEffect, useRef, useState } from "react";
import './Review.css';
import Card from "./Card";
import testimonials from './test.js';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Review = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const ref = useRef(null); // Ref to the component element

  // Effect to observe the component's visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (ref.current) {
      observer.observe(ref.current); // Observe the component element
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup the observer
      }
    };
  }, []);

  return (
    <div className="Father" id="RevieW" ref={ref}>
      <motion.div
        id="div1"
        initial={{ y: 20, opacity: 0 }} // Start with a slight slide down and invisible
        animate={isVisible ? { y: 0, opacity: 1, transition: { duration: 0.5 } } : { y: 20, opacity: 0 }} // Slide up and fade in on visibility
      >
        We've helped our clients complete 3,000+ projects
      </motion.div>
      <motion.div
        id="div2"
        initial={{ y: 20, opacity: 0 }} // Start with a slight slide down and invisible
        animate={isVisible ? { y: 0, opacity: 1, transition: { duration: 0.5 } } : { y: 20, opacity: 0 }} // Slide up and fade in on visibility
      >
        Over the last 15 years, we've been driven by our passion for helping global clients achieve their goals.
      </motion.div>
      <div className="div3_parent">
        {testimonials.map((item, index) => (
          <Card
            key={index}
            index={index} // Pass the index to Card
            statement={item.statement}
            summary={item.summary}
            user={item.user}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
