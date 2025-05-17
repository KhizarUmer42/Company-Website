import React, { useState } from "react";
import data from "./data.js";
import Services from "../Services/Services";
import '../Services/Services.css';
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from 'react-icons/fa';

const ServMap = () => {
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 3;
  
  const visibleServices = showAll ? data : data.slice(0, initialDisplayCount);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="services-section">
      <motion.div 
        className="services-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="services-title">Our Services</h2>
        <div className="services-subtitle">Transforming ideas into digital reality</div>
      </motion.div>

      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleServices.map((service, index) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            className="service-wrapper"
          >
            <Services
              title={service.title}
              description={service.description}
              Icon={service.icon}
              backgroundImage={service.backgroundImage}
            />
          </motion.div>
        ))}
      </motion.div>

      {data.length > initialDisplayCount && (
        <motion.button
          className="show-more-button"
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{showAll ? 'Show Less' : 'Explore More Services'}</span>
          <motion.div
            animate={{ 
              rotate: showAll ? 180 : 0,
              y: showAll ? -2 : 2 
            }}
            transition={{ duration: 0.3 }}
            className="arrow-container"
          >
            <FaChevronDown />
          </motion.div>
        </motion.button>
      )}
    </section>
  );
};

export default ServMap;
