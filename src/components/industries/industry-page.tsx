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

interface CountryService {
  name: string;
  url: string;
}

type CountryServices = Record<string, CountryService[]>;

export interface IndustryPageProps {
  title: string;
  description: string;
  heroImage: string;
  stats: Stat[];
  overview: Overview;
  caseStudies: CaseStudy[];
  services: Service[];
  resources: Resource[];
  countryServices: CountryServices;
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
  countryServices,
}) => {
  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const globalServicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const heroTitle = heroRef.current.querySelector("h1");
      const heroDesc = heroRef.current.querySelector("p");
      const heroNav = heroRef.current.querySelector("nav");

      if (heroTitle && heroDesc && heroNav) {
        const tl = gsap.timeline();

        tl.from(heroNav, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: "power3.out",
        })
          .add(textReveal(heroTitle), "-=0.3")
          .from(
            heroDesc,
            {
              opacity: 0,
              y: 30,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"
          );
      }
    }

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

    // Section animations
    const sections = [
      { ref: overviewRef, selector: ".overview-content" },
      { ref: caseStudiesRef, selector: ".case-study-card" },
      { ref: servicesRef, selector: ".service-card" },
      { ref: statsRef, selector: ".stat-card" },
      { ref: resourcesRef, selector: ".resource-card" },
      { ref: globalServicesRef, selector: ".region-section" },
    ];

    sections.forEach(({ ref, selector }) => {
      if (ref.current) {
        const elements = ref.current.querySelectorAll(selector);
        if (elements.length) {
          createCardAnimation(Array.from(elements));
        } else {
          gsap.from(ref.current, {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      }
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-royal_blue_traditional-900 text-white">
      {/* Hero Section */}
      <section className="relative h-96 w-full" ref={heroRef}>
        <Image
          src={heroImage || "/api/placeholder/1920/600"}
          alt={title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent">
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
      <nav className="sticky top-0 z-50 bg-dark-dark shadow-lg">
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
      <section id="overview" className="py-20 bg-dark" ref={overviewRef}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-12">
            <div className="lg:w-1/2 overview-content">
              <Image
                src={overview.image || "/api/placeholder/800/600"}
                alt="Overview"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
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
        ref={caseStudiesRef}
      >
        <div className="container mx-auto px-6">
          <Eyebrow text="WE MADE THESE"></Eyebrow>
          <h2 className="text-4xl font-bold mb-12 text-white">Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="case-study-card flex flex-col overflow-hidden  bg-royal_blue_traditional-800 shadow-xl border border-royal_blue_traditional-700"
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
      <section id="services" className="py-20 bg-dark" ref={servicesRef}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-white">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card p-8 bg-royal_blue_traditional-900 rounded-lg border border-royal_blue_traditional-700 shadow-xl hover:border-gold-500 transition-colors"
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
      <section className="py-20 bg-royal_blue_traditional-900" ref={statsRef}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-white">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-royal_blue_traditional-800 p-8 rounded-lg border border-royal_blue_traditional-700 shadow-xl"
              >
                <p className="text-4xl font-bold text-gold-300 mb-4">
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
        className="py-20 bg-royal_blue_traditional-800"
        ref={resourcesRef}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-white">
            Resource Library
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="resource-card flex flex-col overflow-hidden rounded-lg bg-royal_blue_traditional-900 shadow-xl border border-royal_blue_traditional-700"
              >
                <div className="relative h-48">
                  <Image
                    src={resource.image || "/api/placeholder/400/300"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-gold-300 mb-2">{resource.type}</p>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {resource.title}
                  </h3>
                  <Button
                    variant="ghost"
                    className="mt-auto text-gold-300 hover:text-gold-200 hover:bg-royal_blue_traditional-700"
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

      {/* Global Services Section */}
      <section
        id="global-services"
        className="py-20 bg-royal_blue_traditional-900"
        ref={globalServicesRef}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-gold-300">
            Services in your country
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(countryServices).map(
              ([region, countries], index) => (
                <div key={index} className="region-section">
                  <h3 className="text-xl font-bold mb-6 text-gold-300">
                    {region}
                  </h3>
                  <ul className="space-y-4">
                    {countries.map((country, idx) => (
                      <li key={idx}>
                        <a
                          href={country.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-gold-300 flex items-center transition-colors"
                        >
                          {country.name}
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <CTA
        title="Ready to Transform Your Business?"
        description="Join leading enterprises in digital transformation with NTT DATA's innovative solutions."
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </div>
  );
};

export default IndustryPage;
