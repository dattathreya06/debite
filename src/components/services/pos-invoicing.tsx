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
    heroImage: "https://images.pexels.com/photos/7688191/pexels-photo-7688191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
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
      image: "https://images.pexels.com/photos/23496892/pexels-photo-23496892/free-photo-of-people-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
      "Business Analytics",
      "Inventory Management",
      "Customer Loyalty"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default POSInvoicingPage;