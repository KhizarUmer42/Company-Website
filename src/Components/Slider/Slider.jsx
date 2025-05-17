import './Slider.css';
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-marquee-slider";
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Slider = () => {
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

  // Array of logo URLs instead of imports
  const logos = [
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d8695d5233bc7852a42b_Dealty%20Logo.webp",
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d86ab6a8fb3f7c0486d0_Recurate%20Logo.webp",
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d86ab6a8fb3f7c0486d0_Recurate%20Logo.webp",
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d86969a9e35997c0fb99_Intellirent%20Logo.webp",
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d86a4544b0ebd559faf7_Al%20Jouf%20Logo.webp",
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d869832d74b8b5e6a9d9_Maple%20Logo.webp",
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/6606d86ae6d44cc29ad852a0_Kallidus%20Logo.webp",
  ];

  return (
    <div className="slider-container" ref={ref}>
      <Marquee velocity={60} resetAfterTries={5} loop={0}>
        {logos.map((logo, index) => (
          <motion.div
            className="slider-item"
            key={index}
            initial={{ scale: 0 }} // Start off scaled down
            animate={isVisible ? { scale: 1, transition: { duration: 0.5, delay: index * 0.1 } } : { scale: 0 }} // Scale up on visibility
            exit={{ scale: 0 }} // Scale down when not visible
          >
            <img src={logo} alt={`logo-${index}`} className="logo-image" />
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
