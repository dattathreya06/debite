'use client'

import React from 'react';
import IndustryPage from './industry-page';
import type { IndustryPageProps } from './industry-page';

const GovernmentPage = () => {
  const pageData: IndustryPageProps = {
    title: "Government",
    description: "Agile digital solutions for modern public services.",
    heroImage: "https://images.pexels.com/photos/2505693/pexels-photo-2505693.jpeg",
    
    overview: {
      title: "Accelerating digital transformation in government services",
      content: (
        <>
          <p className="mb-4">
            Debite brings fresh perspective and agile solutions to government digital transformation. 
            We specialize in helping public sector organizations embrace modern technology while 
            maintaining the highest standards of security and compliance.
          </p>
          <p className="mb-4">
            Our team combines public sector expertise with cutting-edge technical knowledge to 
            deliver efficient, user-friendly solutions that improve both internal operations and 
            citizen services. We're committed to helping government agencies achieve rapid, 
            meaningful digital transformation.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg"
    },

    stats: [
      {
        value: "40%",
        label: "Average reduction in processing times achieved"
      },
      {
        value: "15+",
        label: "Successful government projects delivered"
      },
      {
        value: "100%",
        label: "Compliance with government security standards"
      },
      {
        value: "98%",
        label: "Client satisfaction rate"
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
        title: "Digital Service Transformation",
        description: "User-centric digital platforms that make government services more accessible and efficient for citizens."
      },
      {
        title: "Cloud Solutions",
        description: "Secure, compliant cloud migration and infrastructure optimization tailored for government needs."
      },
      {
        title: "Data Analytics",
        description: "Actionable insights from government data to improve decision-making and service delivery."
      },
      {
        title: "Security & Compliance",
        description: "Robust security solutions that protect sensitive data while meeting all regulatory requirements."
      },
      {
        title: "Process Automation",
        description: "Smart automation solutions that streamline operations and reduce administrative burden."
      },
      {
        title: "System Integration",
        description: "Seamless integration of new and existing systems for improved efficiency and connectivity."
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

export default GovernmentPage;