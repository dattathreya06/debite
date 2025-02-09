'use client'

import React from 'react';
import IndustryPage from './industry-page';
import type { IndustryPageProps } from './industry-page';

const BankingPage = () => {
  const pageData: IndustryPageProps = {
    title: "Banking & Financial Services",
    description: "Empowering financial institutions with modern technology solutions for the digital age.",
    heroImage: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg",
    
    overview: {
      title: "Transforming Banking Through Technology Innovation",
      content: (
        <>
          <p className="mb-4">
            Debite partners with banks and financial institutions to accelerate their digital 
            transformation journey. Our deep expertise in financial technology enables us to 
            deliver innovative solutions that enhance operational efficiency, improve customer 
            experience, and ensure regulatory compliance.
          </p>
          <p className="mb-4">
            From modernizing core banking systems to implementing cutting-edge digital services, 
            we help financial institutions stay competitive in an increasingly digital world 
            while maintaining the highest standards of security and reliability.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
    },

    stats: [
      {
        value: "40+",
        label: "Financial institutions transformed through digital solutions"
      },
      {
        value: "£2B+",
        label: "In transactions processed through our systems annually"
      },
      {
        value: "99.99%",
        label: "System uptime for critical banking operations"
      },
      {
        value: "30%",
        label: "Average reduction in operational costs for our clients"
      }
    ],

    caseStudies: [
      {
        client: "Major UK Retail Bank",
        title: "Digital Banking Platform Modernization",
        description: "Implemented a cloud-native digital banking platform that reduced transaction processing time by 60% and improved customer satisfaction scores by 40%.",
        image: "https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg",
        link: "#"
      },
      {
        client: "European Investment Bank",
        title: "AI-Powered Risk Assessment System",
        description: "Developed an AI-driven risk assessment system that improved accuracy by 35% and reduced assessment time from days to hours.",
        image: "https://images.pexels.com/photos/7567437/pexels-photo-7567437.jpeg",
        link: "#"
      },
      {
        client: "Digital Challenger Bank",
        title: "Cloud Migration & System Integration",
        description: "Successfully migrated core banking systems to the cloud, reducing operational costs by 45% and enabling rapid scaling capabilities.",
        image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
        link: "#"
      }
    ],

    services: [
      {
        title: "Digital Banking Platforms",
        description: "Modern, cloud-native banking platforms that deliver seamless customer experiences across all channels."
      },
      {
        title: "Payment Solutions",
        description: "Secure, scalable payment processing systems supporting multiple payment methods and instant settlements."
      },
      {
        title: "Risk & Compliance",
        description: "AI-powered risk assessment and automated compliance monitoring systems."
      },
      {
        title: "Core Banking Modernization",
        description: "Transform legacy systems into modern, flexible, and scalable banking infrastructure."
      },
      {
        title: "Open Banking Solutions",
        description: "API-first banking solutions enabling seamless integration with third-party services and partners."
      },
      {
        title: "Banking Analytics",
        description: "Advanced analytics and reporting solutions for better decision-making and customer insights."
      }
    ],

    resources: [
      {
        type: "WHITEPAPER",
        title: "The Future of Digital Banking: Trends and Technologies Shaping Financial Services",
        image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
        link: "#"
      },
      {
        type: "BLOG",
        title: "How Cloud Migration Transformed a Traditional Bank into a Digital Leader",
        image: "https://images.pexels.com/photos/7567437/pexels-photo-7567437.jpeg",
        link: "#"
      },
      {
        type: "BLOG",
        title: "Implementing Open Banking: Challenges and Opportunities",
        image: "https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg",
        link: "#"
      }
    ]
  };

  return <IndustryPage {...pageData} />;
};

export default BankingPage;