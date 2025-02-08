import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface EyebrowProps {
  text: string;
  className?: string;
  color?: string;
  dashColor?: string;
  animationDuration?: number;
  bgColor?: string;
  padOn?: boolean;
}

const Eyebrow = ({
  text,
  className = "",
  color = "text-accent",
  dashColor = "text-accent",
  animationDuration = 2,
  bgColor = "bg-gradient-to-r from-primary to-accent",
  padOn = false,
}: EyebrowProps) => {
  const leftDashRef = useRef<HTMLSpanElement>(null);
  const rightDashRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const leftDash = leftDashRef.current;
    const rightDash = rightDashRef.current;

    if (!leftDash || !rightDash) return;

    // Create infinite rotation animations
    const createRotation = (target: HTMLElement) => {
      const tl = gsap.timeline({ repeat: -1 });
      for (let i = 0; i < 16; i++) {
        // 16 steps for 360 degrees
        tl.to(target, {
          rotation: i * 45,
          duration: 0,
          transformOrigin: "50% 50%",
        }).to(target, {
          duration: 0.1, // pause for 0.5 seconds
        });
      }
      return tl;
    };

    // Start animations
    const leftAnim = createRotation(leftDash);
    const rightAnim = createRotation(rightDash);

    // Cleanup
    return () => {
      leftAnim.kill();
      rightAnim.kill();
    };
  }, [animationDuration]);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        ref={leftDashRef}
        className={`font-mono text-lg font-bold ${dashColor}`}
        aria-hidden="true"
      >
        |
      </span>
      <span className={`text-sm uppercase tracking-wider font-medium ${color}`}>
        {text}
      </span>
      <span
        ref={rightDashRef}
        className={`inline-block font-mono text-lg font-bold ${dashColor}`}
        aria-hidden="true"
      >
        |
      </span>
    </div>
  );
};

export default Eyebrow;
