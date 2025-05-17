import './Slider.css';
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-marquee-slider";
import { motion, useAnimation } from 'framer-motion';

const Slider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
    <motion.section
      className="slider-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div className="trusted-by" variants={textVariants}>
        <h2>Trusted by Industry Leaders</h2>
        <p>Partnering with innovative companies worldwide</p>
      </motion.div>

      <motion.div
        className="slider-container"
        variants={containerVariants}
      >
        <Marquee velocity={35} resetAfterTries={5} scatterRandomly={false}>
          {logos.map((logo, index) => (
            <motion.div
              className="slider-item"
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <img 
                src={logo} 
                alt={`Partner logo ${index + 1}`} 
                className="logo-image"
                loading="lazy"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </motion.section>
  );
};

export default Slider;
