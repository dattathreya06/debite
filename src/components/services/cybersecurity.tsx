'use client';

import React from 'react';
import ServicePage from './services-page';
import type { ServicePageProps } from './services-page';
import { Shield, Lock, Eye, AlertTriangle, FileSearch, Users, Radio, Clock } from 'lucide-react';

const CybersecurityServicePage = () => {
  const pageData: ServicePageProps = {
    title: "Cybersecurity Services",
    description: "Protect your business with advanced cybersecurity solutions that defend against evolving threats while enabling digital innovation.",
    heroImage: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    
    overview: {
      title: "Comprehensive security solutions for the digital age",
      content: (
        <>
          <p className="mb-4">
            Debite's Cybersecurity Services provide robust protection for your digital assets 
            and infrastructure. Our comprehensive approach combines advanced threat detection, 
            proactive defense strategies, and rapid incident response to safeguard your 
            business against evolving cyber threats.
          </p>
          <p className="mb-4">
            With our team of certified security experts and cutting-edge technologies, we help 
            organizations build resilient security postures while maintaining regulatory 
            compliance and business continuity. Our solutions are designed to scale with your 
            business, providing continuous protection in an ever-changing threat landscape.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg"
    },

    capabilities: [
      {
        title: "Security Operations Center (SOC)",
        description: "24/7 monitoring, threat detection, and incident response with advanced SIEM and EDR capabilities.",
        icon: Eye
      },
      {
        title: "Identity & Access Management",
        description: "Secure access control with multi-factor authentication and privileged access management.",
        icon: Users
      },
      {
        title: "Threat Intelligence & Response",
        description: "Proactive threat hunting and rapid incident response powered by real-time intelligence.",
        icon: AlertTriangle
      },
      {
        title: "Security Assessment & Testing",
        description: "Comprehensive vulnerability assessments, penetration testing, and security audits.",
        icon: FileSearch
      },
      {
        title: "Cloud Security",
        description: "Advanced security solutions for cloud infrastructure and applications.",
        icon: Lock
      },
      {
        title: "Network Security",
        description: "Next-generation firewall protection and secure network architecture design.",
        icon: Radio
      }
    ],

    caseStudies: [
      {
        client: "Financial Services Provider",
        title: "Enterprise Security Transformation",
        description: "Implemented a comprehensive security program that enhanced threat detection capabilities and achieved regulatory compliance.",
        image: "https://images.pexels.com/photos/8470812/pexels-photo-8470812.jpeg",
        link: "#"
      },
      {
        client: "Healthcare Network",
        title: "Zero Trust Security Implementation",
        description: "Deployed a zero trust architecture that improved security posture while maintaining operational efficiency.",
        image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg",
        link: "#"
      },
      {
        client: "Tech Startup",
        title: "Cloud Security Enhancement",
        description: "Developed a secure cloud infrastructure with continuous monitoring and automated threat response.",
        image: "https://images.pexels.com/photos/5473947/pexels-photo-5473947.jpeg",
        link: "#"
      }
    ],

    technologies: [
      {
        name: "Crowdstrike",
        logo: "/logos/crowdstrike.svg",
        description: "Endpoint Protection"
      },
      {
        name: "Splunk",
        logo: "/logos/splunk.svg",
        description: "SIEM Platform"
      },
      {
        name: "Okta",
        logo: "/logos/okta.svg",
        description: "Identity Management"
      },
      {
        name: "Palo Alto",
        logo: "/logos/paloalto.svg",
        description: "Network Security"
      }
    ],

    methodology: {
      title: "Our Security Implementation Approach",
      description: "A proven methodology for building comprehensive security programs.",
      steps: [
        "Assessment & Planning: Evaluate current security posture and define security roadmap",
        "Security Architecture: Design and implement robust security controls",
        "Continuous Monitoring: Deploy 24/7 threat detection and response",
        "Optimization & Evolution: Regular testing and security posture improvement"
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
      "Cloud Security",
      "Risk Management",
      "Data Protection",
      "Compliance Services"
    ]
  };

  return <ServicePage {...pageData} />;
};

export default CybersecurityServicePage;