"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ExternalLink,
  Building2,
  Clock,
  Users,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";
import { useGSAPAnimations } from "@/app/hooks/use-gsap-animations";
import FooterCTA from "../layout/cta";

gsap.registerPlugin(ScrollTrigger);

interface Metric {
  label: string;
  value: string;
  description?: string;
}

interface Solution {
  title: string;
  description: string;
  image?: string;
}

interface Technology {
  name: string;
  description: string;
  logo?: string;
}

export interface CaseStudyPageProps {
  client: string;
  industry: string;
  duration: string;
  teamSize: string;
  title: string;
  description: string;
  heroImage: string;
  challenge: string;
  approach: string;
  metrics: Metric[];
  solutions: Solution[];
  technologies: Technology[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image?: string;
  };
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  client,
  industry,
  duration,
  teamSize,
  title,
  description,
  heroImage,
  challenge,
  approach,
  metrics,
  solutions,
  technologies,
  testimonial,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAPAnimations({
    trigger: containerRef,
    selectors: [
      {
        target: ".hero-meta",
        animation: {
          from: {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: "power3.out",
          },
          to: {
            opacity: 1,
            y: 0,
          },
        },
      },
      {
        target: ".hero-title",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          to: {
            opacity: 1,
            y: 0,
          },
        },
      },
      {
        target: ".hero-description",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          to: {
            opacity: 1,
            y: 0,
          },
        },
      },
    ],
    scrollAnimations: [
      {
        selector: ".overview-content",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
        },
      },
      {
        selector: ".metric-card",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
        },
      },
      {
        selector: ".solution-card",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
        },
      },
      {
        selector: ".testimonial-content",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
        },
      },
    ],
  });

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-screen bg-dark text-white"
    >
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] w-ful">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent">
          <div className="container mx-auto px-6 py-20 h-full flex flex-col justify-end">
            <div className="max-w-3xl">
              <div className="hero-meta flex flex-wrap gap-6 mb-8 text-gold-300">
                <div className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  <span>{industry}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{teamSize} team members</span>
                </div>
              </div>
              <h1 className="hero-title lg:text-5xl sm:text-3xl font-bold mb-6">
                {title}
              </h1>
              <p className="hero-description text-sm text-gray-200 mb-8">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="overview-content">
              <Eyebrow text="THE CHALLENGE" />
              <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
              <div className="prose prose-invert">
                <p>{challenge}</p>
              </div>
            </div>
            <div className="overview-content">
              <Eyebrow text="OUR APPROACH" />
              <h2 className="text-3xl font-bold mb-6">Solution Strategy</h2>
              <div className="prose prose-invert">
                <p>{approach}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-dark-dark">
        <div className="container mx-auto px-6">
          <Eyebrow text="IMPACT" />
          <h2 className="text-4xl font-bold mb-12">Key Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="metric-card p-8 bg-dark border border-dark-light"
              >
                <div className="text-4xl font-bold text-gold-300 mb-4">
                  {metric.value}
                </div>
                <h3 className="text-xl font-bold mb-2">{metric.label}</h3>
                {metric.description && (
                  <p className="text-gray-300">{metric.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same... */}

      {/* Solutions Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <Eyebrow text="THE SOLUTION" />
          <h2 className="text-4xl font-bold mb-12">Key Components</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="solution-card flex flex-col md:flex-row gap-8 p-8 bg-dark-dark border border-dark-light"
              >
                {/*{solution.image && (
                  <div className="md:w-1/3">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                )} */}
                <div>
                  <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-300">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-dark-dark">
        <div className="container mx-auto px-6">
          <Eyebrow text="TECH STACK" />
          <h2 className="text-4xl font-bold mb-12">Technologies Used</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-dark border border-dark-light rounded-lg"
              >
                {/*{tech.logo && (
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                )}*/}
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {testimonial && (
        <section className="py-20 bg-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto testimonial-content">
              <Eyebrow text="CLIENT FEEDBACK" />
              <blockquote className="text-2xl font-medium mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                {/* {testimonial.image && (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                )} */}
                <div className="text-left">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-gold-300">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <FooterCTA
        title="Ready for your digital transformation"
        buttonHref="/contact"
        buttonText="Contact Us"
      />
    </div>
  );
};

export default CaseStudyPage;
