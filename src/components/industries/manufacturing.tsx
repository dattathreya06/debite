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
        client: "Global Automotive Supplier",
        title: "Smart Factory Transformation",
        description: "Implemented IoT sensors and real-time analytics, reducing production downtime by 45% and improving quality control efficiency by 60%.",
        image: "https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg",
        link: "#"
      },
      {
        client: "Electronics Manufacturer",
        title: "Supply Chain Optimization",
        description: "Deployed AI-driven supply chain management system that reduced inventory costs by 30% and improved delivery accuracy to 99.5%.",
        image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
        link: "#"
      },
      {
        client: "Industrial Equipment Maker",
        title: "Predictive Maintenance System",
        description: "Developed an IoT-based predictive maintenance solution that reduced unexpected equipment failures by 75% and maintenance costs by 40%.",
        image: "https://images.pexels.com/photos/3846259/pexels-photo-3846259.jpeg",
        link: "#"
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
        type: "WHITEPAPER",
        title: "Industry 4.0: A Roadmap to Smart Manufacturing",
        image: "https://images.pexels.com/photos/3846259/pexels-photo-3846259.jpeg",
        link: "#"
      },
      {
        type: "BLOG",
        title: "The Role of AI in Modern Manufacturing",
        image: "https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg",
        link: "#"
      },
      {
        type: "VIDEO",
        title: "Smart Factory Implementation: Best Practices and Success Stories",
        image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
        link: "#"
      }
    ]
  };

  return <IndustryPage {...pageData} />;
};

export default ManufacturingPage;