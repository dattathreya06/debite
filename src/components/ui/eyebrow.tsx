import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  text: string;
  variant?: "default" | "background";
  className?: string;
  color?: string;
  dashColor?: string;
  animationDuration?: number;
  bgColor?: string;
  padOn?: boolean;
}

const Eyebrow = ({
  text,
  variant = "default",
  className = "",
  color = "text-accent",
  dashColor = "text-accent",
  animationDuration = 2,
  bgColor = "bg-accent/10",
  padOn = false,
}: EyebrowProps) => {
  const leftDashRef = useRef<HTMLSpanElement>(null);
  const rightDashRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (variant === "default") {
      const leftDash = leftDashRef.current;
      const rightDash = rightDashRef.current;

      if (!leftDash || !rightDash) return;

      // Create infinite rotation animations
      const createRotation = (target: HTMLElement) => {
        const tl = gsap.timeline({ repeat: -1 });
        for (let i = 0; i < 16; i++) {
          tl.to(target, {
            rotation: i * 45,
            duration: 0,
            transformOrigin: "50% 50%",
          }).to(target, {
            duration: 0.1,
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
    }
  }, [animationDuration, variant]);

  if (variant === "background") {
    return (
      <div className={cn("flex items-center", className)}>
        <span 
          className={cn(
            "inline-block px-3 py-1 text-sm font-medium uppercase tracking-wide",
            bgColor,
            color
          )}
        >
          {text}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        ref={leftDashRef}
        className={cn("font-mono text-lg font-bold", dashColor)}
        aria-hidden="true"
      >
        |
      </span>
      <span className={cn("text-sm uppercase tracking-wide font-medium", color)}>
        {text}
      </span>
      <span
        ref={rightDashRef}
        className={cn("inline-block font-mono text-lg font-bold", dashColor)}
        aria-hidden="true"
      >
        |
      </span>
    </div>
  );
};

export default Eyebrow;