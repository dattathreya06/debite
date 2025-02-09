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
        client: "Leading Life Insurer",
        title: "Digital Claims Transformation",
        description: "Implemented an AI-powered claims processing system that reduced processing time from days to hours and improved accuracy by 35%.",
        image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg",
        link: "#"
      },
      {
        client: "Global Property Insurer",
        title: "Risk Assessment Modernization",
        description: "Developed a machine learning-based risk assessment platform that improved underwriting accuracy by 45% and reduced assessment time by 60%.",
        image: "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg",
        link: "#"
      },
      {
        client: "Digital Insurance Startup",
        title: "Customer Portal Development",
        description: "Created a modern self-service portal that increased customer engagement by 80% and reduced support calls by 50%.",
        image: "https://images.pexels.com/photos/7681960/pexels-photo-7681960.jpeg",
        link: "#"
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
        type: "WHITEPAPER",
        title: "Digital Insurance: The Future of Risk Management",
        image: "https://images.pexels.com/photos/7681960/pexels-photo-7681960.jpeg",
        link: "#"
      },
      {
        type: "BLOG",
        title: "How AI is Transforming Claims Processing",
        image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg",
        link: "#"
      },
      {
        type: "BLOG",
        title: "The Rise of Digital-First Insurance Companies",
        image: "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg",
        link: "#"
      }
    ],
  };

  return <IndustryPage {...pageData} />;
};

export default InsurancePage;