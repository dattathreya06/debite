"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Eyebrow from "../ui/eyebrow";
import { Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Logo {
  name: string;
  imageUrl: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface LogoGridProps {
  logos: Logo[];
  title?: string;
  description?: string;
  columns?: 3 | 4 | 5 | 6;
  grayscale?: boolean;
  animate?: boolean;
}

const LogoGrid = ({
  logos,
  title,
  description,
  columns = 4,
  grayscale = true,
  animate = true,
}: LogoGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in logos with stagger effect
      gsap.from(".logo-item", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: {
          amount: 0.8,
          grid: [Math.ceil(logos.length / columns), columns],
          from: "start",
        },
        ease: "power3.out",
      });

      // Optional hover animations
      const logoItems = document.querySelectorAll(".logo-item");
      logoItems.forEach((item) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(item, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });

        item.addEventListener("mouseenter", () => tl.play());
        item.addEventListener("mouseleave", () => tl.reverse());
      });
    }, containerRef);

    return () => ctx.revert();
  }, [animate, logos.length, columns]);

  const gridColumns = {
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
  };

  return (
    <section className="w-full py-24 bg-dark">
      <div ref={containerRef} className="container mx-auto px-6 py-12 bg-dark">
        {(title || description) && (
          <div className="mb-12">
            <Eyebrow text="PRODUCTS" />
            {title && (
              <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
            )}
            {description && (
              <p className="text-lg text-gray-300">{description}</p>
            )}
          </div>
        )}

        <div
          ref={gridRef}
          className={`grid grid-cols-1 ${gridColumns[columns]} gap-8 items-center justify-items-center`}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`logo-item w-full aspect-[4/2] relative p-6 bg-dark-dark border border-dark-light shadow-lg flex items-center justify-center transition-shadow hover:shadow-xl ${
                grayscale
                  ? "grayscale hover:grayscale-0 transition-all duration-300"
                  : ""
              }`}
            >
              <Image
                src={logo.imageUrl}
                alt={logo.alt || logo.name}
                width={logo.width || 140}
                height={logo.height || 100}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
