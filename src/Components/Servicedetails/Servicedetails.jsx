import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowLeft, FaChartLine, FaLightbulb, FaUsers, FaCheckCircle, FaStar, FaCog } from 'react-icons/fa';
import data from "../ServiceMap/data.js";
import "./Servicedetails.css";

// Helper to generate a slug (same as in Services.jsx)
const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const Servicedetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll();

  // Find the service and provide a fallback icon
  const service = data.find(s => generateSlug(s.title) === serviceId);
  const ServiceIcon = service?.icon || FaCog; // Fallback to FaCog if no icon is found

  if (!service) {
    return (
      <div className="service-detail-container not-found-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist or has been moved.</p>
          <button onClick={() => navigate("/")} className="sds-back-button">
            <FaArrowLeft /> Go Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Placeholder data if not present in data.js
  const overview = service.overview || "Our comprehensive service is designed to address your core needs, delivering exceptional value and results. We focus on a strategic approach, ensuring that every aspect of our service aligns with your objectives for maximum impact.";
  const howWeHelp = service.howWeHelp || [
    "Strategic planning and consultation to understand your unique challenges.",
    "Customized solutions tailored to your specific requirements.",
    "Dedicated support and ongoing optimization for long-term success.",
    "Transparent reporting and measurable outcomes.",
  ];
  const innovation = service.innovation || "We are committed to staying at the forefront of technology. Our innovative approach involves continuous research, adoption of cutting-edge tools, and fostering a culture of creative problem-solving to deliver solutions that are not just effective but also future-proof.";
  const stats = service.stats || [
    { value: "98%", label: "Client Satisfaction", Icon: FaStar },
    { value: "150+", label: "Projects Completed", Icon: FaCheckCircle },
    { value: "10+", label: "Years of Experience", Icon: FaLightbulb },
  ];
  const caseStudies = service.caseStudies || [
    { id: "cs1", title: "Global Brand Redesign", summary: "Revitalized a major brand's digital presence, resulting in a 40% increase in engagement.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", link: "#" },
    { id: "cs2", title: "E-commerce Sales Growth", summary: "Implemented a new e-commerce strategy that boosted sales by over 60% in six months.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", link: "#" },
  ];
  const heroBackgroundImage = service.heroBackgroundImage || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const yBg = useTransform(scrollYProgress, [0, 0.4], ["0%", "-20%"]);

  return (
    <motion.div 
      className="service-detail-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button onClick={() => navigate(-1)} className="sds-back-button sds-floating-back">
        <FaArrowLeft /> Back to Services
      </button>

      {/* Hero Section */}
      <motion.header 
        className="sds-hero" 
        variants={sectionVariants} 
        initial="hidden" 
        animate="visible"
        style={{ 
          backgroundImage: `url(${heroBackgroundImage})`
        }}
      >
        <motion.div className="sds-hero-bg-image" style={{ y: yBg, backgroundImage: `url(${heroBackgroundImage})` }} />
        <div className="sds-hero-overlay" />
        <div className="sds-hero-content">
          <motion.div 
            className="sds-hero-icon-wrapper"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ServiceIcon className="sds-hero-icon" />
          </motion.div>
          <motion.h1 
            className="sds-main-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {service.title}
          </motion.h1>
          <motion.p 
            className="sds-overview-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {overview}
          </motion.p>
        </div>
      </motion.header>

      {/* How We Can Help Section */}
      <motion.section className="sds-section" variants={sectionVariants} initial="hidden" animate="visible">
        <div className="sds-section-icon-wrapper"><FaUsers /></div>
        <h2 className="sds-section-title">How We Can Help You</h2>
        <motion.ul className="sds-help-list">
          {howWeHelp.map((item, index) => (
            <motion.li key={index} variants={itemVariants} initial="hidden" animate="visible" custom={index} transition={{delay: index * 0.1}}>
              <FaCheckCircle className="sds-list-icon" /> {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Our Innovation Section */}
      <motion.section className="sds-section sds-innovation-section" variants={sectionVariants} initial="hidden" animate="visible">
        <div className="sds-section-icon-wrapper"><FaLightbulb /></div>
        <h2 className="sds-section-title">Our Innovation</h2>
        <p className="sds-text-block">{innovation}</p>
      </motion.section>

      {/* Cool Stats Section */}
      <motion.section className="sds-section sds-stats-section" variants={sectionVariants} initial="hidden" animate="visible">
        <div className="sds-section-icon-wrapper"><FaChartLine /></div>
        <h2 className="sds-section-title">Impact & Results</h2>
        <div className="sds-stats-grid">
          {stats.map((stat, index) => (
            <motion.div key={index} className="sds-stat-item" variants={itemVariants} initial="hidden" animate="visible" custom={index} transition={{delay: index * 0.15}}>
              <stat.Icon className="sds-stat-icon" />
              <span className="sds-stat-value">{stat.value}</span>
              <span className="sds-stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Case Studies Section */}
      <motion.section className="sds-section" variants={sectionVariants} initial="hidden" animate="visible">
        <h2 className="sds-section-title">Success Stories</h2>
        <div className="sds-case-studies-grid">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id} 
              className="sds-case-study-card"
              variants={itemVariants} 
              initial="hidden" 
              animate="visible" 
              custom={index} 
              transition={{delay: index * 0.2}}
              whileHover={{ scale: 1.03, boxShadow: "0 12px 24px rgba(0,0,0,0.15)"}}
            >
              <img src={study.image} alt={study.title} className="sds-case-study-image" />
              <div className="sds-case-study-content">
                <h3 className="sds-case-study-title">{study.title}</h3>
                <p className="sds-case-study-summary">{study.summary}</p>
                <a href={study.link} className="sds-case-study-link" target="_blank" rel="noopener noreferrer">
                  Read More <FaArrowLeft style={{transform: 'rotate(135deg)', marginLeft: '5px'}}/>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Servicedetails;