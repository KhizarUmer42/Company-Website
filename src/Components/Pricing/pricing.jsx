import React from "react";
import { motion } from "framer-motion";
import './pricing.css';
import s1 from "../../assets/1r.png";
import s2 from "../../assets/2r.png";
import s3 from "../../assets/3.png";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate()
  const handlesubmit = () =>{
    navigate("/contact")
  }
  // Define animation variants
  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="pricemain" id="PricinG">
      <div className="flex">
        {/* Left Section */}
        <motion.div
          className="detail"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }} // Trigger animation when 5% is visible
          variants={leftVariant}
        >
          <p style={{ margin: "0", color: "#4f7bda", fontWeight: "bold" }}>Pricing</p>
          <h1 className="myh5">
            We leverage the <span style={{ color: "#4f7bda" }}>latest advancements in AI</span> to deliver the highest quality technology,
            <span style={{ color: "#4f7bda" }}> on time and on budget.</span>
          </h1>
          <p style={{ fontSize: "larger", color: "rgb(121, 135, 161)" }}>
            We’ve been helping customers since 2009 and take pride in delivering high-quality custom services designed to help you build, grow, and revolutionize your business.
          </p>
          <button className="transparent-btn">See our reviews</button>
          <div className="projects">
            <div className="proj">
              <h1>236+</h1>
              <p style={{ margin: "0", color: "black" }}>Active clients</p>
            </div>
            <div className="proj">
              <h1>3000+</h1>
              <p>Projects Delivered</p>
            </div>
            <div className="proj">
              <h1>23+</h1>
              <p>Countries Supported</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="price"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }} // Trigger animation when 5% is visible
          variants={rightVariant}
        >
          <div className="Contactus">
            <div className="inner">
              <p className='inner-p' >Starting from</p>
              <h1 className='inner-h1' >$22/hour</h1>
            </div>
            <button className="contactbtn" onClick={handlesubmit}>Contact Us</button>
          </div>
          <p className='Right-text' style={{ color: "rgb(121, 135, 161)", fontSize: "large", marginTop: "10%" }}>
            With tools like ChatGPT and CoPilot, software development is being rapidly enabled by machines. Devsinc engineers are trained with these technologies, improving the ROI of your project.
          </p>
          <p className='Right-text' style={{ color: "rgb(121, 135, 161)", fontSize: "large" }}>
            Experience working with us for 2 weeks completely free of charge.
          </p>
          <p className='Right-text' style={{ color: "rgb(121, 135, 161)", fontSize: "large" }}>
            We guarantee that we will make a positive impact on your project or continue working for free until we do.
          </p>
          <div className="servicecontainer">
            <div className="serv">
              <div className="image">
                <img src={s1} alt="Software Outsourcing" />
              </div>
              <div className="p">
                <h1 style={{ fontSize: "large", margin: "0" }}>Software Outsourcing</h1>
                <p className='Right-text' style={{ margin: "0", padding: "10px 0", color: "rgb(121, 135, 161)", fontSize: "16px", fontWeight: "500" }}>
                  Let us handle end-to-end delivery with complete software development outsourcing.
                </p>
              </div>
            </div>
            <div className="serv">
              <div className="image">
                <img src={s2} style={{ color: "#4f7bda" }} alt="Staff Augmentation" />
              </div>
              <div className="p">
                <h1 style={{ fontSize: "large", margin: "0" }}>Staff Augmentation</h1>
                <p className='Right-text' style={{ margin: "0", padding: "10px 0", color: "rgb(121, 135, 161)", fontSize: "16px", fontWeight: "450" }}>
                  Add talent to your existing team through us and save time on sourcing, recruiting, and training.
                </p>
              </div>
            </div>
            <div className="serv">
              <div className="image">
                <img src={s3} alt="Dedicated Teams" />
              </div>
              <div className="p">
                <h1 style={{ fontSize: "large", margin: "0" ,alignSelf:'center'}}>Dedicated Teams</h1>
                <p className='Right-text' style={{ margin: "0", padding: "10px 0", color: "rgb(121, 135, 161)", fontSize: "16px", fontWeight: "500" }}>
                  Move faster with a dedicated and functional team to your existing software development process.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
