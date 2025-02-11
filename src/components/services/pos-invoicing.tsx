'use client'

import React from 'react';
import ServicePage from './services-page';
import type { ServicePageProps } from './services-page';
import { 
  Store, 
  Receipt, 
  BarChart4, 
  Smartphone,
  Database,
  Users2
} from 'lucide-react';

const POSInvoicingPage = () => {
  const pageData: ServicePageProps = {
    title: "POS & Invoicing Solutions",
    description: "Modern point-of-sale and invoicing tools to power your business growth",
    heroImage: "/api/placeholder/1920/600",
    
    overview: {
      title: "Streamline sales and billing with an integrated solution",
      content: (
        <>
          <p className="mb-4">
            Debite's POS & Invoicing solution combines powerful point-of-sale capabilities 
            with professional invoicing tools in one seamless platform. Designed for modern 
            businesses, our system helps you process sales, manage inventory, and handle 
            billing efficiently across all your channels.
          </p>
          <p className="mb-4">
            Whether you're running a retail store, restaurant, or service business, our 
            flexible solution adapts to your needs while providing real-time insights 
            into your business performance. Get started quickly with minimal setup and 
            scale confidently as your business grows.
          </p>
        </>
      ),
      image: "/api/placeholder/800/600"
    },

    capabilities: [
      {
        title: "Smart POS Terminal",
        description: "Process in-person payments quickly with an intuitive interface and support for multiple payment methods.",
        icon: Store
      },
      {
        title: "Professional Invoicing",
        description: "Create and send customized invoices with automated payment reminders and tracking.",
        icon: Receipt
      },
      {
        title: "Business Analytics",
        description: "Track sales, monitor inventory, and gain insights with comprehensive reporting tools.",
        icon: BarChart4
      },
      {
        title: "Mobile Commerce",
        description: "Accept payments and manage your business from anywhere with our mobile app.",
        icon: Smartphone
      },
      {
        title: "Inventory Management",
        description: "Track stock levels, set reorder points, and manage products across locations.",
        icon: Database
      },
      {
        title: "Customer Management",
        description: "Build customer relationships with integrated CRM features and loyalty programs.",
        icon: Users2
      }
    ],

    caseStudies: [
      {
        client: "Urban Cafe",
        title: "Modernizing Cafe Operations",
        description: "Streamlined ordering, payments, and inventory management, reducing service time by 40%.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "StyleHub Boutique",
        title: "Retail Success Story",
        description: "Integrated online and in-store sales with automated inventory syncing, growing revenue by 35%.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "ProService Solutions",
        title: "Service Business Transformation",
        description: "Automated billing and payment collection, reducing outstanding invoices by 60%.",
        image: "/api/placeholder/400/300",
        link: "#"
      }
    ],

    technologies: [
      {
        name: "Cloud POS",
        logo: "/api/placeholder/80/80",
        description: "Real-time Processing"
      },
      {
        name: "Smart Terminal",
        logo: "/api/placeholder/80/80",
        description: "Secure Hardware"
      },
      {
        name: "Mobile Apps",
        logo: "/api/placeholder/80/80",
        description: "iOS & Android"
      },
      {
        name: "Integration Hub",
        logo: "/api/placeholder/80/80",
        description: "Open APIs"
      }
    ],

    methodology: {
      title: "Quick Setup Process",
      description: "Get up and running quickly with our streamlined implementation process.",
      steps: [
        "Business Assessment: Understanding your sales and invoicing needs",
        "System Configuration: Setting up your products, services, and workflows",
        "Payment Setup: Configuring payment methods and integrations",
        "Staff Training: Comprehensive training for your team"
      ]
    },

    resources: [
      {
        type: "VIDEO",
        title: "POS & Invoicing Platform Demo",
        description: "See how our integrated solution can transform your business operations.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "BLOG",
        title: "Maximizing Sales with Modern POS",
        description: "Tips and strategies for leveraging your POS system for business growth.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "WHITEPAPER",
        title: "The Future of Retail Technology",
        description: "Insights into emerging trends in POS and payment solutions.",
        image: "/api/placeholder/400/300",
        link: "#"
      }
    ],

    relatedServices: [
      "Payment Gateway",
      "Business Analytics",
      "Inventory Management",
      "Customer Loyalty"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default POSInvoicingPage;