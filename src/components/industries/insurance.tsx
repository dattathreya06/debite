'use client'

import React from 'react';
import IndustryPage from './industry-page';
import type { IndustryPageProps } from './industry-page';

const InsurancePage = () => {
  const pageData: IndustryPageProps = {
    title: "Insurance",
    description: "Modernizing insurance operations with digital innovation and automation.",
    heroImage: "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg",
    
    overview: {
      title: "Revolutionizing Insurance with Digital Technology",
      content: (
        <>
          <p className="mb-4">
            Debite partners with insurance providers to modernize their operations through 
            digital transformation. Our solutions streamline claims processing, enhance risk 
            assessment, and deliver superior customer experiences through digital channels.
          </p>
          <p className="mb-4">
            By leveraging AI, automation, and advanced analytics, we help insurers reduce 
            operational costs, improve accuracy, and accelerate their digital transformation 
            journey while maintaining compliance and security.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
    },

    stats: [
      {
        value: "75%",
        label: "Reduction in claims processing time"
      },
      {
        value: "50+",
        label: "Insurance providers transformed"
      },
      {
        value: "40%",
        label: "Decrease in fraudulent claims"
      },
      {
        value: "90%",
        label: "Customer satisfaction rate"
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
        title: "Digital Claims Processing",
        description: "Automated claims processing solutions with AI-powered assessment and fraud detection."
      },
      {
        title: "Risk Assessment Systems",
        description: "Advanced risk modeling and assessment platforms using machine learning and big data."
      },
      {
        title: "Customer Self-Service Portals",
        description: "Modern, user-friendly portals for policy management and claims submission."
      },
      {
        title: "Insurance Analytics",
        description: "Comprehensive analytics solutions for better underwriting and risk management."
      },
      {
        title: "Fraud Detection",
        description: "AI-powered systems to identify and prevent fraudulent claims."
      },
      {
        title: "Policy Management Systems",
        description: "Digital platforms for efficient policy administration and management."
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

export default InsurancePage;