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
        client: "An Auto Dealer",
        title: "Modernizing Dealership Operations with Custom ERP",
        description: "We developed and implemented a comprehensive ERP solution that streamlined inventory management, sales processes, and customer relationships for a growing dealership network.",
        image: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "/insights/case-studies/dealership-erp-modernization/"
      },
      {
        client: "Automotive Service Centers",
        title: "Integrated Payment Gateway for Multi-Location Service Centers",
        description: "Our team implemented a secure, scalable payment solution that handles both in-person and online transactions across multiple service locations.",
        image: "https://images.pexels.com/photos/4488641/pexels-photo-4488641.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "/insights/case-studies/integrated-payment-gateway-service-centers"
      },
      {
        client: "Automotive Parts Manufacturer",
        title: "Smart Manufacturing with IoT & AI",
        description: "Debite helped an automotive parts manufacturer transform its production lines by integrating IoT-enabled sensors, AI-driven analytics, and automated quality control.",
        image: "https://images.pexels.com/photos/10664009/pexels-photo-10664009.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "/insights/case-studies/smart-manufacturing-iot/"
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
        title: "Cloud Migration Strategies: A Comprehensive Guide",
        image: "https://images.pexels.com/photos/14314638/pexels-photo-14314638.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "/insights/blog/cloud-migration-strategies-guide/"
      },
      {
        type: "BLOG",
        title: "Cloud Security & Data Protection",
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/insights/case-studies/cloud-security-data-protection/"
      },
      {
        type: "BLOG",
        title: "The Future of Cloud Computing: Trends and Innovations",
        image: "https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/insights/blog/future-of-cloud-computing-trends-and-innovations/"
      }
    ],

  
  };

  return <IndustryPage {...pageData} />;
};

export default AutomotivePage;