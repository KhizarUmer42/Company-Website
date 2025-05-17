import React from "react";
import './Review.css';
import Card from "./Card";
import testimonials from './test.js';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    }
  }
};

const headerVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

const cardItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "circOut" }
  }
};

const Review = () => {
  return (
    <motion.section
      className="reviews-section"
      id="RevieW"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <motion.div 
        className="reviews-header"
        variants={headerVariants}
      >
        <h2 className="reviews-section-title">Our Testimonials</h2>
        <h3 className="reviews-main-title">
          We've helped our clients complete 3,000+ projects
        </h3>
        <p className="reviews-subtitle">
          Over the last 15 years, we've been driven by our passion for helping global clients achieve their goals.
        </p>
      </motion.div>

      <motion.div
        className="testimonial-grid"
        variants={cardGridVariants}
      >
        {testimonials.map((item, index) => (
          <motion.div variants={cardItemVariants} key={item.user + index}>
            <Card
              index={index}
              statement={item.statement}
              summary={item.summary}
              user={item.user}
              className="testimonial-card"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Review;
