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
    heroImage: "/api/placeholder/1920/600",
    
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
      image: "/api/placeholder/800/600"
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
        client: "Insurance Provider",
        title: "Automated Premium Collection",
        description: "Implemented digital invoicing and SMS payments for premium collection, reducing payment cycles by 60% and improving collection rate by 35%.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "Education Institution",
        title: "Fee Collection Transformation",
        description: "Streamlined fee collection process with automated invoicing and SMS reminders, achieving 85% digital payment adoption.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "B2B Service Provider",
        title: "Invoice Automation Success",
        description: "Reduced invoice processing time by 75% and improved payment collection speed by implementing digital invoicing with SMS pay.",
        image: "/api/placeholder/400/300",
        link: "#"
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
        type: "WHITEPAPER",
        title: "Digital Invoicing: The Future of B2B Payments",
        description: "Comprehensive guide to modern invoicing and payment collection methods.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "WEBINAR",
        title: "Maximizing Collections with SMS Payments",
        description: "Expert insights on implementing effective SMS payment strategies.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "BLOG",
        title: "5 Ways to Optimize Your Digital Invoice Processing",
        description: "Best practices for streamlining invoice management and payment collection.",
        image: "/api/placeholder/400/300",
        link: "#"
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