'use client'

import React from 'react';
import ServicePage from './services-page';
import type { ServicePageProps } from './services-page';
import { 
  CreditCard, 
  ShieldCheck, 
  Gauge, 
  Globe2, 
  BarChart3,
  Settings2
} from 'lucide-react';

const PaymentGatewayPage = () => {
  const pageData: ServicePageProps = {
    title: "Payment Gateway",
    description: "Fast, secure, and reliable payment processing for modern businesses",
    heroImage: "https://images.pexels.com/photos/7620620/pexels-photo-7620620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
    overview: {
      title: "Transform your business with seamless payment processing",
      content: (
        <>
          <p className="mb-4">
            Debite's Payment Gateway is designed for growing businesses that need 
            reliable, secure, and efficient payment processing. Our solution combines 
            enterprise-grade security with the flexibility and support that modern 
            businesses demand.
          </p>
          <p className="mb-4">
            Whether you're handling recurring subscriptions, one-time payments, or 
            marketplace transactions, our gateway adapts to your needs while keeping 
            your payments flowing smoothly and securely.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/4841737/pexels-photo-4841737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    capabilities: [
      {
        title: "Global Payment Processing",
        description: "Accept payments in multiple currencies with support for local payment methods across major markets.",
        icon: Globe2
      },
      {
        title: "Advanced Security",
        description: "PCI DSS compliant infrastructure with fraud detection and prevention systems built-in.",
        icon: ShieldCheck
      },
      {
        title: "Real-time Analytics",
        description: "Monitor transactions, track performance, and gain insights with our comprehensive dashboard.",
        icon: BarChart3
      },
      {
        title: "High Performance",
        description: "99.99% uptime with fast processing speeds and automatic failover protection.",
        icon: Gauge
      },
      {
        title: "Smart Routing",
        description: "Optimize transaction success rates with intelligent payment routing and retry logic.",
        icon: Settings2
      },
      {
        title: "Multiple Payment Methods",
        description: "Support for credit cards, digital wallets, and alternative payment methods.",
        icon: CreditCard
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
        name: "Modern APIs",
        logo: "/api/placeholder/80/80",
        description: "RESTful & GraphQL APIs"
      },
      {
        name: "Cloud Infrastructure",
        logo: "/api/placeholder/80/80",
        description: "AWS & GCP Hosting"
      },
      {
        name: "Security Standards",
        logo: "/api/placeholder/80/80",
        description: "PCI DSS Level 1"
      },
      {
        name: "Integration Tools",
        logo: "/api/placeholder/80/80",
        description: "SDKs & Plugins"
      }
    ],

    methodology: {
      title: "Our Implementation Approach",
      description: "A proven methodology for smooth payment gateway integration and optimization.",
      steps: [
        "Requirements Analysis: Understanding your business needs and payment flows",
        "Custom Configuration: Setting up routing rules and payment methods",
        "Security Setup: Implementing fraud prevention and compliance measures",
        "Testing & Optimization: Ensuring reliable performance and high success rates"
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
      "Business Credit",
      "Expense Management",
      "Financial Analytics",
      "Payment Links"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default PaymentGatewayPage;