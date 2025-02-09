import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SplitType from "split-type";
import Eyebrow from "./eyebrow";

gsap.registerPlugin(ScrollTrigger);

type CardVariant = "default" | "featured" | "compact" | "full-bg";
type CardSize = "sm" | "md" | "lg";

interface CardProps {
  title: string;
  description: string;
  category?: string;
  imageUrl?: string;
  imageBlur?: string;
  href: string;
  variant?: CardVariant;
  size?: CardSize;
}

const Card = ({
  title,
  description,
  category = "",
  imageUrl = "/api/placeholder/400/300",
  imageBlur,
  href,
  variant = "default",
  size = "md",
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const categoryRef = useRef<HTMLSpanElement>(null);
  const linkRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const titleElement = titleRef.current;
    const descElement = descRef.current;
    const categoryElement = categoryRef.current;
    const linkElement = linkRef.current;
    const imageElement = imageRef.current;
    const borderElement = borderRef.current;

    if (
      !card ||
      !titleElement ||
      !descElement ||
      !linkElement ||
      !imageElement ||
      !borderElement
    )
      return;

    const splitTitle = new SplitType(titleElement, { types: "chars" });
    const splitDesc = new SplitType(descElement, { types: "lines" });
    const chars = splitTitle.chars;
    const lines = splitDesc.lines;

    const tl = gsap.timeline({ paused: true });

    // Border animation
    tl.fromTo(
      borderElement,
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0
    );

    if (variant === "full-bg") {
      tl.to(
        card,
        {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
        .to(
          imageElement,
          {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        )
        .to(
          [chars, lines],
          {
            y: -3,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        );
    } else {
      tl.to(
        card,
        {
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
        .to(
          imageElement,
          {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        )
        .to(
          chars,
          {
            y: -2,
            stagger: 0.02,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        )
        .to(
          lines,
          {
            y: -3,
            opacity: 0.8,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        );
    }

    tl.to(
      linkElement,
      {
        x: 5,
        ease: "power2.out",
        duration: 0.3,
      },
      0
    );

    if (categoryElement) {
      tl.to(
        categoryElement,
        {
          y: -2,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      );
    }

    const mouseEnter = () => tl.play();
    const mouseLeave = () => tl.reverse();

    card.addEventListener("mouseenter", mouseEnter);
    card.addEventListener("mouseleave", mouseLeave);

    return () => {
      card.removeEventListener("mouseenter", mouseEnter);
      card.removeEventListener("mouseleave", mouseLeave);
      tl.kill();
    };
  }, [variant]);

  const sizeClasses = {
    sm: "w-64 h-96",
    md: "w-80 h-[32rem]",
    lg: "w-96 h-[36rem]",
  };

  const variantClasses = {
    default: "bg-white dark:bg-gray-800",
    featured: "bg-royal_blue_traditional-500 text-white",
    compact: "bg-white dark:bg-gray-800 h-auto",
    "full-bg": "bg-transparent text-white",
  };

  if (variant === "full-bg") {
    return (
      <Link href={href} className="block">
        <div
          ref={cardRef}
          className={`
            overflow-hidden
            transform-gpu will-change-transform
            ${sizeClasses[size]} 
            ${variantClasses[variant]}
            relative group
          `}
        >
          {/* Bottom border container */}
          <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none overflow-hidden">
            <div
              ref={borderRef}
              className="w-full h-[4px] bg-gadient-to-r from-primary to-accent origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <div
            ref={imageRef}
            className="absolute inset-0 w-full h-full transform-gpu"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transform-gpu"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder={imageBlur ? "blur" : "empty"}
              blurDataURL={imageBlur}
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/100 via-black/40 to-transparent" />
          </div>

          <div className="relative h-full flex flex-col justify-end p-6 z-10">
            {category && (
              <Eyebrow
                text={category}
                color="text-white"
                dashColor="text-primary-light"
                animationDuration={1.5}
                className="mb-4"
              />
            )}
            <h3
              ref={titleRef}
              className="text-2xl font-bold mb-3 leading-tight"
            >
              {title}
            </h3>
            <p ref={descRef} className="text-sm text-gray-200 line-clamp-3">
              {description}
            </p>

            <span
              ref={linkRef}
              className="mt-4 text-slate-950 text-sm font-medium inline-flex items-center gap-1"
            >
              Read more
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="block">
      <div
        ref={cardRef}
        className={`
          overflow-hidden shadow-lg transition-colors
          transform-gpu will-change-transform
          ${sizeClasses[size]} 
          ${variantClasses[variant]}
          relative
        `}
      >
        <div
          ref={imageRef}
          className="card-image relative overflow-hidden h-1/2"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transform-gpu"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder={imageBlur ? "blur" : "empty"}
            blurDataURL={imageBlur}
            priority={false}
          />
          {category && (
            <span
              ref={categoryRef}
              className="absolute top-4 left-4 px-3 py-1 text-sm font-medium bg-white/90 dark:bg-gray-800/90 rounded-full transform-gpu z-10"
            >
              {category}
            </span>
          )}
        </div>
        <div className="p-6">
          <h3 ref={titleRef} className="text-xl font-bold mb-3 leading-tight">
            {title}
          </h3>
          <p
            ref={descRef}
            className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3"
          >
            {description}
          </p>
        </div>
        <div className="absolute bottom-4 right-4 transform-gpu">
          <span
            ref={linkRef}
            className="text-primary text-sm font-medium inline-flex items-center gap-1"
          >
            Read more
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        {/* Bottom border for non-full-bg variants */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div
            ref={borderRef}
            className="w-full h-[4px] bg-primary origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
