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
      image: "https://paytmblogfinal.wpengine.com/wp-content/uploads/2024/10/How-Safe-is-UPI-AutoPay_-800x500.jpg"
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
            client: "Global FinTech Startup",
            title: "Cloud-Native Platform Transformation",
            description: "Modernized legacy systems with a cloud-native architecture, reducing operational costs by 40% and improving scalability.",
            image: "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link: "/insights/case-studies/cloud-native-fintech-transformation/"
          },
          {
            client: "E-commerce Leader",
            title: "Multi-Cloud Migration Success",
            description: "Implemented a robust multi-cloud strategy that improved system reliability and reduced downtime by 99.9%.",
            image: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg",
            link: "/insights/case-studies/multi-cloud-migration-ecommerce/?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            client: "Healthcare Provider",
            title: "Secure Cloud Infrastructure",
            description: "Developed a HIPAA-compliant cloud infrastructure that enabled secure data management and improved patient care delivery.",
            image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link: "/insights/case-studies/digital-transformation-healthcare/"
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
            type: "BLOG",
            title: "Cloud Migration Strategies: A Comprehensive Guide",
            description: "Learn about different cloud migration approaches and best practices for successful implementation.",
            image: "https://images.pexels.com/photos/14314638/pexels-photo-14314638.jpeg?auto=compress&cs=tinysrgb&w=600",
            link: "/insights/blog/cloud-migration-strategies-guide/"
          },
          {
            type: "BLOG",
            title: "Cloud Security & Data Protection",
            description: "Debite collaborated with a leading investment firm to enhance cloud security, ensuring compliance with financial regulations and protecting sensitive customer data from cyber threats.",
            image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link: "/insights/case-studies/cloud-security-data-protection/"
          },
          {
            type: "BLOG",
            title: "The Future of Cloud Computing: Trends and Innovations",
            description: "The cloud computing landscape is rapidly evolving, bringing new possibilities and challenges for enterprises worldwide.",
            image: "https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link: "/insights/blog/future-of-cloud-computing-trends-and-innovations/"
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