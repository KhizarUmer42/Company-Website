import React from "react"
import data from "./data.js";
import Services from "../Services/Services";
import '../Services/Services.css'
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaLock, FaBrain } from 'react-icons/fa'; // Import icons

const ServMap = () => {
    
    {console.log(data.title)}
    return (
      <div className="Grid">
        {data.map((dat) => (
          <Services
            key={dat.title} // Use a unique key for each item
            title={dat.title} 
            description={dat.description} 
            Icon={dat.icon}
          />
        ))}
      </div>
    );
  }

export default ServMap;
