import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Eyebrow from "../ui/eyebrow";
import Card from "../ui/card";

// Define Service Type
interface Service {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  buttonText: string;
}

// Services Data
const services: Service[] = [
  {
    title: "Cloud Services",
    description: "Helping businesses build a strong brand identity and positioning.",
    href: "/services/cloud",
    imageUrl: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: 'read more',
  },
  {
    title: "Data & AI",
    description: "Crafting intuitive and visually appealing digital experiences.",
    href: "/services/data-ai",
    imageUrl: "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: 'read more',
  },
  {
    title: "UPI Payments",
    description: "Creating dynamic animations that bring stories to life.",
    href: "/services/upi-solutions",
    imageUrl: "https://www.chequpi.com/wp-content/uploads/2023/08/Greuok0YzOUYY1hN9XQmngu3Y04-1.webp",
    buttonText: 'read more',
  },
  {
    title: "Digital Invoicing & SMS Pay",
    description: "Developing fast and scalable websites with modern technologies.",
    href: "/services/digital-invoicing-sms-pay",
    imageUrl: "https://images.pexels.com/photos/1458283/pexels-photo-1458283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: 'read more',
  },
  {
    title: "Payment Gateway",
    description: "High-quality 3D renders for products, interiors, and branding.",
    href: "/services/payment-gateway",
    imageUrl: "https://images.pexels.com/photos/442579/pexels-photo-442579.jpeg",
    buttonText: 'read more',
  },
  {
    title: "Consulting",
    description: "Full-service video production from concept to execution.",
    href: "/services/consulting",
    imageUrl: "https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: 'read more'
  },
  {
    title: "Cybersecurity",
    description: "Creating visually stunning and persuasive presentations.",
    href: "/services/cybersecurity",
    imageUrl: "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: 'read more',
  },
  {
    title: "POS & Invoicing Solutions",
    description: "Building robust e-commerce platforms for businesses.",
    href: "/services/pos-invoicing",
    imageUrl: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: 'read more',
  },
  {
    title: "Comprehensive Billing Applications",
    description: "Producing compelling content for brands across platforms.",
    href: "/services/billing-application",
    imageUrl: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: 'read more',
  },
  {
    title: "Advanced Analytics & Reporting",
    description: "Using AI to enhance creative workflows and design automation.",
    href: "/services/analytics-reporting",
    imageUrl: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: 'read more',
  },
];

const ServicesGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15, // Staggered animation
        duration: 0.7,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="w-full bg-dark-dark text-white py-16">
      <div className="container mx-auto px-6">
        {/* Eyebrow Component */}
        <Eyebrow text="Our Services" className="text-gray-400 text-center mb-4" />

        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold mb-12">
          Transforming your Businesses
        </h2>

        {/* Card Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {services.map((service, index) => (
            <div key={index} className="w-full">
              <Card {...service} variant="full-bg" size="lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
