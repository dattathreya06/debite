'use client'

import React from 'react';
import IndustryPage from './industry-page';
import type { IndustryPageProps } from './industry-page';

const ManufacturingPage = () => {
  const pageData: IndustryPageProps = {
    title: "Manufacturing",
    description: "Accelerating Industry 4.0 adoption with smart manufacturing solutions.",
    heroImage: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
    
    overview: {
      title: "Transform Your Manufacturing Operations with Industry 4.0",
      content: (
        <>
          <p className="mb-4">
            Debite empowers manufacturers to embrace digital transformation through 
            cutting-edge Industry 4.0 solutions. Our expertise in IoT, automation, and 
            data analytics helps manufacturing businesses optimize operations, reduce costs, 
            and improve product quality.
          </p>
          <p className="mb-4">
            From smart factory implementation to supply chain optimization, we provide 
            end-to-end solutions that drive efficiency and innovation in manufacturing 
            processes while ensuring seamless integration with existing systems.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg"
    },

    stats: [
      {
        value: "45%",
        label: "Average reduction in maintenance costs"
      },
      {
        value: "30+",
        label: "Smart factories implemented"
      },
      {
        value: "99.9%",
        label: "Production quality improvement"
      },
      {
        value: "60%",
        label: "Reduction in downtime through predictive maintenance"
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
        title: "Smart Factory Solutions",
        description: "End-to-end smart factory implementation with IoT integration and real-time monitoring."
      },
      {
        title: "Industrial IoT",
        description: "Connected sensor networks and edge computing solutions for real-time data collection and analysis."
      },
      {
        title: "Predictive Maintenance",
        description: "AI-powered maintenance prediction systems to minimize downtime and optimize maintenance schedules."
      },
      {
        title: "Supply Chain Optimization",
        description: "Intelligent supply chain management with real-time tracking and demand forecasting."
      },
      {
        title: "Quality Control Automation",
        description: "Automated quality inspection systems using computer vision and AI."
      },
      {
        title: "Manufacturing Analytics",
        description: "Advanced analytics platforms for production optimization and decision support."
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

export default ManufacturingPage;