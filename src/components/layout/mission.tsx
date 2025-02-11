"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { createSplitText } from "@/app/anim/text-anim";
import Eyebrow from "../ui/eyebrow";

gsap.registerPlugin(ScrollTrigger);

const MissionStatement = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (!section || !text) return;

    // Create split text instance
    const splitter = createSplitText(text);
    const { words } = splitter.split({ types: ['words'] });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    // Set initial state
    gsap.set(words, {
      opacity: 0.05,
      y: 0,
    });

    // Animate
    tl.to(words, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.02,
      ease: "power4.out",
    });

    // Cleanup
    return () => {
      splitter.revert();
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <Eyebrow
            text="OUR MISSION"
            dashColor="text-accent-light"
            animationDuration={1.5}
            className="mb-4"
          />
          <h3 className="font-medium text-white" ref={textRef}>
            As a trusted global innovator, NTT DATA uses information technology
            to create new paradigms and values, which help contribute to a more
            affluent and harmonious society.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;