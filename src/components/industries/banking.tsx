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
    ]
  };

  return <IndustryPage {...pageData} />;
};

export default BankingPage;