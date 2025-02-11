'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { createSplitText } from "@/app/anim/text-anim";
import Eyebrow from "./eyebrow";
import Button from "./button";

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
  buttonText?: string;
  buttonHref?: string;
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
  buttonHref = "#",
  buttonText = "read more"
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const categoryRef = useRef<HTMLSpanElement>(null);
  const linkRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const splitTitleRef = useRef<any>(null);
  const splitDescRef = useRef<any>(null);

  useEffect(() => {
    const card = cardRef.current;
    const titleElement = titleRef.current;
    const descElement = descRef.current;
    const categoryElement = categoryRef.current;
    const linkElement = linkRef.current;
    const imageElement = imageRef.current;
    const borderElement = borderRef.current;

    if (!card || !titleElement || !descElement || !linkElement || !imageElement || !borderElement) return;

    // Create split text instances
    splitTitleRef.current = createSplitText(titleElement);
    splitDescRef.current = createSplitText(descElement);

    const { words: titlewords } = splitTitleRef.current.split({ types: ['words'] });
    const { lines: descLines } = splitDescRef.current.split({ types: ['lines'] });

    const tl = gsap.timeline({ paused: true });

    // Border animation
    tl.fromTo(
      borderElement,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.6, ease: "power2.out" },
      0
    );

    if (variant === "full-bg") {
      tl.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      }, 0)
      .to(imageElement, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",
      }, 0)
      .to(titlewords, {
        y: -3,
        stagger: 0.02,
        duration: 0.3,
        ease: "power2.out",
      }, 0)
      .to(descLines, {
        y: -3,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
      }, 0);
    } else {
      tl.to(card, {
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.3,
        ease: "power2.out",
      }, 0)
      .to(imageElement, {
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out",
      }, 0)
      .to(titlewords, {
        y: -2,
        stagger: 0.02,
        duration: 0.3,
        ease: "power2.out",
      }, 0)
      .to(descLines, {
        y: -3,
        opacity: 0.8,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
      }, 0);
    }

    tl.to(linkElement, {
      x: 5,
      ease: "power2.out",
      duration: 0.3,
    }, 0);

    if (categoryElement) {
      tl.to(categoryElement, {
        y: -2,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      }, 0);
    }

    const mouseEnter = () => tl.play();
    const mouseLeave = () => tl.reverse();

    card.addEventListener("mouseenter", mouseEnter);
    card.addEventListener("mouseleave", mouseLeave);

    return () => {
      card.removeEventListener("mouseenter", mouseEnter);
      card.removeEventListener("mouseleave", mouseLeave);
      splitTitleRef.current?.revert();
      splitDescRef.current?.revert();
      tl.kill();
    };
  }, [variant]);

  // Responsive size classes using aspect ratio and min-height
  const sizeClasses = {
    sm: "w-full min-h-[20rem] aspect-[4/5] md:w-64",
    md: "w-full min-h-[24rem] aspect-[3/4] md:aspect-[4/5]",
    lg: "w-full min-h-[28rem] aspect-[3/4] lg:aspect-[4/5]",
  };

  const variantClasses = {
    default: "bg-dark",
    featured: "bg-dark text-white",
    compact: "bg-dark",
    "full-bg": "bg-transparent text-white",
  };

  if (variant === "full-bg") {
    return (
      <Link href={href} className="block group">
        <div
          ref={cardRef}
          className={`
            overflow-hidden
            transform-gpu will-change-transform
            ${sizeClasses[size]} 
            ${variantClasses[variant]}
            relative
          `}
        >
          {/* Bottom border container */}
          <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none overflow-hidden">
            <div
              ref={borderRef}
              className="w-full h-1 bg-gradient-to-r from-primary to-accent origin-left"
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
              className="object-cover transform-gpu grayscale"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder={imageBlur ? "blur" : "empty"}
              blurDataURL={imageBlur}
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/50 to-transparent" />
          </div>

          <div className="relative h-full flex flex-col justify-end p-6 z-10">
            {category && (
              <Eyebrow 
                text={category}
                variant="background"
                color="text-blue-500"
                bgColor="bg-blue-500/10"
              />
            )}
            <h3
              ref={titleRef}
              className="text-xl md:text-2xl text-white font-bold mb-3 leading-tight"
            >
              {title}
            </h3>
            <p ref={descRef} className="text-sm text-gray-200 line-clamp-3">
              {description}
            </p>

            <span
              ref={linkRef}
              className="mt-4 text-white text-sm font-medium inline-flex items-center gap-1"
            >
              <Button variant="default" size="lg" onClick={() => window.location.href = buttonHref}>
                {buttonText}
              </Button>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="block group">
      <div
        ref={cardRef}
        className={`
          overflow-hidden shadow-lg transition-colors
          will-change-transform
          ${sizeClasses[size]} 
          ${variantClasses[variant]}
          relative flex flex-col border border-dark-light
        `}
      >
        <div
          ref={imageRef}
          className="relative overflow-hidden w-full"
          style={{ flex: '1 1 50%' }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder={imageBlur ? "blur" : "empty"}
            blurDataURL={imageBlur}
            priority={false}
          />
          {category && (
            <span
              ref={categoryRef}
              className="absolute top-4 left-4 z-10"
            >
               <Eyebrow 
            text={category}
            variant="background"
            color="text-white"
            bgColor="bg-primary"
          />
            </span>
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 ref={titleRef} className="text-lg md:text-xl font-bold mb-3 text-white leading-tight">
            {title}
          </h3>
          <p
            ref={descRef}
            className="text-sm text-white line-clamp-3 flex-1"
          >
            {description}
          </p>
          <span
            ref={linkRef}
            className="mt-4 text-primary text-lg uppercase font-mono font-medium inline-flex items-center gap-1"
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

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div
            ref={borderRef}
            className="w-full h-1 bg-primary origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;