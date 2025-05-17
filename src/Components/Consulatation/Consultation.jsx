import React, { useEffect, useRef, useState } from "react";
import './Consultation.css';
import p1 from './j1.webp';
import p2 from './j2.webp';
import p3 from './j3.webp';
import p4 from './j4.webp';
import { motion, useScroll, useTransform } from 'framer-motion'; // Import additional hooks

const images = [p1, p2, p3, p4];

const Consultation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for images
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="consultation-container" ref={containerRef}>
      <div className="consultation-content">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <h1 className="consultation-title">
            Transform Your Vision
            <span>Schedule a free consultation today</span>
          </h1>
          
          <p className="consultation-description">
            Join industry leaders who have already revolutionized their businesses 
            with our cutting-edge solutions and expert guidance. Let's build your 
            future together.
          </p>

          <motion.button
            className="consultation-button"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="consultation-images"
        style={{ y }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="image-container"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1]
              }
            } : {}}
          >
            <img
              className="consultation-image"
              src={image}
              alt={`Success story ${index + 1}`}
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Consultation;
