import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import Eyebrow from "../ui/eyebrow";

gsap.registerPlugin(ScrollTrigger);

interface Logo {
  name: string;
  imageUrl: string;
  alt?: string;
  width?: number;
  height?: number;
  href: string;
  isExternal?: boolean;
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

      // Hover animations for logo items
      const logoItems = document.querySelectorAll(".logo-item");
      logoItems.forEach((item) => {
        const tl = gsap.timeline({ paused: true });
        const icon = item.querySelector(".external-icon");
        const overlay = item.querySelector(".overlay");

        tl.to(item, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        })
          .to(
            overlay,
            {
              opacity: 1,
              duration: 0.2,
              ease: "power2.out",
            },
            0
          )
          .to(
            icon,
            {
              opacity: 1,
              y: 0,
              duration: 0.2,
              ease: "power2.out",
            },
            0
          );

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

  const renderLogoLink = (logo: Logo) => {
    const content = (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="overlay absolute inset-0 bg-dark-dark opacity-0 transition-opacity" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <Image
            src={logo.imageUrl}
            alt={logo.alt || logo.name}
            width={logo.width || 140}
            height={logo.height || 100}
            className="object-contain max-w-[80%] max-h-[80%]"
          />
        </div>
        {logo.isExternal && (
          <div className="external-icon absolute top-4 right-4 opacity-0 translate-y-2">
            <ExternalLink className="w-5 h-5 text-gold-300" />
          </div>
        )}
      </div>
    );

    return logo.isExternal ? (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        {content}
      </a>
    ) : (
      <Link href={logo.href} className="block w-full h-full">
        {content}
      </Link>
    );
  };

  return (
    <section className="w-full py-24 bg-dark">
      <div ref={containerRef} className="container mx-auto px-6 py-12 bg-dark">
        {(title || description) && (
          <div className="mb-12">
            <Eyebrow text="PARTNERS" />
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
          className={`grid grid-cols-1 ${gridColumns[columns]} gap-8`}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`logo-item h-32 bg-dark-dark border border-dark-light shadow-lg transition-shadow hover:shadow-xl cursor-pointer ${
                grayscale
                  ? "grayscale hover:grayscale-0 transition-all duration-300"
                  : ""
              }`}
            >
              {renderLogoLink(logo)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
