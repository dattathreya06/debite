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
    heroImage: "/api/placeholder/1920/600",
    
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
      image: "/api/placeholder/800/600"
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
        client: "GrowthTech SaaS",
        title: "Scaling Payment Operations",
        description: "Helped a growing SaaS platform increase payment success rates by 15% while reducing processing costs.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "EcoMarket",
        title: "Marketplace Payment Solution",
        description: "Implemented split payments and automated seller payouts for a sustainable products marketplace.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "FitnessPro",
        title: "Subscription Management",
        description: "Streamlined recurring billing for a fitness platform, reducing failed payments by 25%.",
        image: "/api/placeholder/400/300",
        link: "#"
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
        title: "Optimizing Payment Success Rates: A Complete Guide",
        description: "Learn strategies to improve your payment success rates and reduce processing costs.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "WHITEPAPER",
        title: "The Future of Digital Payments",
        description: "Explore emerging payment technologies and trends shaping the future of commerce.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "VIDEO",
        title: "Payment Gateway Integration Tutorial",
        description: "Step-by-step guide to integrating our payment gateway into your application.",
        image: "/api/placeholder/400/300",
        link: "#"
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