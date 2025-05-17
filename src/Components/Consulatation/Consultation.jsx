import React, { useEffect, useRef, useState } from "react";
import './Consultation.css';
import p1 from './j1.webp';
import p2 from './j2.webp';
import p3 from './j3.webp';
import p4 from './j4.webp';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const images = [p1, p2, p3, p4]; // Array of images

const Consultation = (props) => {
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
    <div className="Dad" ref={ref}>
      <div className="flexy1">
        <motion.p
          initial={{ y: 20, opacity: 0 }} // Start with slide down and invisible
          animate={isVisible ? { y: 0, opacity: 1, transition: { duration: 0.5 } } : { y: 20, opacity: 0 }} // Slide up on visibility
        >
          Schedule a free consultation <span style={{ display: 'block', margin: '0', padding: '0', lineHeight: '1' }}>with one of our experts.</span>
        </motion.p>
        <motion.p
          id="p1"
          initial={{ y: 20, opacity: 0 }} // Start with slide down and invisible
          animate={isVisible ? { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } } : { y: 20, opacity: 0 }} // Slide up on visibility
        >
          Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, and unparalleled support.
        </motion.p>
        <motion.button
          initial={{ scale: 0 }} // Start off scaled down
          animate={isVisible ? { scale: 1, transition: { duration: 0.3 } } : { scale: 0 }} // Scale up on visibility
          exit={{ scale: 0 }} // Scale down when not visible
        >
          Schedule Now
        </motion.button>
      </div>
      <div className="flexy2">
        {images.map((image, index) => (
          <motion.img
            key={index}
            className='Myimg'
            src={image}
            alt={`Consultation ${index + 1}`} // Alt text for accessibility
            initial={{ x: -50, opacity: 0, rotate: index % 2 === 0 ? -20 : 20 }} // Start with rotation and off-screen
            animate={isVisible ? { x: 0, opacity: 1, rotate: 0, transition: { duration: 0.5, delay: index * 0.1 } } : { x: -50, opacity: 0 }} // Slide in on visibility
            exit={{ x: -50, opacity: 0 }} // Slide back out when not visible
          />
        ))}
      </div>
    </div>
  );
};

export default Consultation;
