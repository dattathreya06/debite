'use client';

import React from 'react';
import ServicePage from './services-page';
import type { ServicePageProps } from './services-page';
import { Cloud, Database, Shield, Cpu, Network, RefreshCw, Server, Lock } from 'lucide-react';

const CloudServicePage = () => {
  const pageData: ServicePageProps = {
    title: "Cloud Services",
    description: "Accelerate your digital transformation with secure, scalable, and innovative cloud solutions tailored to your business needs.",
    heroImage: "https://images.pexels.com/photos/9783812/pexels-photo-9783812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
    overview: {
      title: "Transform your business with next-generation cloud solutions",
      content: (
        <>
          <p className="mb-4">
            Debite's Cloud Services help organizations navigate their cloud journey with confidence. 
            From strategic planning to implementation and optimization, we deliver comprehensive cloud 
            solutions that drive innovation, enhance operational efficiency, and accelerate growth.
          </p>
          <p className="mb-4">
            Our expert team leverages industry-leading technologies and best practices to build 
            resilient, secure, and scalable cloud infrastructures that adapt to your evolving 
            business needs while optimizing costs and performance.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
    },

    capabilities: [
      {
        title: "Cloud Migration & Modernization",
        description: "Seamlessly migrate and modernize your applications and infrastructure with our proven methodology and tools.",
        icon: Cloud
      },
      {
        title: "Cloud Native Development",
        description: "Build and deploy cloud-native applications using microservices, containers, and serverless architectures.",
        icon: Server
      },
      {
        title: "Multi-Cloud Management",
        description: "Optimize and manage multi-cloud environments with unified governance and security controls.",
        icon: Network
      },
      {
        title: "Cloud Security & Compliance",
        description: "Implement robust security measures and ensure compliance across your cloud infrastructure.",
        icon: Shield
      },
      {
        title: "DevOps & Automation",
        description: "Streamline development and operations with automated workflows and CI/CD pipelines.",
        icon: RefreshCw
      },
      {
        title: "Cloud Infrastructure Optimization",
        description: "Maximize performance and minimize costs through continuous monitoring and optimization.",
        icon: Database
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
        name: "AWS",
        logo: "/logos/aws.svg",
        description: "Amazon Web Services"
      },
      {
        name: "Azure",
        logo: "/logos/azure.svg",
        description: "Microsoft Azure Cloud"
      },
      {
        name: "GCP",
        logo: "/logos/gcp.svg",
        description: "Google Cloud Platform"
      },
      {
        name: "Kubernetes",
        logo: "/logos/kubernetes.svg",
        description: "Container Orchestration"
      }
    ],

    methodology: {
      title: "Our Cloud Implementation Approach",
      description: "A comprehensive methodology ensuring successful cloud transformation.",
      steps: [
        "Assessment & Strategy: Evaluate current infrastructure and define cloud roadmap",
        "Architecture & Design: Create scalable and secure cloud architecture",
        "Migration & Implementation: Execute cloud migration with minimal disruption",
        "Optimization & Management: Ensure optimal performance and cost efficiency"
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
      "Data & AI",
      "DevOps",
      "Cybersecurity",
      "Digital Transformation"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default CloudServicePage;