'use client';

import React from 'react';
import ServicePage from './services-page';
import type { ServicePageProps } from './services-page';
import { BarChart3, Brain, Briefcase, LineChart, Network, Stars, Users2 } from 'lucide-react';

const ConsultingServicePage = () => {
  const pageData: ServicePageProps = {
    title: "Consulting",
    description: "Strategic business and technology consulting to drive your digital transformation journey.",
    heroImage: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    
    overview: {
      title: "Transform your business with expert guidance",
      content: (
        <>
          <p className="mb-4">
            Debite's consulting services combine deep industry expertise with cutting-edge 
            technology insights to help organizations navigate digital transformation, optimize 
            operations, and drive innovation. Our consultants work closely with you to develop 
            tailored strategies that address your unique challenges and opportunities.
          </p>
          <p className="mb-4">
            From strategic planning to implementation support, we help you achieve sustainable 
            growth through practical solutions that deliver measurable results. Our collaborative 
            approach ensures that solutions are not only innovative but also aligned with your 
            organization's culture and capabilities.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    },

    capabilities: [
      {
        title: "Digital Strategy",
        description: "Develop comprehensive digital transformation roadmaps aligned with your business objectives and market opportunities.",
        icon: Stars
      },
      {
        title: "Business Process Optimization",
        description: "Streamline operations and enhance efficiency through process redesign and automation strategies.",
        icon: LineChart
      },
      {
        title: "Technology Advisory",
        description: "Navigate technology decisions with expert guidance on architecture, platforms, and implementation approaches.",
        icon: Network
      },
      {
        title: "Change Management",
        description: "Enable successful transformation through structured change management and stakeholder engagement.",
        icon: Users2
      },
      {
        title: "Innovation Strategy",
        description: "Create and execute innovation programs that drive competitive advantage and growth.",
        icon: Brain
      },
      {
        title: "Performance Improvement",
        description: "Enhance organizational effectiveness through data-driven insights and proven methodologies.",
        icon: BarChart3
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
        name: "Tableau",
        logo: "/logos/tableau.svg",
        description: "Data Visualization & Analytics"
      },
      {
        name: "ServiceNow",
        logo: "/logos/servicenow.svg",
        description: "Enterprise Service Management"
      },
      {
        name: "Salesforce",
        logo: "/logos/salesforce.svg",
        description: "Customer Relationship Management"
      },
      {
        name: "SAP",
        logo: "/logos/sap.svg",
        description: "Enterprise Resource Planning"
      }
    ],

    methodology: {
      title: "Our Consulting Approach",
      description: "A proven methodology that ensures successful transformation and sustainable results.",
      steps: [
        "Assess & Analyze: Comprehensive evaluation of current state and opportunities",
        "Design & Plan: Development of strategic roadmap and solution architecture",
        "Transform & Implement: Guided execution of transformation initiatives",
        "Measure & Optimize: Continuous monitoring and optimization of outcomes"
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
      "Digital Transformation",
      "Data & Analytics",
      "Enterprise Architecture",
      "Technology Strategy"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default ConsultingServicePage;