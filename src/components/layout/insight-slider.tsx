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
    description:
      "Scalable cloud solutions to optimize infrastructure, security, and business continuity.",
    href: "/services/cloud",
    imageUrl:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "read more",
  },
  {
    title: "Data & AI",
    description:
      "Unlock business potential with data-driven insights and AI-powered automation.",
    href: "/services/data-ai",
    imageUrl:
      "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "read more",
  },
  {
    title: "UPI Payments",
    description:
      "Seamless, secure, and instant UPI payment solutions for businesses and consumers.",
    href: "/services/upi-solutions",
    imageUrl:
      "https://www.chequpi.com/wp-content/uploads/2023/08/Greuok0YzOUYY1hN9XQmngu3Y04-1.webp",
    buttonText: "read more",
  },
  {
    title: "Digital Invoicing & SMS Pay",
    description:
      "Automated invoicing and secure SMS payment solutions for faster transactions.",
    href: "/services/digital-invoicing-sms-pay",
    imageUrl:
      "https://images.pexels.com/photos/1458283/pexels-photo-1458283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "read more",
  },
  {
    title: "Payment Gateway",
    description:
      "Reliable and secure payment processing for e-commerce and online businesses.",
    href: "/services/payment-gateway",
    imageUrl:
      "https://images.pexels.com/photos/442579/pexels-photo-442579.jpeg",
    buttonText: "read more",
  },
  {
    title: "Consulting",
    description:
      "Expert guidance on digital transformation, IT strategy, and business growth.",
    href: "/services/consulting",
    imageUrl:
      "https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "read more",
  },
  {
    title: "Cybersecurity",
    description:
      "Advanced security solutions to protect data, networks, and digital assets from threats.",
    href: "/services/cybersecurity",
    imageUrl:
      "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "read more",
  },
  {
    title: "POS & Invoicing Solutions",
    description:
      "Integrated point-of-sale and invoicing solutions for seamless business operations.",
    href: "/services/pos-invoicing",
    imageUrl:
      "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "read more",
  },
  {
    title: "Comprehensive Billing Applications",
    description:
      "Custom billing applications with automation and real-time tracking for businesses.",
    href: "/services/billing-application",
    imageUrl:
      "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "read more",
  },
  {
    title: "Advanced Analytics & Reporting",
    description:
      "Powerful analytics and reporting tools for data-driven decision-making.",
    href: "/services/analytics-reporting",
    imageUrl:
      "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "read more",
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
        <Eyebrow
          text="Our Services"
          className="text-gray-400 text-center mb-4"
        />

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
