'use client';

import React from 'react';
import ServicePage from './services-page';
import type { ServicePageProps } from './services-page';
import { BotMessageSquare, BrainCircuit, BrainCog, ChartScatter, Cloud, DatabaseZap, Landmark } from 'lucide-react';

const DataAIServicePage = () => {
  const pageData: ServicePageProps = {
    title: "Data & Artificial Intelligence",
    description: "Transform your business with cutting-edge data analytics and AI solutions that drive innovation and growth.",
    heroImage: "/images/data-ai-hero.jpg",
    
    overview: {
      title: "Unlock the power of your data with AI-driven insights",
      content: (
        <>
          <p className="mb-4">
            NTT DATA's Data & AI services help organizations harness the full potential of their data 
            through advanced analytics, machine learning, and artificial intelligence solutions. Our 
            expertise spans from data strategy and architecture to AI model development and deployment.
          </p>
          <p className="mb-4">
            With a focus on responsible AI and data governance, we deliver scalable solutions that 
            transform raw data into actionable insights, enabling better decision-making and 
            automation across your organization.
          </p>
        </>
      ),
      image: "/images/data-ai-overview.jpg"
    },

    capabilities: [
      {
        title: "Data Strategy & Architecture",
        description: "Develop comprehensive data strategies and scalable architectures that align with your business objectives and future needs.",
        icon: DatabaseZap
      },
      {
        title: "Advanced Analytics",
        description: "Leverage predictive and prescriptive analytics to uncover patterns, trends, and opportunities in your data.",
        icon: ChartScatter
      },
      {
        title: "Machine Learning Solutions",
        description: "Build and deploy custom ML models that automate processes and enhance decision-making capabilities.",
        icon: BrainCog
      },
      {
        title: "AI Applications",
        description: "Create intelligent applications that leverage computer vision, NLP, and other AI technologies.",
        icon: BotMessageSquare
      },
      {
        title: "Data Governance & Quality",
        description: "Implement robust data governance frameworks and quality management processes.",
        icon: Landmark
      },
      {
        title: "MLOps & AI Infrastructure",
        description: "Set up and manage scalable infrastructure for ML model deployment and monitoring.",
        icon: BrainCircuit
      }
    ],

    caseStudies: [
      {
        client: "Global Retailer",
        title: "AI-Powered Inventory Optimization",
        description: "Implemented an ML-based demand forecasting system that reduced stockouts by 35% and improved inventory turnover.",
        image: "/images/retail-case-study.jpg",
        link: "#"
      },
      {
        client: "Healthcare Network",
        title: "Predictive Patient Care Analytics",
        description: "Developed an AI system for early disease detection and patient risk assessment, improving outcomes by 25%.",
        image: "https://images.pexels.com/photos/6129676/pexels-photo-6129676.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "#"
      },
      {
        client: "Manufacturing Leader",
        title: "Smart Factory Automation",
        description: "Deployed IoT sensors and AI analytics to predict equipment maintenance needs, reducing downtime by 40%.",
        image: "/images/manufacturing-case-study.jpg",
        link: "#"
      }
    ],

    technologies: [
      {
        name: "TensorFlow",
        logo: "/logos/tensorflow.svg",
        description: "Deep Learning & Neural Networks"
      },
      {
        name: "PyTorch",
        logo: "/logos/pytorch.svg",
        description: "Advanced ML Model Development"
      },
      {
        name: "Apache Spark",
        logo: "/logos/spark.svg",
        description: "Big Data Processing"
      },
      {
        name: "Kubernetes",
        logo: "/logos/kubernetes.svg",
        description: "ML Model Deployment"
      }
    ],

    methodology: {
      title: "Our Data & AI Development Approach",
      description: "A systematic methodology that ensures successful delivery of data and AI solutions.",
      steps: [
        "Discovery & Assessment: Understand business needs and data landscape",
        "Data Preparation: Clean, integrate, and structure data for analysis",
        "Model Development: Build and validate AI/ML models",
        "Deployment & Integration: Implement solutions in production",
      ]
    },

    resources: [
      {
        type: "WHITEPAPER",
        title: "The Future of Enterprise AI: Trends and Strategies",
        description: "Explore emerging AI technologies and their impact on business transformation.",
        image: "/images/ai-whitepaper.jpg",
        link: "#"
      },
      {
        type: "WEBINAR",
        title: "Building Responsible AI Systems",
        description: "Learn best practices for developing ethical and transparent AI solutions.",
        image: "/images/ai-webinar.jpg",
        link: "#"
      },
      {
        type: "BLOG",
        title: "Practical Applications of Large Language Models",
        description: "Real-world examples of LLM implementation in enterprise settings.",
        image: "/images/llm-blog.jpg",
        link: "#"
      }
    ],

    relatedServices: [
      "Cloud Services",
      "Digital Transformation",
      "IoT Solutions",
      "Application Services"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default DataAIServicePage;