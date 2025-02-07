import React, { useEffect, useRef } from 'react';

interface MouseTrailProps {
  className?: string;
  color?: string;
  particleCount?: number;
  particleSize?: number;
  trailLength?: number;
}

interface ParticleType {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  history: { x: number; y: number; }[];
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const MouseTrail = ({
  className = '',
  color = 'rgba(0, 41, 107, 0.1)', // Default royal blue from theme
  particleCount = 15,
  particleSize = 3,
  trailLength = 20,
}: MouseTrailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<ParticleType[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: ParticleType[] = [];

    // Set canvas size based on container
    const setCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    class Particle implements ParticleType {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      history: { x: number; y: number; }[];

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = particleSize;
        this.baseX = x;
        this.baseY = y;
        this.density = Math.random() * 30 + 1;
        this.history = [];
      }

      update() {
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 100;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x += directionX;
          this.y += directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }

        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > trailLength) {
          this.history.shift();
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.history.length < 2) return;
        
        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        
        for (let i = 1; i < this.history.length; i++) {
          const point = this.history[i];
          ctx.lineTo(point.x, point.y);
        }
        
        ctx.strokeStyle = color;
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      frameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    // Initialize
    setCanvasSize();
    init();
    animate();

    // Add event listeners to container
    container.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [color, particleCount, particleSize, trailLength]);

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
};

export default MouseTrail;