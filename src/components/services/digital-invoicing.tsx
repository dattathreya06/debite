'use client'

import React from 'react';
import ServicePage from './services-page';
import type { ServicePageProps } from './services-page';
import { 
  FileText, 
  MessageSquare, 
  Link2, 
  Database, 
  BarChart3, 
  Shield,
  Smartphone
} from 'lucide-react';

const DigitalInvoicingServicePage = () => {
  const pageData: ServicePageProps = {
    title: "Digital Invoicing & SMS Pay",
    description: "Transform your billing and payment collection with automated digital invoicing and SMS-based payment solutions.",
    heroImage: "https://images.pexels.com/photos/6694529/pexels-photo-6694529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
    overview: {
      title: "Streamline your billing process with intelligent invoicing and SMS payments",
      content: (
        <>
          <p className="mb-4">
            Our Digital Invoicing & SMS Pay solutions combine automated billing systems 
            with convenient payment collection methods. Generate and send professional 
            invoices automatically, while enabling your customers to pay instantly through 
            simple SMS interactions.
          </p>
          <p className="mb-4">
            With advanced features like recurring billing, payment reminders, and real-time 
            reconciliation, we help businesses improve cash flow, reduce manual work, and 
            enhance the customer payment experience.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/10725897/pexels-photo-10725897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    capabilities: [
      {
        title: "Automated Invoice Generation",
        description: "Smart invoice creation system with customizable templates, automatic numbering, and multi-currency support.",
        icon: FileText
      },
      {
        title: "SMS Payment Gateway",
        description: "Secure SMS-based payment collection with instant payment links and automated confirmations.",
        icon: MessageSquare
      },
      {
        title: "Payment Link Generation",
        description: "Dynamic payment link creation for invoices with multiple payment method support.",
        icon: Link2
      },
      {
        title: "Data Management",
        description: "Centralized invoice and payment data management with advanced search and filtering.",
        icon: Database
      },
      {
        title: "Analytics & Reporting",
        description: "Comprehensive reporting tools for payment tracking, aging analysis, and business insights.",
        icon: BarChart3
      },
      {
        title: "Security & Compliance",
        description: "Enhanced security measures with encryption, authentication, and regulatory compliance.",
        icon: Shield
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
        name: "Invoice Generation Engine",
        logo: "/api/placeholder/80/80",
        description: "Advanced Invoice Creation"
      },
      {
        name: "SMS Gateway API",
        logo: "/api/placeholder/80/80",
        description: "Secure Message Processing"
      },
      {
        name: "Payment Processing",
        logo: "/api/placeholder/80/80",
        description: "Multi-Channel Payments"
      },
      {
        name: "Analytics Platform",
        logo: "/api/placeholder/80/80",
        description: "Business Intelligence"
      }
    ],

    methodology: {
      title: "Our Implementation Approach",
      description: "A systematic methodology for deploying digital invoicing and SMS payment solutions.",
      steps: [
        "Business Analysis: Understanding invoicing requirements and payment flows",
        "System Integration: Setting up invoice generation and SMS payment systems",
        "Process Automation: Implementing automated workflows and reminders",
        "Monitoring & Optimization: Continuous system monitoring and performance optimization"
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
      "Payment Gateway Solutions",
      "Business Process Automation",
      "Data Analytics Services",
      "Enterprise Integration"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default DigitalInvoicingServicePage;