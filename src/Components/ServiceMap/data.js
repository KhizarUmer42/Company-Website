import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaLock, FaBrain, FaCheckCircle, FaStar, FaLightbulb, FaUsers, FaRobot, FaChartLine, FaCode, FaDatabase, FaCloud } from 'react-icons/fa';

const data = [
    {
        title: "Web Development",
        description: "Encompasses building and maintaining websites, including front-end (user interface) and back-end (server-side) development.",
        icon: FaLaptopCode,
        overview: "Our web development service delivers cutting-edge, responsive websites that engage users and drive business growth. We combine modern technologies with best practices in UI/UX design to create seamless digital experiences.",
        howWeHelp: [
            "Full-stack development using the latest technologies and frameworks",
            "Responsive design ensuring perfect display across all devices",
            "Performance optimization and SEO-friendly implementation",
            "Ongoing maintenance and security updates"
        ],
        innovation: "We stay ahead of web technologies, implementing progressive web apps (PWAs), serverless architectures, and AI-driven features to create next-generation web experiences that set new standards in performance and user engagement.",
        stats: [
            { value: "99%", label: "Client Satisfaction", Icon: FaStar },
            { value: "200+", label: "Websites Launched", Icon: FaCheckCircle },
            { value: "12+", label: "Years Experience", Icon: FaLightbulb }
        ],
        caseStudies: [
            {
                id: "web1",
                title: "E-commerce Platform Redesign",
                summary: "Transformed an outdated online store into a modern e-commerce platform, resulting in 85% increase in mobile sales.",
                image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
                link: "#"
            },
            {
                id: "web2",
                title: "SaaS Dashboard Development",
                summary: "Built a comprehensive analytics dashboard that processes real-time data for over 10,000 daily active users.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                link: "#"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80"
    },
    {
        title: "Graphic Design",
        description: "The art of visual communication through typography, photography, iconography, and illustration.",
        icon: FaPaintBrush,
        overview: "Our graphic design service transforms ideas into compelling visual stories. We create designs that not only look stunning but also effectively communicate your brand's message and values.",
        howWeHelp: [
            "Brand identity design and guidelines development",
            "Marketing materials and social media assets creation",
            "UI/UX design for digital platforms",
            "Print and packaging design solutions"
        ],
        innovation: "We blend traditional design principles with cutting-edge digital tools and AI-assisted workflows to create unique, trend-setting visuals that capture attention and drive engagement.",
        stats: [
            { value: "98%", label: "Design Approval Rate", Icon: FaStar },
            { value: "500+", label: "Projects Completed", Icon: FaCheckCircle },
            { value: "15+", label: "Design Awards", Icon: FaLightbulb }
        ],
        caseStudies: [
            {
                id: "design1",
                title: "Global Brand Identity",
                summary: "Created a versatile brand identity system for a multinational company, implemented across 20+ countries.",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
                link: "#"
            },
            {
                id: "design2",
                title: "Product Packaging Revolution",
                summary: "Redesigned product packaging leading to 45% increase in shelf visibility and sales.",
                image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                link: "#"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1572044162444-24c95f21f2da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Mobile Development",
        description: "The process of creating software applications that run on mobile devices.",
        icon: FaMobileAlt,
        overview: "We create native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile solutions are built with performance, security, and scalability in mind.",
        howWeHelp: [
            "Native iOS and Android app development",
            "Cross-platform development using React Native/Flutter",
            "Mobile app UI/UX design and prototyping",
            "App store optimization and deployment"
        ],
        innovation: "We leverage the latest mobile technologies including AR/VR, machine learning, and IoT integration to create innovative apps that push the boundaries of what's possible on mobile devices.",
        stats: [
            { value: "4.8★", label: "App Store Rating", Icon: FaStar },
            { value: "100+", label: "Apps Launched", Icon: FaCheckCircle },
            { value: "8+", label: "Industry Awards", Icon: FaLightbulb }
        ],
        caseStudies: [
            {
                id: "mobile1",
                title: "Fitness Tracking Revolution",
                summary: "Developed a fitness app with ML-powered workout recognition, achieving 1M+ downloads.",
                image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                link: "#"
            },
            {
                id: "mobile2",
                title: "Retail AR Experience",
                summary: "Created an AR-powered shopping app that reduced returns by 35% and increased engagement by 150%.",
                image: "https://images.unsplash.com/photo-1633536726481-465c3676851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                link: "#"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1607703740500-82196001da69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Cyber Security Solutions",
        description: "Protecting systems, networks, and programs from digital attacks, ensuring data integrity and confidentiality.",
        icon: FaLock,
        overview: "Our comprehensive cybersecurity solutions protect your digital assets from evolving threats. We implement robust security measures while ensuring operational efficiency.",
        howWeHelp: [
            "Security audits and vulnerability assessments",
            "Implementation of security protocols and systems",
            "24/7 monitoring and threat detection",
            "Employee security training and awareness"
        ],
        innovation: "We employ AI-driven threat detection, blockchain security protocols, and zero-trust architecture to provide cutting-edge protection against sophisticated cyber threats.",
        stats: [
            { value: "100%", label: "Threat Detection", Icon: FaStar },
            { value: "0", label: "Security Breaches", Icon: FaCheckCircle },
            { value: "24/7", label: "Monitoring", Icon: FaLightbulb }
        ],
        caseStudies: [
            {
                id: "security1",
                title: "Financial Institution Security",
                summary: "Implemented advanced security measures for a major bank, preventing 100,000+ potential threats annually.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                link: "#"
            },
            {
                id: "security2",
                title: "Healthcare Data Protection",
                summary: "Developed a HIPAA-compliant security system protecting millions of patient records.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                link: "#"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Generative AI Solutions",
        description: "Custom generative AI models for content creation, design, and automation tailored to your business needs.",
        icon: FaRobot,
        backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Predictive Analytics",
        description: "Advanced analytics solutions using machine learning to forecast trends and make data-driven decisions.",
        icon: FaChartLine,
        backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Machine Learning Integration",
        description: "Seamlessly integrate machine learning models into your existing systems and workflows.",
        icon: FaBrain,
        backgroundImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Custom AI Development",
        description: "Bespoke AI solutions designed and developed specifically for your unique business challenges.",
        icon: FaCode,
        backgroundImage: "https://images.unsplash.com/photo-1676277791608-ac54b2c89b03?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Data Processing & Analytics",
        description: "Transform raw data into actionable insights with our advanced processing and analytics solutions.",
        icon: FaDatabase,
        backgroundImage: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Cloud AI Solutions",
        description: "Scalable, cloud-based AI solutions that grow with your business needs.",
        icon: FaCloud,
        backgroundImage: "https://images.unsplash.com/photo-1505778276668-26b3ff7af103?q=80&w=1000&auto=format&fit=crop"
    }
];

export default data;