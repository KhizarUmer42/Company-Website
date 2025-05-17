import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import ReCAPTCHA from 'react-google-recaptcha'; // Import the reCAPTCHA component
import 'react-phone-number-input/style.css'
import blue from '../../assets/blue.png';
import './Contact.css';
import axios from 'axios';




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
    
    const [captchaValue, setCaptchaValue] = useState(null); // State to store reCAPTCHA value

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

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value); // Store the reCAPTCHA response
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if captcha is validated
        {/*
        if (!captchaValue) {
            alert('Please complete the reCAPTCHA');
            return;
        }
        */}

        // Submit your form data
        console.log(formData);
        {/*console.log('reCAPTCHA value:', captchaValue);*/}
        
        // You can also send this value to your backend to verify it
    };
    const SumbitInfo = async (e) => {
        e.preventDefault();
        console.log(
            formData
        )
        
        try{
            const response= await axios.post('http://localhost:5000/SubmitData',formData)
            if(response.status >=201 && response.status <=300){
                alert('data submitted with '+response.data)
            }
        }
        catch(err){
            alert(err)

        }

        

    }
    return (
        <div className='Contactcontainer'>  
            <div className='headman'>
                <img src={blue} alt="d" id='contactlogo' />
            </div>
            <div className='t1'>
                <h2>Let's discuss your project</h2>
                <p>We are committed to understanding your requirements and crafting a tailored solution that aligns with your goals.</p>
            </div>
            <form onSubmit={handleSubmit} >
                <label>
                    <div className='red'>
                     First Name<span className="required">*</span>
                    </div>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                
                <label>
                    <div className='inlin'>        
                        Last Name<span className="required">*</span>
                    </div>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                
                <label>
                    <div className='red'>  
                        Email<span className="required">*</span>
                    </div>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                
                <label>
                    <div className='red'>  
                        Phone Number<span className="required">*</span>
                    </div>   
                    <PhoneInput
                        defaultCountry={'US'}
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}
                        inputProps={{
                            name: 'phoneNumber',
                            required: true,
                        }}
                    />
                </label>
                
                <label>
                    <div className='red'>  
                         Company Name<span className="required">*</span>
                    </div>        
                    <input 
                        type="text" 
                        name="companyName" 
                        value={formData.companyName} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                
                <label>
                    <div className='red'>  
                        Region<span className="required">*</span>
                    </div>      
                    <select 
                        name="region" 
                        value={formData.region} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Please Select</option>
                        <option value="Middle East & North Africa">Middle East & North Africa</option>
                        <option value="USA">USA</option>
                        <option value="Canada<">Canada</option>
                        <option value="Kingdom of Saudi Arabia">Kingdom of Saudi Arabia</option>
                        <option value="Australia & New Zealand">Australia & New Zealand</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Rest of World">Rest of World</option>

                    </select>
                </label>
                
                <label>
                    <div className='red'> 
                        Project Details<span className="required">*</span>
                    </div>     
                    <textarea 
                        name="projectDetails" 
                        value={formData.projectDetails} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                
                <label className="checkbox-group">
                    <input 
                        type="checkbox" 
                        name="contactForCareer" 
                        checked={formData.contactForCareer} 
                        onChange={handleChange} 
                    />
                    <span>I am contacting Devsinc about internship or career opportunities</span>
                </label>

                {/* Add reCAPTCHA here */}
                {/*<div className="recaptcha">
                    <ReCAPTCHA
                        sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your site key
                        onChange={handleCaptchaChange} // Handle captcha response
                    />
                </div>
                */}
                
                <button type="submit" onClick={SumbitInfo}>Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;