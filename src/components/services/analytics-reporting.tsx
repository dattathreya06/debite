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
    heroImage: "/api/placeholder/1920/600",
    
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
      image: "/api/placeholder/800/600"
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
        client: "TechGrow Solutions",
        title: "Data-Driven Growth Strategy",
        description: "Helped a SaaS startup optimize pricing and reduce customer acquisition costs by 30% using advanced analytics.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "RetailPlus",
        title: "Revenue Intelligence",
        description: "Implemented predictive analytics to improve inventory management and increase profit margins by 20%.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        client: "ServicePro Inc",
        title: "Performance Optimization",
        description: "Used customer behavior analytics to improve service delivery and increase customer retention by 25%.",
        image: "/api/placeholder/400/300",
        link: "#"
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
        type: "VIDEO",
        title: "Analytics Platform Demo",
        description: "See how our analytics tools can transform your business decision-making.",
        image: "/api/placeholder/400/300",
        link: "#"
      },
      {
        type: "BLOG",
        title: "Why You Need to Invest in Analytics for Your Business",
        description: "Discover how investing in analytics can drive business success through data-driven insights.",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg/?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/insights/blog/invest-in-analytics-business/"
      },
      {
        type: "BLOG",
        title: "Key Metrics That Matter for Any Business",
        description: "Identify and track essential business metrics that drive growth and success.",
        image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/insights/blog/key-metrics-that-matter-business/"
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