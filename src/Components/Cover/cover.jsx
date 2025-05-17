import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";
import "./cover.css";
import { useNavigate } from "react-router-dom";

const Cover = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const navigate = useNavigate();
  const controls = useAnimation();
  const glowControls1 = useAnimation();
  const glowControls2 = useAnimation();
  const glowControls3 = useAnimation();

  // Enhanced scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    // Enhanced background animation
    controls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 3, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    });

    // Enhanced glow orb animations with continuous right-to-left movement
    const glowAnimation = (delay) => ({
      x: [window.innerWidth, -window.innerWidth],
      opacity: [0, 0.7, 0],
      scale: [1, 1.3, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        delay,
        times: [0, 0.5, 1]
      }
    });

    glowControls1.start(glowAnimation(0));
    glowControls2.start(glowAnimation(6));
    glowControls3.start(glowAnimation(12));
  }, [controls, glowControls1, glowControls2, glowControls3]);

  // Function to generate random Y position
  const getRandomY = () => Math.random() * window.innerHeight;

  // Function to create particle variants
  const createParticleVariants = (index) => ({
    initial: {
      x: window.innerWidth + Math.random() * 100,
      y: getRandomY(),
      scale: Math.random() * 0.6 + 0.4,
      opacity: Math.random() * 0.4 + 0.3
    },
    animate: {
      x: -100,
      y: getRandomY(),
      transition: {
        duration: Math.random() * 15 + 20,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        delay: (index % 10) * 2 // Stagger the start times
      }
    }
  });

  const handleButtonClick = () => {
    navigate("/contact");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      className="cover-container"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="animated-background"
        animate={controls}
        style={{
          y: backgroundY,
          scale: backgroundScale
        }}
      />

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`glow-orb-${i}`}
          className={`glow-orb glow-orb-${i + 1}`}
          initial={{ x: window.innerWidth, opacity: 0 }}
          animate={{
            x: [-100, window.innerWidth],
            opacity: [0, 0.6, 0],
            transition: {
              duration: 25,
              repeat: Infinity,
              delay: i * 8,
              ease: "linear"
            }
          }}
        />
      ))}

      <div className="background-overlay" />

      <div className="particles">
        {[...Array(40)].map((_, i) => {
          const variants = createParticleVariants(i);
          return (
            <motion.div
              key={i}
              className="particle"
              initial="initial"
              animate="animate"
              variants={variants}
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px"
              }}
            />
          );
        })}
      </div>

      <motion.div
        className="cover-content"
        style={{ 
          opacity: contentOpacity,
          y: contentY
        }}
      >
        <motion.h1
          className="cover-title"
          variants={itemVariants}
        >
          <span className="highlight">Outperform</span> the Competition with{" "}
          <span className="highlight">Custom AI Solutions</span>
        </motion.h1>

        <motion.p
          className="cover-description"
          variants={itemVariants}
        >
          Work with our expert team to craft custom AI solutions that automate tasks,
          increase ROI, and align with your industry's unique needs.
        </motion.p>

        <motion.div
          className="cover-buttons"
          variants={itemVariants}
        >
          <motion.button
            className="primary-button"
            onClick={handleButtonClick}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Free Strategy Call
          </motion.button>

          <motion.button
            className="secondary-button"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            See Our Work
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cover;
