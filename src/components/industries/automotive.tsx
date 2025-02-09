'use client'

import React from 'react';
import IndustryPage from './industry-page';
import type { IndustryPageProps } from './industry-page';

const AutomotivePage = () => {
  const pageData: IndustryPageProps = {
    title: "Automotive",
    description: "Accelerating a connected and data-driven digital future.",
    heroImage: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg",
    
    overview: {
      title: "Your partner for intelligent automotive transformation and smart mobility evolution",
      content: (
        <>
          <p className="mb-4">
            With over 50 years of experience, and leading OEMs and suppliers as key clients, 
            NTT DATA is your trusted partner for intelligent automotive transformation and 
            smart mobility evolution.
          </p>
          <p className="mb-4">
            Our "Connect & Create" strategy develops transformative automotive industry 
            solutions and services. We leverage data values as part of an extended ecosystem 
            to scale new product rollouts, explore joint ventures, use new technologies to 
            accelerate innovation, and deliver advanced automotive use cases globally.
          </p>
        </>
      ),
      image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg"
    },

    stats: [
      {
        value: "90+",
        label: "Global automotive clients including OEMs, suppliers and dealerships"
      },
      {
        value: "Top 7",
        label: "Automotive manufacturers worldwide are our clients"
      },
      {
        value: "$3.6B+",
        label: "R&D investments, including in ACES technologies"
      },
      {
        value: "50+",
        label: "Years of experience servicing international industry leaders"
      }
    ],

    caseStudies: [
      {
        client: "McLaren",
        title: "Modernizing McLaren's legacy IT systems for greater efficiency and growth",
        description: "By moving application managed services under a single provider and implementing a shared data strategy, we helped McLaren pivot to a hybrid remote working model and improve organizational efficiency.",
        image: "https://images.pexels.com/photos/30092951/pexels-photo-30092951/free-photo-of-classic-mclaren-racing-car-on-display.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "#"
      },
      {
        client: "Telefónica and CIE Automotive",
        title: "Accelerating automation for a global automotive components supplier",
        description: "We developed a 5G-enabled logistics platform that enables CIE Automotive to achieve end-to-end automation of its production line, driving productivity and cost efficiency.",
        image: "https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "#"
      },
      {
        client: "BMW Group",
        title: "Transforming infrastructure operations for worldwide data centers",
        description: "Putting cloud front and center, our Hybrid Infrastructure Managed Services transformed BMW Group's worldwide data centers, enabling global support for their manufacturing and production lines.",
        image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "#"
      }
    ],

    services: [
      {
        title: "Automotive Consulting",
        description: "Enable organizational transformation from strategy to implementation with leading business and technology consultants."
      },
      {
        title: "Software-Defined Vehicle",
        description: "Access in-vehicle, connectivity and off-vehicle backend data insights through integrated frameworks and technology solutions."
      },
      {
        title: "Connected Services & Data Platform",
        description: "Deliver connected experiences for drivers and OEMs, designed in collaboration with industry-leading tech partners."
      },
      {
        title: "Digital Factory & Smart Supply Chain",
        description: "Unlock greater operational agility through digital transformations that minimize disruption, maximize productivity and enhance cost efficiency."
      },
      {
        title: "Digital Marketing & Connected Customer Journey",
        description: "Enhance customer loyalty, acquisition and engagement for sustainable revenue growth."
      },
      {
        title: "EV Charging & Data Management",
        description: "Improve the EV user experience with customer journey design and enterprise data integration."
      }
    ],

    resources: [
      {
        type: "BLOG",
        title: "From Electric Vehicles to GenAI: How Technologies are Shaping the Future of the Automotive Industry",
        image: "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=600",
        link: "#"
      },
      {
        type: "VIDEO",
        title: "Transforming Mobility, Empowering Sustainability - Watch our video from Global Industries Leader",
        image: "/images/video-mobility.jpg",
        link: "#"
      },
      {
        type: "WHITEPAPER",
        title: "The Future of Software-Defined Vehicles: Technology Trends and Implementation Strategies",
        image: "/images/whitepaper-sdv.jpg",
        link: "#"
      }
    ],
  };

  return <IndustryPage {...pageData} />;
};

export default AutomotivePage;