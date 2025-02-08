"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Eyebrow from "../ui/eyebrow";

gsap.registerPlugin(ScrollTrigger);

const MissionStatement = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (!section || !text) return;

    const splitText = new SplitType(text, { types: "chars" });
    const chars = splitText.chars;

    gsap.set(chars, {
      opacity: 0.05,
      y: 0,
    });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.02,
      ease: "power4.out",
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      },
    });

    return () => {
      splitText.revert();
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
