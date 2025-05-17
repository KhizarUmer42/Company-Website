import React from "react";
import { motion } from "framer-motion";
import './pricing.css';
import { useNavigate } from "react-router-dom";
import { FaAngleRight, FaProjectDiagram, FaUserPlus, FaUsers } from "react-icons/fa"; // Added new icons

const Pricing = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/contact");
  };

  const handleReviewsClick = () => {
    // Placeholder: navigate to reviews section or page if it exists
    // navigate("/reviews"); 
    console.log("Navigate to reviews");
  };

  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const leftColVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const rightColVariant = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const servicesData = [
    {
      Icon: FaProjectDiagram, // Updated to use Icon component
      title: "Software Outsourcing",
      description: "Let us handle end-to-end delivery with complete software development outsourcing."
    },
    {
      Icon: FaUserPlus, // Updated to use Icon component
      title: "Staff Augmentation",
      description: "Add talent to your existing team through us and save time on sourcing, recruiting, and training."
    },
    {
      Icon: FaUsers, // Updated to use Icon component
      title: "Dedicated Teams",
      description: "Move faster with a dedicated and functional team integrated into your existing software development process."
    }
  ];

  return (
    <motion.section 
      className="pricing-section"
      id="PricinG"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={sectionVariant}
    >
      <div className="pricing-container">
        {/* Left Column: Details and Value Proposition */}
        <motion.div className="pricing-details" variants={leftColVariant}>
          <motion.p className="pricing-subtitle" variants={itemVariant}>Pricing</motion.p>
          <motion.h2 className="pricing-title" variants={itemVariant}>
            AI-Powered Solutions, Delivered On Time & Budget
          </motion.h2>
          <motion.p className="pricing-description" variants={itemVariant}>
            Since 2009, we've delivered high-quality custom services, helping businesses build, grow, and revolutionize.
          </motion.p>
          
          <motion.div className="pricing-stats" variants={itemVariant}>
            <div className="stat-item">
              <h3>236+</h3>
              <p>Active Clients</p>
            </div>
            <div className="stat-item">
              <h3>3000+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3>23+</h3>
              <p>Countries Supported</p>
            </div>
          </motion.div>
          <motion.button 
            className="btn btn-secondary btn-icon" 
            onClick={handleReviewsClick}
            variants={itemVariant}
          >
            See Our Reviews <FaAngleRight />
          </motion.button>
        </motion.div>

        {/* Right Column: Pricing CTA and Service Offerings */}
        <motion.div className="pricing-offers-card" variants={rightColVariant}>
          <motion.div className="pricing-main-cta" variants={itemVariant}>
            <div className="cta-price">
              <p>Starting from</p>
              <h1>$22/hour</h1>
            </div>
            <button className="btn btn-primary btn-icon" onClick={handleSubmit}>
              Contact Us <FaAngleRight />
            </button>
          </motion.div>

          <motion.p className="pricing-offer-text" variants={itemVariant}>
            Leverage Devsinc engineers trained with ChatGPT and CoPilot to improve your project's ROI. Try us risk-free for 2 weeks!
          </motion.p>
          <motion.p className="pricing-offer-guarantee" variants={itemVariant}>
            We guarantee a positive impact, or we work for free until we do.
          </motion.p>

          <motion.div className="service-offerings-grid" variants={itemVariant}>
            {servicesData.map((service, index) => (
              <motion.div 
                className="service-offering-item"
                key={index} 
                variants={itemVariant}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)"}}
              >
                <div className="service-offering-icon">
                  {/* Render the Icon component directly */}
                  <service.Icon className="service-offering-svg-icon" aria-hidden="true" />
                </div>
                <div className="service-offering-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Pricing;
