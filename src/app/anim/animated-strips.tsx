import React, { useEffect, useRef } from 'react';

interface EqualizerProps {
  strips?: number;
  gradientStart?: string;
  gradientEnd?: string;
  stripWidth?: number;
  stripGap?: number;
  className?: string;
}

const AudioEqualizer: React.FC<EqualizerProps> = ({
  strips = 20,
  gradientStart = '#000000',
  gradientEnd = '#00000000',
  stripWidth = 60,
  stripGap = 10,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const stripHeights = useRef<number[]>(Array(strips).fill(0));
  const targetHeights = useRef<number[]>(Array(strips).fill(0));
  const scrollVelocity = useRef<number>(0);
  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const lastTime = useRef<number>(typeof window !== 'undefined' ? performance.now() : 0);

  // Get frequency-based max height multiplier
  const getFrequencyMultiplier = (index: number, total: number): number => {
    const position = index / total;
    
    // Bass frequencies (center)
    if (position > 0.4 && position < 0.6) {
      return 1;
    }
    // Mid frequencies
    else if (position > 0.2 && position < 0.8) {
      return 0.7;
    }
    // High frequencies (edges)
    else {
      return 0.5;
    }
  };

  // Get randomized target height based on frequency range
  const getTargetHeight = (index: number, total: number, velocity: number): number => {
    const freqMultiplier = getFrequencyMultiplier(index, total);
    const baseHeight = velocity * 400 * freqMultiplier;
    const randomFactor = 0.8 + Math.random() * 0.4; // 80-120% variation
    return baseHeight * randomFactor;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    // Calculate scroll velocity
    const handleScroll = () => {
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime.current;
      const currentScrollY = window.scrollY;
      
      if (deltaTime > 0) {
        scrollVelocity.current = Math.abs(currentScrollY - lastScrollY.current) / deltaTime;
      }
      
      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;

      // Update target heights based on new velocity
      targetHeights.current = stripHeights.current.map((_, i) => 
        getTargetHeight(i, strips, scrollVelocity.current)
      );
    };

    // Create gradient
    const createGradient = (ctx: CanvasRenderingContext2D, height: number): CanvasGradient => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, gradientEnd);
      gradient.addColorStop(1, gradientStart);
      return gradient;
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const totalWidth = (stripWidth + stripGap) * strips;
      const startX = (canvas.width - totalWidth) / 2;

      // Update heights with easing
      stripHeights.current = stripHeights.current.map((height, i) => {
        const target = targetHeights.current[i];
        const easing = 0.15; // Smooth easing factor
        return height + (target - height) * easing;
      });

      // Draw strips
      stripHeights.current.forEach((height, i) => {
        const x = startX + i * (stripWidth + stripGap);
        const gradient = createGradient(ctx, height);
        
        // Always draw from bottom
        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - height, stripWidth, height);
      });

      // Decay velocity and update target heights
      scrollVelocity.current *= 0.95;
      targetHeights.current = targetHeights.current.map((height) => 
        Math.max(0, height * 0.95)
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    // Setup
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', resize);
    resize();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [strips, gradientStart, gradientEnd, stripWidth, stripGap]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 right-0 w-1/2 h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default AudioEqualizer;