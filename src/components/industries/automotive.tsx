'use client'

import React from 'react';
import IndustryPage from './industry-page';
import type { IndustryPageProps } from './industry-page';

const AutomotivePage = () => {
  const pageData: IndustryPageProps = {
    title: "Automotive Solutions",
    description: "Driving digital transformation in the automotive industry with innovative software solutions.",
    heroImage: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg",
    
    overview: {
      title: "Your technology partner for automotive digital transformation",
      content: (
        <>
          <p className="mb-4">
            Debite specializes in delivering cutting-edge software solutions and digital 
            transformation services to the automotive industry. From payment gateway 
            integration to comprehensive ERP systems, we help automotive businesses 
            modernize their operations and enhance customer experiences.
          </p>
          <p className="mb-4">
            Our expertise in custom software development, payment solutions, and digital 
            transformation enables automotive businesses to streamline operations, improve 
            efficiency, and stay competitive in an increasingly digital marketplace.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg"
    },

    stats: [
      {
        value: "50+",
        label: "Successful digital transformation projects delivered"
      },
      {
        value: "25+",
        label: "Integrated payment gateway solutions implemented"
      },
      {
        value: "15+",
        label: "Custom ERP systems deployed"
      },
      {
        value: "99%",
        label: "System uptime for our solutions"
      }
    ],

    caseStudies: [
      {
        client: "AutoTech Solutions",
        title: "Modernizing Dealership Operations with Custom ERP",
        description: "We developed and implemented a comprehensive ERP solution that streamlined inventory management, sales processes, and customer relationships for a growing dealership network.",
        image: "https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "#"
      },
      {
        client: "EV Service Pro",
        title: "Integrated Payment Gateway for Multi-Location Service Centers",
        description: "Our team implemented a secure, scalable payment solution that handles both in-person and online transactions across multiple service locations.",
        image: "https://images.pexels.com/photos/30092951/pexels-photo-30092951/free-photo-of-classic-mclaren-racing-car-on-display.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "#"
      },
      {
        client: "Premier Auto Parts",
        title: "E-commerce Platform with Real-time Inventory",
        description: "Developed a custom e-commerce solution with real-time inventory management and integrated payment processing for this growing auto parts distributor.",
        image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "#"
      }
    ],

    services: [
      {
        title: "Custom Software Development",
        description: "Tailored software solutions designed specifically for automotive business needs, from inventory management to customer relationship systems."
      },
      {
        title: "Payment Gateway Solutions",
        description: "Secure, integrated payment processing systems that handle both online and physical transactions seamlessly."
      },
      {
        title: "ERP Implementation",
        description: "Comprehensive ERP solutions that integrate all aspects of automotive operations, from inventory to finance."
      },
      {
        title: "Digital Transformation",
        description: "End-to-end digital transformation services to modernize automotive business operations and customer experiences."
      },
      {
        title: "E-commerce Solutions",
        description: "Custom e-commerce platforms with integrated inventory management and payment processing."
      },
      {
        title: "Cloud Migration Services",
        description: "Secure and efficient cloud migration services to modernize legacy systems and improve scalability."
      }
    ],

    resources: [
      {
        type: "BLOG",
        title: "Digital Transformation in Automotive: From Legacy Systems to Modern Solutions",
        image: "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "#"
      },
      {
        type: "VIDEO",
        title: "How Modern Payment Solutions Are Revolutionizing Auto Services",
        image: "/images/video-mobility.jpg",
        link: "#"
      },
      {
        type: "WHITEPAPER",
        title: "The Future of Automotive ERP: Integration, Automation, and Innovation",
        image: "/images/whitepaper-sdv.jpg",
        link: "#"
      }
    ],

  
  };

  return <IndustryPage {...pageData} />;
};

export default AutomotivePage;