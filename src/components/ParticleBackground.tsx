
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    setCanvasDimensions();

    // Handle window resize
    window.addEventListener('resize', setCanvasDimensions);

    // Particle settings
    const particleCount = 100;
    const particleColor = ['#36e5fc', '#9b30ff', '#00ffd5'];
    const lineColor = 'rgba(255, 255, 255, 0.1)';
    const particleRadius = 1.5;
    const particleMaxSpeed = 0.5;
    const lineThreshold = 150;

    // Create particles
    const particles: {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * particleRadius + 0.5;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        directionX: Math.random() * particleMaxSpeed * 2 - particleMaxSpeed,
        directionY: Math.random() * particleMaxSpeed * 2 - particleMaxSpeed,
        size,
        color: particleColor[Math.floor(Math.random() * particleColor.length)],
      });
    }

    // Update particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Update position
        p.x += p.directionX;
        p.y += p.directionY;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.directionX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.directionY *= -1;

        // Draw lines between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
          );

          if (distance < lineThreshold) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.2;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(updateParticles);
    };

    // Start animation loop
    updateParticles();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
    />
  );
};

export default ParticleBackground;
