'use client'

import React from 'react';
import ServicePage from './services-page';
import type { ServicePageProps } from './services-page';
import { 
  Wallet, 
  ShieldCheck, 
  ArrowLeftRight, 
  Smartphone, 
  BarChart3, 
  QrCode 
} from 'lucide-react';

const UPIPaymentsServicePage = () => {
  const pageData: ServicePageProps = {
    title: "UPI Payments Solutions",
    description: "Build secure, scalable, and seamless UPI payment experiences with our comprehensive payment solutions.",
    heroImage: "https://uniquetimes.org/wp-content/uploads/2023/07/best-upi-apps-in-india-Cover-Image.jpg",
    
    overview: {
      title: "Accelerate your digital payments transformation with UPI",
      content: (
        <>
          <p className="mb-4">
            Our UPI Payments Solutions help businesses integrate India's revolutionary 
            Unified Payments Interface into their digital ecosystem. From seamless payment 
            processing to advanced analytics, we provide end-to-end solutions that drive 
            adoption and enhance customer experience.
          </p>
          <p className="mb-4">
            With our deep expertise in payment systems and financial technology, we enable 
            organizations to leverage UPI's real-time payment capabilities while ensuring 
            security, compliance, and scalability.
          </p>
        </>
      ),
      image: "/api/placeholder/800/600"
    },

    capabilities: [
      {
        title: "UPI Integration Services",
        description: "End-to-end UPI integration solutions including payment gateway setup, API implementation, and systems integration.",
        icon: ArrowLeftRight
      },
      {
        title: "Security & Compliance",
        description: "Robust security measures and compliance frameworks ensuring safe transactions and regulatory adherence.",
        icon: ShieldCheck
      },
      {
        title: "Mobile Payment Solutions",
        description: "Custom mobile payment solutions with UPI integration for both Android and iOS platforms.",
        icon: Smartphone
      },
      {
        title: "QR Code Solutions",
        description: "Dynamic and static QR code generation and management systems for contactless payments.",
        icon: QrCode
      },
      {
        title: "Payment Analytics",
        description: "Advanced analytics and reporting tools for transaction monitoring and business insights.",
        icon: BarChart3
      },
      {
        title: "Digital Wallet Integration",
        description: "Seamless integration with popular digital wallets and UPI-enabled applications.",
        icon: Wallet
      }
    ],

    caseStudies: [
      {
        client: "Major Retail Chain",
        title: "Nationwide UPI Payment Implementation",
        description: "Implemented UPI payment system across 500+ stores, resulting in 40% increase in digital transactions and improved customer satisfaction.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "E-commerce Platform",
        title: "Seamless UPI Integration",
        description: "Integrated UPI payment gateway reducing checkout time by 60% and increasing payment success rate by 25%.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "Quick Service Restaurant Chain",
        title: "QR-Based Payment Solution",
        description: "Deployed dynamic QR code payment system across 200+ locations, reducing payment processing time by 45%.",
        image: "/api/placeholder/400/300",
        link: "#"
      }
    ],

    technologies: [
      {
        name: "UPI SDK",
        logo: "/api/placeholder/80/80",
        description: "Official UPI Integration Tools"
      },
      {
        name: "Payment Gateway APIs",
        logo: "/api/placeholder/80/80",
        description: "Secure Payment Processing"
      },
      {
        name: "Cloud Infrastructure",
        logo: "/api/placeholder/80/80",
        description: "Scalable Payment Solutions"
      },
      {
        name: "Analytics Platform",
        logo: "/api/placeholder/80/80",
        description: "Transaction Intelligence"
      }
    ],

    methodology: {
      title: "Our UPI Implementation Approach",
      description: "A comprehensive methodology ensuring successful UPI payment solution deployment.",
      steps: [
        "Assessment & Planning: Evaluate requirements and design system architecture",
        "Integration & Development: Implement UPI solutions with secure payment flows",
        "Testing & Security: Rigorous testing and security validation",
        "Deployment & Monitoring: Smooth rollout with continuous monitoring"
      ]
    },

    resources: [
      {
        type: "WHITEPAPER",
        title: "The Future of UPI Payments: Trends and Opportunities",
        description: "Comprehensive analysis of UPI payment landscape and future developments.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "WEBINAR",
        title: "Building Secure UPI Payment Systems",
        description: "Expert insights on implementing secure and scalable UPI solutions.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "BLOG",
        title: "UPI 2.0: Enhanced Features and Implementation Guide",
        description: "Detailed overview of new UPI features and implementation strategies.",
        image: "/api/placeholder/400/300",
        link: "#"
      }
    ],

    relatedServices: [
      "Digital Banking Solutions",
      "Cybersecurity Services",
      "Mobile App Development",
      "Cloud Services"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default UPIPaymentsServicePage;