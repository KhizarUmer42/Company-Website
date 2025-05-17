import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = ({ title, description, Icon, backgroundImage, ctaText = "Learn More" }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }
      });
    } else {
      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 }
      });
    }
  }, [controls, inView]);

  const handleCardClick = () => {
    const serviceId = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    navigate(`/services/${serviceId}`);
  };

  return (
    <motion.article
      ref={ref}
      className="service-card clickable"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      onClick={handleCardClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick()}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${title}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="service-overlay" />
      <div className="service-content">
        <motion.div 
          className="service-icon-container"
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        >
          <Icon className="service-icon" aria-hidden="true" />
        </motion.div>
        
        <div className="service-text">
          <motion.h3 
            className="service-title"
          >
            {title}
          </motion.h3>
          <p className="service-description">{description}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default Services;


