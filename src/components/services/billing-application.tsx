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
    heroImage: "https://images.pexels.com/photos/7688191/pexels-photo-7688191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
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
      image: "https://images.pexels.com/photos/6694529/pexels-photo-6694529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
      "Payment Gateway",
      "Financial Analytics",
      "Business Credit",
      "Expense Management"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default BillingApplicationsPage;