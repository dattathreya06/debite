"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/button";
import Card from "../ui/card";
import FooterCTA from "../layout/cta";
import Eyebrow from "../ui/eyebrow";
import { createSplitText } from "@/app/anim/text-anim";

gsap.registerPlugin(ScrollTrigger);

// Types
interface Capability {
  title: string;
  description: string;
  icon?: React.ComponentType<any>;
}

interface CaseStudy {
  client: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Technology {
  name: string;
  logo: string;
  description: string;
}

interface Methodology {
  title: string;
  description: string;
  steps: string[];
}

interface Resource {
  type: "WHITEPAPER" | "BLOG" | "VIDEO" | "WEBINAR";
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ServicePageProps {
  title: string;
  description: string;
  heroImage: string;
  overview: {
    title: string;
    content: React.ReactNode;
    image: string;
  };
  capabilities: Capability[];
  caseStudies: CaseStudy[];
  technologies: Technology[];
  methodology: Methodology;
  resources: Resource[];
  relatedServices: string[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  heroImage,
  overview,
  capabilities,
  caseStudies,
  technologies,
  methodology,
  resources,
  relatedServices,
}) => {
  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const methodologyRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize split text instances for hero section
    if (heroTitleRef.current && heroDescRef.current) {
      const titleSplit = createSplitText(heroTitleRef.current);
      const descSplit = createSplitText(heroDescRef.current);

      // Split the text
      const { words: titlewords } = titleSplit.split({ types: ['words'] });
      const { words: descWords } = descSplit.split({ types: ['words'] });

      // Initial state
      gsap.set([titlewords, descWords], { opacity: 0, y: 50 });

      // Hero animation timeline
      const tl = gsap.timeline();

      // Animate title characters
      tl.to(titlewords, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: "power3.out"
      });

      // Animate description words
      tl.to(descWords, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "power2.out"
      }, "-=0.4");

      // Cleanup function
      return () => {
        titleSplit.revert();
        descSplit.revert();
        tl.kill();
      };
    }
  }, []);

  useEffect(() => {
    // Create reusable animation for cards and grid items
    const createCardAnimation = (cards: Element[]) => {
      gsap.from(cards, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards[0].parentElement,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    };

    // Section animations with text splitting
    const sections = [
      { ref: overviewRef, selector: ".overview-content", title: "overview-title" },
      { ref: capabilitiesRef, selector: ".capability-card", title: "capabilities-title" },
      { ref: caseStudiesRef, selector: ".case-study-card", title: "case-studies-title" },
      { ref: technologiesRef, selector: ".technology-card", title: "technologies-title" },
      { ref: methodologyRef, selector: ".methodology-step", title: "methodology-title" },
      { ref: resourcesRef, selector: ".resource-card", title: "resources-title" }
    ];

    // Cleanup array for split text instances
    const splitInstances: ReturnType<typeof createSplitText>[] = [];

    sections.forEach(({ ref, selector, title }) => {
      if (ref.current) {
        const elements = ref.current.querySelectorAll(selector);
        if (elements.length) {
          // Split text for headings in each section
          const sectionHeading = ref.current.querySelector(`h2[data-title="${title}"]`);
          if (sectionHeading) {
            const headingSplit = createSplitText(sectionHeading as HTMLElement);
            splitInstances.push(headingSplit);
            
            const { words } = headingSplit.split({ types: ['words'] });
            
            gsap.from(words, {
              opacity: 0,
              y: 30,
              duration: 0.6,
              stagger: 0.02,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionHeading,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            });
          }

          // Animate the cards
          createCardAnimation(Array.from(elements));
        }
      }
    });

    // Cleanup function
    return () => {
      splitInstances.forEach(instance => instance.revert());
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative h-96 w-full" ref={heroRef}>
        <Image
          src={heroImage || "/api/placeholder/1920/600"}
          alt={title}
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent">
          <div className="container mx-auto px-6 py-20 h-full flex flex-col justify-end">
            <div className="max-w-2xl">
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gold-300">
                  <li>
                    <Link href="/" className="hover:text-gold-200 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-gold-200 transition-colors">
                      Services
                    </Link>
                  </li>
                </ol>
              </nav>
              <h1 ref={heroTitleRef} className="text-5xl font-bold mb-4">{title}</h1>
              <p ref={heroDescRef} className="text-xl text-gray-200">{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Navigation */}
      <nav className="sticky top-16 z-40 bg-dark-dark shadow-lg">
        <div className="container mx-auto px-6">
          <ul className="flex space-x-8 overflow-x-auto">
            {["overview", "capabilities", "case-studies", "technologies", "methodology", "resources"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="py-4 block text-primary hover:text-accent transition-colors"
                >
                  {item.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-dark" ref={overviewRef}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-12">
            <div className="lg:w-1/2 overview-content">
              <Image
                src={overview.image || "/api/placeholder/800"}
                alt="Overview"
                width={800}
                height={600}
                className="grayscale shadow-xl"
              />
            </div>
            <div className="lg:w-1/2 overview-content">
              <h2 data-title="overview-title" className="text-4xl font-bold mb-6 text-white">
                {overview.title}
              </h2>
              <div className="prose prose-invert max-w-none">
                {overview.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-dark-dark" ref={capabilitiesRef}>
        <div className="container mx-auto px-6">
          <Eyebrow text="WHAT WE OFFER" />
          <h2 data-title="capabilities-title" className="text-4xl font-bold mb-12 text-white">
            Core Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="capability-card p-8 bg-dark border border-dark-light shadow-xl"
              >
                {capability.icon && (
                 <div className="text-primary mb-4">
                  <capability.icon size={50} strokeWidth={1} />
                </div>
                )}
                <h3 className="text-xl font-bold mb-4 text-white">
                  {capability.title}
                </h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-dark" ref={caseStudiesRef}>
        <div className="container mx-auto px-6">
          <Eyebrow text="SUCCESS STORIES" />
          <h2 data-title="case-studies-title" className="text-4xl font-bold mb-12 text-white">
            Featured Case Studies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="case-study-card flex flex-col overflow-hidden bg-dark border border-dark-light shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={study.image || "/api/placeholder/400/300"}
                    alt={study.title}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-gold-300 mb-2">{study.client}</p>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-1">{study.description}</p>
                  <Button
                    variant="default"
                    className="mt-auto bg-primary text-white hover:text-white/50 hover:bg-primary/50"
                  >
                    <a href={study.link}>
                    Read the case study  </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-dark-dark" ref={technologiesRef}>
        <div className="container mx-auto px-6">
          <Eyebrow text="OUR TOOLS" />
          <h2 data-title="technologies-title" className="text-4xl font-bold mb-12 text-white">
            Technologies & Platforms
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="technology-card p-6 bg-dark border border-dark-light shadow-xl flex flex-col items-center text-center"
              >
               {/* <Image
                  src={tech.logo || "/api/placeholder/100/100"}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="mb-4"
                /> */}
                <h3 className="text-lg font-bold mb-2 text-white">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-dark" ref={methodologyRef}>
        <div className="container mx-auto px-6">
          <Eyebrow text="HOW WE WORK" />
          <h2 data-title="methodology-title" className="text-4xl font-bold mb-12 text-white">
            {methodology.title}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            {methodology.description}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.steps.map((step, index) => (
              <div
                key={index}
                className="methodology-step p-6 bg-dark border border-dark-light shadow-xl"
              >
                <div className="inline-block text-6xl font-light bg-gradient-to-br from-primary to-accent text-transparent bg-clip-text mb-4">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <p className="text-gray-200">{step}</p>
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
                  <a href={resource.link}>
                  <Button
                    variant="default"
                    className="mt-auto bg-primary text-white hover:white/50 hover:bg-royal_blue_traditional-700"
                  >
                    {resource.type === "VIDEO"
                      ? "Watch the video"
                      : "Read more"}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <Eyebrow text="EXPLORE MORE" />
          <h2 className="text-4xl font-bold mb-12 text-white">Related Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-6 bg-dark border border-dark-light shadow-xl hover:border-gold-500 transition-colors group"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                  {service}
                </h3>
                <ChevronRight className="mt-4 w-5 h-5 text-gold-300 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FooterCTA
        title="Ready to Transform Your Business?"
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </div>
  );
};

export default ServicePage;