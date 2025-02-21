"use client";

import React from "react";
import ServicePage from "./services-page";
import type { ServicePageProps } from "./services-page";
import {
  BotMessageSquare,
  BrainCircuit,
  BrainCog,
  ChartScatter,
  Cloud,
  DatabaseZap,
  Landmark,
} from "lucide-react";

const DataAIServicePage = () => {
  const pageData: ServicePageProps = {
    title: "Data & Artificial Intelligence",
    description:
      "Transform your business with cutting-edge data analytics and AI solutions that drive innovation and growth.",
    heroImage:
      "https://images.pexels.com/photos/9783346/pexels-photo-9783346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    overview: {
      title: "Unlock the power of your data with AI-driven insights",
      content: (
        <>
          <p className="mb-4">
            Debite's Data & AI services help organizations harness the full
            potential of their data through advanced analytics, machine
            learning, and artificial intelligence solutions. Our expertise spans
            from data strategy and architecture to AI model development and
            deployment.
          </p>
          <p className="mb-4">
            With a focus on responsible AI and data governance, we deliver
            scalable solutions that transform raw data into actionable insights,
            enabling better decision-making and automation across your
            organization.
          </p>
        </>
      ),
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },

    capabilities: [
      {
        title: "Data Strategy & Architecture",
        description:
          "Develop comprehensive data strategies and scalable architectures that align with your business objectives and future needs.",
        icon: DatabaseZap,
      },
      {
        title: "Advanced Analytics",
        description:
          "Leverage predictive and prescriptive analytics to uncover patterns, trends, and opportunities in your data.",
        icon: ChartScatter,
      },
      {
        title: "Machine Learning Solutions",
        description:
          "Build and deploy custom ML models that automate processes and enhance decision-making capabilities.",
        icon: BrainCog,
      },
      {
        title: "AI Applications",
        description:
          "Create intelligent applications that leverage computer vision, NLP, and other AI technologies.",
        icon: BotMessageSquare,
      },
      {
        title: "Data Governance & Quality",
        description:
          "Implement robust data governance frameworks and quality management processes.",
        icon: Landmark,
      },
      {
        title: "MLOps & AI Infrastructure",
        description:
          "Set up and manage scalable infrastructure for ML model deployment and monitoring.",
        icon: BrainCircuit,
      },
    ],

    caseStudies: [
      {
        client: "Global FinTech Startup",
        title: "Cloud-Native Platform Transformation",
        description:
          "Modernized legacy systems with a cloud-native architecture, reducing operational costs by 40% and improving scalability.",
        image:
          "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/insights/case-studies/cloud-native-fintech-transformation/",
      },
      {
        client: "E-commerce Leader",
        title: "Multi-Cloud Migration Success",
        description:
          "Implemented a robust multi-cloud strategy that improved system reliability and reduced downtime by 99.9%.",
        image:
          "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg",
        link: "/insights/case-studies/multi-cloud-migration-ecommerce/?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        client: "Healthcare Provider",
        title: "Secure Cloud Infrastructure",
        description:
          "Developed a HIPAA-compliant cloud infrastructure that enabled secure data management and improved patient care delivery.",
        image:
          "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/insights/case-studies/digital-transformation-healthcare/",
      },
    ],

    technologies: [
      {
        name: "TensorFlow",
        logo: "/logos/tensorflow.svg",
        description: "Deep Learning & Neural Networks",
      },
      {
        name: "PyTorch",
        logo: "/logos/pytorch.svg",
        description: "Advanced ML Model Development",
      },
      {
        name: "Apache Spark",
        logo: "/logos/spark.svg",
        description: "Big Data Processing",
      },
      {
        name: "Kubernetes",
        logo: "/logos/kubernetes.svg",
        description: "ML Model Deployment",
      },
    ],

    methodology: {
      title: "Our Data & AI Development Approach",
      description:
        "A systematic methodology that ensures successful delivery of data and AI solutions.",
      steps: [
        "Discovery & Assessment: Understand business needs and data landscape",
        "Data Preparation: Clean, integrate, and structure data for analysis",
        "Model Development: Build and validate AI/ML models",
        "Deployment & Integration: Implement solutions in production",
      ],
    },

    resources: [
      {
        type: "BLOG",
        title: "Cloud Migration Strategies: A Comprehensive Guide",
        description:
          "Learn about different cloud migration approaches and best practices for successful implementation.",
        image:
          "https://images.pexels.com/photos/14314638/pexels-photo-14314638.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "/insights/blog/cloud-migration-strategies-guide/",
      },
      {
        type: "BLOG",
        title: "Cloud Security & Data Protection",
        description:
          "Debite collaborated with a leading investment firm to enhance cloud security, ensuring compliance with financial regulations and protecting sensitive customer data from cyber threats.",
        image:
          "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/insights/case-studies/cloud-security-data-protection/",
      },
      {
        type: "BLOG",
        title: "The Future of Cloud Computing: Trends and Innovations",
        description:
          "The cloud computing landscape is rapidly evolving, bringing new possibilities and challenges for enterprises worldwide.",
        image:
          "https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "/insights/blog/future-of-cloud-computing-trends-and-innovations/",
      },
    ],

    relatedServices: [
      "Cloud Services",
      "Digital Transformation",
      "IoT Solutions",
      "Application Services",
    ],
  };

  return <ServicePage {...pageData} />;
};

export default DataAIServicePage;
