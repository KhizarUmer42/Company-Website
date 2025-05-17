import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import blue from '../../assets/blue.png';
import './Contact.css';
import axios from 'axios';
import { motion } from 'framer-motion'; // Import motion for animations

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        region: '',
        projectDetails: '',
        contactForCareer: false,
    });
    
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            phoneNumber: value,
        });
    };

    const SumbitInfo = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await axios.post('http://localhost:5000/SubmitData', formData);
            if (response.status >= 201 && response.status <= 300) {
                setFormSubmitted(true);
                // Reset form after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    companyName: '',
                    region: '',
                    projectDetails: '',
                    contactForCareer: false,
                });
            }
        } catch (err) {
            alert('There was an error submitting your form. Please try again.');
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className='contact-section'>  
            <div className='contact-header'>
                <img src={blue} alt="Logo" className='contact-logo' />
            </div>
            
            <motion.div 
                className='contact-container'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <motion.div className='contact-intro' variants={itemVariants}>
                    <h2>Let's discuss your project</h2>
                    <p>We are committed to understanding your requirements and crafting a tailored solution that aligns with your goals.</p>
                </motion.div>
                
                {formSubmitted ? (
                    <motion.div 
                        className="success-message"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="success-icon">✓</div>
                        <h3>Thank you for reaching out!</h3>
                        <p>Your message has been successfully submitted. We'll get back to you shortly.</p>
                    </motion.div>
                ) : (
                    <motion.form 
                        className="contact-form"
                        onSubmit={SumbitInfo}
                        variants={itemVariants}
                    >
                        <div className="form-row">
                            <motion.div className="form-group" variants={itemVariants}>
                                <label>
                                    <span>First Name<span className="required">*</span></span>
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                        required 
                                        placeholder="Enter your first name"
                                    />
                                </label>
                            </motion.div>
                            
                            <motion.div className="form-group" variants={itemVariants}>
                                <label>
                                    <span>Last Name<span className="required">*</span></span>
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                        required 
                                        placeholder="Enter your last name"
                                    />
                                </label>
                            </motion.div>
                        </div>
                        
                        <div className="form-row">
                            <motion.div className="form-group" variants={itemVariants}>
                                <label>
                                    <span>Email<span className="required">*</span></span>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required 
                                        placeholder="Enter your email address"
                                    />
                                </label>
                            </motion.div>
                            
                            <motion.div className="form-group" variants={itemVariants}>
                                <label>
                                    <span>Phone Number<span className="required">*</span></span>
                                    <PhoneInput
                                        defaultCountry={'US'}
                                        value={formData.phoneNumber}
                                        onChange={handlePhoneChange}
                                        inputProps={{
                                            name: 'phoneNumber',
                                            required: true,
                                            placeholder: "Enter your phone number"
                                        }}
                                    />
                                </label>
                            </motion.div>
                        </div>
                        
                        <div className="form-row">
                            <motion.div className="form-group" variants={itemVariants}>
                                <label>
                                    <span>Company Name<span className="required">*</span></span>
                                    <input 
                                        type="text" 
                                        name="companyName" 
                                        value={formData.companyName} 
                                        onChange={handleChange} 
                                        required 
                                        placeholder="Enter your company name"
                                    />
                                </label>
                            </motion.div>
                            
                            <motion.div className="form-group" variants={itemVariants}>
                                <label>
                                    <span>Region<span className="required">*</span></span>
                                    <select 
                                        name="region" 
                                        value={formData.region} 
                                        onChange={handleChange} 
                                        required
                                    >
                                        <option value="">Please Select</option>
                                        <option value="Middle East & North Africa">Middle East & North Africa</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Kingdom of Saudi Arabia">Kingdom of Saudi Arabia</option>
                                        <option value="Australia & New Zealand">Australia & New Zealand</option>
                                        <option value="Asia">Asia</option>
                                        <option value="Europe">Europe</option>
                                        <option value="Rest of World">Rest of World</option>
                                    </select>
                                </label>
                            </motion.div>
                        </div>
                        
                        <motion.div className="form-group full-width" variants={itemVariants}>
                            <label>
                                <span>Project Details<span className="required">*</span></span>
                                <textarea 
                                    name="projectDetails" 
                                    value={formData.projectDetails} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Tell us about your project and requirements"
                                />
                            </label>
                        </motion.div>
                        
                        <motion.div className="form-group checkbox-container" variants={itemVariants}>
                            <label className="checkbox-group">
                                <input 
                                    type="checkbox" 
                                    name="contactForCareer" 
                                    checked={formData.contactForCareer} 
                                    onChange={handleChange} 
                                />
                                <span>I am contacting about internship or career opportunities</span>
                            </label>
                        </motion.div>
                        
                        <motion.button 
                            type="submit" 
                            className="submit-button"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variants={itemVariants}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </motion.button>
                    </motion.form>
                )}
            </motion.div>
        </div>
    );
};

export default ContactForm;