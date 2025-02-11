'use client'

import React from 'react';
import ServicePage from './services-page';
import type { ServicePageProps } from './services-page';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart,
  Bell,
  Zap,
  Share2
} from 'lucide-react';

const AnalyticsReportingPage = () => {
  const pageData: ServicePageProps = {
    title: "Advanced Analytics & Reporting",
    description: "Transform your business data into actionable insights with powerful analytics tools",
    heroImage: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2600",
    
    overview: {
      title: "Make data-driven decisions with confidence",
      content: (
        <>
          <p className="mb-4">
            Debite's Advanced Analytics & Reporting solution turns your business data 
            into clear, actionable insights. Our platform combines powerful analytics 
            with easy-to-understand reporting, helping you make informed decisions 
            about your business growth and financial health.
          </p>
          <p className="mb-4">
            From cash flow forecasting to revenue analysis, our tools give you a 
            complete view of your business performance. Get real-time insights, 
            customizable dashboards, and automated reports that help you stay ahead 
            of market trends and opportunities.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    capabilities: [
      {
        title: "Financial Analytics",
        description: "Track revenue, expenses, and profitability with detailed financial metrics and trends.",
        icon: BarChart3
      },
      {
        title: "Performance Monitoring",
        description: "Monitor KPIs and business metrics with real-time dashboards and alerts.",
        icon: TrendingUp
      },
      {
        title: "Custom Reporting",
        description: "Create and schedule custom reports tailored to your business needs.",
        icon: PieChart
      },
      {
        title: "Smart Alerts",
        description: "Set up intelligent alerts for key metrics and unusual patterns.",
        icon: Bell
      },
      {
        title: "Predictive Insights",
        description: "Forecast trends and identify opportunities with AI-powered analytics.",
        icon: Zap
      },
      {
        title: "Data Integration",
        description: "Connect and analyze data from multiple sources in one platform.",
        icon: Share2
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
        name: "Analytics Engine",
        logo: "/api/placeholder/80/80",
        description: "Real-time Processing"
      },
      {
        name: "Visualization Tools",
        logo: "/api/placeholder/80/80",
        description: "Interactive Dashboards"
      },
      {
        name: "AI/ML Models",
        logo: "/api/placeholder/80/80",
        description: "Predictive Analytics"
      },
      {
        name: "Data Connectors",
        logo: "/api/placeholder/80/80",
        description: "Universal Integration"
      }
    ],

    methodology: {
      title: "Analytics Implementation Process",
      description: "A structured approach to implementing analytics that deliver real value.",
      steps: [
        "Data Assessment: Identifying key metrics and data sources",
        "Custom Setup: Configuring dashboards and reports for your needs",
        "Integration: Connecting your business systems and data sources",
        "Training: Enabling your team to leverage insights effectively"
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
      "Business Intelligence",
      "Financial Planning",
      "Cash Flow Management",
      "Performance Monitoring"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default AnalyticsReportingPage;