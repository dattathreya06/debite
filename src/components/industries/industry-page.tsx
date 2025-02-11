"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "../ui/card";
import Button from "../ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { textReveal, fadeIn } from "@/app/anim/text-anim";
import CTA from "../layout/cta";
import Eyebrow from "../ui/eyebrow";
import { useGSAPAnimations } from "@/app/hooks/use-gsap-animations";
import FooterCTA from "../layout/cta";

gsap.registerPlugin(ScrollTrigger);

// Component Types
interface Stat {
  value: string;
  label: string;
}

interface Overview {
  title: string;
  content: React.ReactNode;
  image: string;
}

interface CaseStudy {
  client: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Service {
  title: string;
  description: string;
}

interface Resource {
  type: "BLOG" | "VIDEO" | "WHITEPAPER" | "NEWS";
  title: string;
  image: string;
  link: string;
}



export interface IndustryPageProps {
  title: string;
  description: string;
  heroImage: string;
  stats: Stat[];
  overview: Overview;
  caseStudies: CaseStudy[];
  services: Service[];
  resources: Resource[];
}

const IndustryPage: React.FC<IndustryPageProps> = ({
  title,
  description,
  heroImage,
  stats,
  overview,
  caseStudies,
  services,
  resources,
}) => {
  // Refs for animations
  const pageRef = useRef<HTMLDivElement>(null);
  
  useGSAPAnimations({
    trigger: pageRef,
    selectors: [
      // Hero nav animation
      {
        target: '.hero nav',
        animation: {
          timeline: true,
          from: { 
            opacity: 0, 
            y: -20, 
            duration: 0.6, 
            ease: "power3.out" 
          },
          to: { 
            opacity: 1, 
            y: 0
          }
        }
      },
      // Hero title animation
      {
        target: '.hero h1',
        animation: {
          timeline: true,
          from: {
            opacity: 0,
            y: 50,
            duration: 0.5,
            stagger: 0.02,
            ease: "power4.out"
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      },
      // Hero description animation
      {
        target: '.hero p',
        animation: {
          timeline: true,
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out"
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      }
    ],
    scrollAnimations: [
      // Overview content animation
      {
        selector: '.overview-content',
        trigger: '.overanim',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: {
          from: {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power3.out"
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      },
      // Case studies animation
      {
        selector: '.case-study-card',
        trigger: '.caseanim',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      },
      // Services animation
      {
        selector: '.service-card',
        trigger: '.servanim',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      },
      // Stats animation
      {
        selector: '.stat-card',
        trigger: '.statanim',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      },
      // Resources animation
      {
        selector: '.resource-card',
        trigger: '.resoanim',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      },
      // Region sections animation
      {
        selector: '.region-section',
        trigger: '.globanim',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      }
    ]
  });

  return (
    <div ref={pageRef} className="flex flex-col min-h-screen bg-royal_blue_traditional-900 text-white">
      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <Image
          src={heroImage || "/api/placeholder/1920/600"}
          alt={title}
          fill
          className="object-cover grayscale "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent">
          <div className="container mx-auto px-6 py-20 h-full flex flex-col justify-end">
            <div className="max-w-2xl">
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gold-300">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-gold-200 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li>
                    <Link
                      href="/industries"
                      className="hover:text-gold-200 transition-colors"
                    >
                      Industries
                    </Link>
                  </li>
                </ol>
              </nav>
              <h1 className="text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-gray-200">{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <nav className="sticky top-16 z-40 bg-dark-dark shadow-lg">
        <div className="container mx-auto px-6">
          <ul className="flex space-x-8 overflow-x-auto">
            {[
              "overview",
              "case-studies",
              "services",
              "resources",
              "global-services",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="py-4 block text-gold-300 hover:text-gold-200 transition-colors"
                >
                  {item
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-dark">
        <div className="overanim container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-12">
            <div className="lg:w-1/2 overview-content">
              <Image
                src={overview.image || "/api/placeholder/800/600"}
                alt="Overview"
                width={800}
                height={600}
                className=" shadow-xl"
              />
            </div>
            <div className="lg:w-1/2 overview-content">
              <h2 className="text-4xl font-bold mb-6 text-white">
                {overview.title}
              </h2>
              <div className="prose prose-invert max-w-none">
                {overview.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        className="py-20 bg-dark-dark"
      >
        <div className="container mx-auto px-6">
          <Eyebrow text="SUCCESS STORIES"></Eyebrow>
          <h2 className="text-4xl font-bold mb-12 text-white">Case Studies</h2>
          <div className="caseanim grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="case-study-card flex flex-col overflow-hidden  bg-dark shadow-xl border border-dark-light"
              >
                <div className="relative h-48">
                  <Image
                    src={study.image || "/api/placeholder/400/300"}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-gold-300 mb-2">{study.client}</p>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-1">
                    {study.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-auto text-gold-300 hover:text-gold-200 hover:bg-royal_blue_traditional-700"
                  >
                    Read the case study{" "}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark">
        <div className="container mx-auto px-6">
        <Eyebrow text="WE SERVE"></Eyebrow>
          <h2 className="text-4xl font-bold mb-12 text-white">Our Services</h2>
          <div className="servanim grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card p-8 bg-dark  border border-dark-light shadow-xl hover:border-gold-500 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-dark-dark">
        <div className="container mx-auto px-6">
        <Eyebrow text="WE CREATED GROWTH"></Eyebrow>
          <h2 className="text-4xl font-bold mb-12 text-white">Our Impact</h2>
          <div className="statanim grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-dark p-8  border border-dark-light shadow-xl"
              >
                <p className="text-6xl font-thin text-transparent bg-gradient-to-br from-primary to-accent bg-clip-text mb-4">
                  {stat.value}
                </p>
                <p className="text-gray-200 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="py-20 bg-dark"
      >
        <div className="container mx-auto px-6">
        <Eyebrow text="KNOWLEDGE"></Eyebrow>
          <h2 className="text-4xl font-bold mb-12 text-white">
            Resource Library
          </h2>
          <div className="resoanim grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="resource-card flex flex-col overflow-hidden  bg-royal_blue_traditional-900 shadow-xl border border-dark-light"
              >
                <div className="relative h-48">
                  <Image
                    src={resource.image || "/api/placeholder/400/300"}
                    alt={resource.title}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="p-6 flex flex-col h-60 justify-between inline-flex">
                  <Eyebrow
                   text={resource.type}
                   variant="background"
                   color="text-white"
                   bgColor="bg-primary"/>
                  <h3 className="text-xl mt-4 font-bold mb-3 text-white">
                    {resource.title}
                  </h3>
                  <Button
                    variant="default"
                    className="mt-auto bg-primary text-white hover:white/50 hover:bg-royal_blue_traditional-700"
                  >
                    {resource.type === "VIDEO"
                      ? "Watch the video"
                      : "Read more"}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA
        title="Ready to Transform Your Business?"
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </div>
  );
};

export default IndustryPage;
