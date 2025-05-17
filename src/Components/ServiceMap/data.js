import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaLock, FaBrain } from 'react-icons/fa'; // Import icons

const data = [
    {
        title: "Web Development",
        description: "Encompasses building and maintaining websites, including front-end (user interface) and back-end (server-side) development.",
        icon: FaLaptopCode  // Web Development Icon
    },
    {
        title: "Graphic Design",
        description: "The art of visual communication through typography, photography, iconography, and illustration.",
        icon: FaPaintBrush  // Graphic Design Icon
    },
    {
        title: "Mobile Development",
        description: "The process of creating software applications that run on mobile devices.",
        icon: FaMobileAlt  // Mobile Development Icon
    },
    {
        title: "Custom Solutions",
        description: "Tailored software solutions designed to meet the unique needs of businesses and individuals.",
        icon: FaLaptopCode  // Custom Solutions Icon (Using same as Web Development for example)
    },
    {
        title: "Cyber Security Solutions",
        description: "Protecting systems, networks, and programs from digital attacks, ensuring data integrity and confidentiality.",
        icon: FaLock  // Cyber Security Icon
    },
    {
        title: "Generative AI",
        description: "Utilizing artificial intelligence to generate new content, including text, images, and more.",
        icon: FaBrain  // Generative AI Icon
    }
];


export default data;