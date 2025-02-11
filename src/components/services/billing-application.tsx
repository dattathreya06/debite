'use client'

import React from 'react';
import ServicePage from './services-page';
import type { ServicePageProps } from './services-page';
import { 
  Receipt, 
  Clock, 
  ArrowLeftRight, 
  FileSpreadsheet,
  Boxes,
  Wallet
} from 'lucide-react';

const BillingApplicationsPage = () => {
  const pageData: ServicePageProps = {
    title: "Billing Applications",
    description: "Streamline your billing operations with flexible, automated solutions",
    heroImage: "/api/placeholder/1920/600",
    
    overview: {
      title: "Automate and scale your billing operations",
      content: (
        <>
          <p className="mb-4">
            Debite's Billing Applications provide growing businesses with powerful tools 
            to automate invoicing, manage subscriptions, and streamline payment collection. 
            Our solutions are designed to scale with your business while maintaining 
            accuracy and reducing manual work.
          </p>
          <p className="mb-4">
            From usage-based billing to complex subscription models, our platform handles 
            your billing needs while giving you full visibility and control over your 
            revenue operations. Integrate easily with your existing systems and start 
            automating your billing processes today.
          </p>
        </>
      ),
      image: "/api/placeholder/800/600"
    },

    capabilities: [
      {
        title: "Automated Invoicing",
        description: "Generate and send professional invoices automatically based on your billing schedules and rules.",
        icon: Receipt
      },
      {
        title: "Subscription Management",
        description: "Handle recurring billing, upgrades, downgrades, and usage-based pricing with ease.",
        icon: Clock
      },
      {
        title: "Payment Integration",
        description: "Seamless integration with multiple payment methods and gateways for efficient collection.",
        icon: Wallet
      },
      {
        title: "Revenue Recognition",
        description: "Automated revenue recognition and reporting compliant with accounting standards.",
        icon: FileSpreadsheet
      },
      {
        title: "Multi-product Billing",
        description: "Manage billing for multiple products and services from a single platform.",
        icon: Boxes
      },
      {
        title: "Dunning Management",
        description: "Automated retry logic and communication for failed payments to reduce revenue leakage.",
        icon: ArrowLeftRight
      }
    ],

    caseStudies: [
      {
        client: "CloudServe Solutions",
        title: "Automating SaaS Billing",
        description: "Reduced billing processing time by 80% and improved collection rates for a growing cloud services provider.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "DigitalPro Services",
        title: "Usage-Based Billing Implementation",
        description: "Implemented flexible usage-based billing for a digital services platform, increasing revenue accuracy by 25%.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "TechStart Solutions",
        title: "Subscription Revenue Optimization",
        description: "Automated subscription management and reduced churn by 15% through smart dunning strategies.",
        image: "/api/placeholder/400/300",
        link: "#"
      }
    ],

    technologies: [
      {
        name: "Billing Engine",
        logo: "/api/placeholder/80/80",
        description: "Flexible Rating & Charging"
      },
      {
        name: "Integration Hub",
        logo: "/api/placeholder/80/80",
        description: "API & Webhook Support"
      },
      {
        name: "Analytics Platform",
        logo: "/api/placeholder/80/80",
        description: "Revenue Intelligence"
      },
      {
        name: "Automation Tools",
        logo: "/api/placeholder/80/80",
        description: "Workflow Automation"
      }
    ],

    methodology: {
      title: "Our Implementation Approach",
      description: "A systematic approach to implementing and optimizing your billing operations.",
      steps: [
        "Business Analysis: Understanding your billing models and requirements",
        "System Configuration: Setting up products, pricing, and automation rules",
        "Integration Setup: Connecting with your existing systems and payment gateways",
        "Testing & Validation: Ensuring accuracy and performance of billing processes"
      ]
    },

    resources: [
      {
        type: "BLOG",
        title: "Mastering Subscription Billing",
        description: "Best practices for managing recurring revenue and reducing churn.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "WHITEPAPER",
        title: "The Future of Automated Billing",
        description: "Explore trends and innovations in billing automation and revenue management.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "VIDEO",
        title: "Billing Automation Demo",
        description: "See how our billing platform streamlines revenue operations.",
        image: "/api/placeholder/400/300",
        link: "#"
      }
    ],

    relatedServices: [
      "Payment Gateway",
      "Financial Analytics",
      "Business Credit",
      "Expense Management"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default BillingApplicationsPage;