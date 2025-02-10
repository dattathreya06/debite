'use client'

import React from 'react';
import IndustryPage from './industry-page';
import type { IndustryPageProps } from './industry-page';

const GovernmentPage = () => {
  const pageData: IndustryPageProps = {
    title: "Government",
    description: "Agile digital solutions for modern public services.",
    heroImage: "https://images.pexels.com/photos/2505693/pexels-photo-2505693.jpeg",
    
    overview: {
      title: "Accelerating digital transformation in government services",
      content: (
        <>
          <p className="mb-4">
            Debite brings fresh perspective and agile solutions to government digital transformation. 
            We specialize in helping public sector organizations embrace modern technology while 
            maintaining the highest standards of security and compliance.
          </p>
          <p className="mb-4">
            Our team combines public sector expertise with cutting-edge technical knowledge to 
            deliver efficient, user-friendly solutions that improve both internal operations and 
            citizen services. We're committed to helping government agencies achieve rapid, 
            meaningful digital transformation.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg"
    },

    stats: [
      {
        value: "40%",
        label: "Average reduction in processing times achieved"
      },
      {
        value: "15+",
        label: "Successful government projects delivered"
      },
      {
        value: "100%",
        label: "Compliance with government security standards"
      },
      {
        value: "98%",
        label: "Client satisfaction rate"
      }
    ],

    caseStudies: [
      {
        client: "Local Council",
        title: "Digital Citizen Services Portal",
        description: "Developed and implemented a modern, user-friendly portal that simplified access to council services, reducing wait times by 50% and increasing online service adoption by 300%.",
        image: "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg",
        link: "#"
      },
      {
        client: "Regional Transport Authority",
        title: "Smart Transportation Management System",
        description: "Created an integrated platform for real-time transport monitoring and management, improving service reliability by 35% and reducing operational costs by 25%.",
        image: "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg",
        link: "#"
      },
      {
        client: "Municipal Government",
        title: "Cloud Migration & Modernization",
        description: "Successfully migrated legacy systems to a secure cloud infrastructure, enhancing system performance by 60% while ensuring strict data protection compliance.",
        image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg",
        link: "#"
      }
    ],

    services: [
      {
        title: "Digital Service Transformation",
        description: "User-centric digital platforms that make government services more accessible and efficient for citizens."
      },
      {
        title: "Cloud Solutions",
        description: "Secure, compliant cloud migration and infrastructure optimization tailored for government needs."
      },
      {
        title: "Data Analytics",
        description: "Actionable insights from government data to improve decision-making and service delivery."
      },
      {
        title: "Security & Compliance",
        description: "Robust security solutions that protect sensitive data while meeting all regulatory requirements."
      },
      {
        title: "Process Automation",
        description: "Smart automation solutions that streamline operations and reduce administrative burden."
      },
      {
        title: "System Integration",
        description: "Seamless integration of new and existing systems for improved efficiency and connectivity."
      }
    ],

    resources: [
      {
        type: "WHITEPAPER",
        title: "The Agile Government: Digital Transformation Guide",
        image: "https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg",
        link: "#"
      },
      {
        type: "BLOG",
        title: "Modernizing Public Services: A Step-by-Step Approach",
        image: "https://images.pexels.com/photos/8847471/pexels-photo-8847471.jpeg",
        link: "#"
      },
      {
        type: "VIDEO",
        title: "Digital Government Success Stories: Client Testimonials",
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
        link: "#"
      }
    ],

  };

  return <IndustryPage {...pageData} />;
};

export default GovernmentPage;