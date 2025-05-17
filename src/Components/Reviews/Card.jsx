import React, { useEffect, useRef, useState } from "react";
import "./Review.css"; // Ensure your CSS file is correctly linked
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Card = ({ statement, summary, user, index, className }) => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const ref = useRef(null); // Ref to the card element

  // Effect to observe the card's visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the card is in view
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup the observer
      }
    };
  }, []);

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" }
    }
  };

  // Text animation variants (applied to a container for all text for simplicity)
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: index * 0.1 + 0.2 }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <motion.div
      ref={ref}
      className={`testimonial-card ${className || ''}`} // Applied className prop
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <FaQuoteLeft className="card-quote-icon" />
      <div className="Star">
        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
      </div>
      
      <motion.div variants={textContainerVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
        <motion.p className="card-summary" variants={textItemVariants}>
          {summary} 
        </motion.p>
        <motion.p className="card-statement" variants={textItemVariants}>
          {statement}
        </motion.p>
      </motion.div>

      <div className="card-user-info">
        {/* Assuming user object might have avatar, name, title - adjust as per your data.js */}
        {/* For now, just displaying the user string. You might want to parse it or enhance data.js */}
        {/* <img src={user.avatarUrl || 'default-avatar.png'} alt={user.name} className="card-user-avatar-img" /> */}
        <div>
          <p className="card-user-name">{user.split(", ")[0]}</p>
          {user.split(", ")[1] && <p className="card-user-statement">{user.split(", ")[1]}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
