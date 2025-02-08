import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface EyebrowProps {
  text: string;
  className?: string;
  color?: string;
  dashColor?: string;
  animationDuration?: number;
}

const Eyebrow = ({
  text,
  className = "",
  color = "text-accent",
  dashColor = "text-accent-DEFAULT",
  animationDuration = 2,
}: EyebrowProps) => {
  const leftDashRef = useRef<HTMLSpanElement>(null);
  const rightDashRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const leftDash = leftDashRef.current;
    const rightDash = rightDashRef.current;

    if (!leftDash || !rightDash) return;

    // Create infinite rotation animations
    const createRotation = (target: HTMLElement) => {
      return gsap.to(target, {
        rotation: 360,
        duration: animationDuration,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
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
        className={`inline-block font-mono text-lg font-bold ${dashColor}`}
        aria-hidden="true"
      >
        -
      </span>
      <span className={`text-sm uppercase tracking-wider font-medium ${color}`}>
        {text}
      </span>
      <span
        ref={rightDashRef}
        className={`inline-block font-mono text-lg font-bold ${dashColor}`}
        aria-hidden="true"
      >
        -
      </span>
    </div>
  );
};

export default Eyebrow;
