// components/Particles.js

import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuração ajustada para maior visibilidade
    const particleCount = 70;
    const particleProps = {
      radius: { min: 1.2, max: 2.5 }, // partículas maiores
      speed: { min: 0.1, max: 0.6 },
      primaryColor: '#88d3ce',       // ciano brilhante
      secondaryColor: '#6e45e2',     // roxo vibrante
      connectDistance: 120,
      connectionOpacity: 0.25,       // conexões mais visíveis
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * particleProps.speed.max;
        this.vy = (Math.random() - 0.5) * particleProps.speed.max;
        this.radius = Math.random() * (particleProps.radius.max - particleProps.radius.min) + particleProps.radius.min;
        // Cores alternadas para mais dinamismo
        this.color = Math.random() > 0.5 ? particleProps.primaryColor : particleProps.secondaryColor;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      // Fundo escuro suave (não totalmente preto para realçar partículas)
      ctx.fillStyle = '#0f0c14';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => p.update());
      particles.forEach(p => p.draw());

      // Conexões mais visíveis
      ctx.strokeStyle = `rgba(104, 69, 226, ${particleProps.connectionOpacity})`;
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < particleProps.connectDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        pointerEvents: 'none',
        background: '#0f0c14',
      }}
    />
  );
}
