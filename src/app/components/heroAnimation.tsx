"use client";
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animations = ['float', 'floatReverse', 'float2', 'floatReverse2'];
    const particleCount = 200;

    function random(max: number): number {
      return Math.floor(Math.random() * max);
    }

    function createParticle() {
      const particle = document.createElement('span');
      particle.className = 'particle';

      const width = random(15) + 10;
      const speed = random(20) + 20;
      const delay = random(10) * 0.1;
      const opacity = (random(10) * 0.1).toString();
      const anim = animations[random(animations.length)];
      
      particle.style.height = width + 'px';
      particle.style.width = width + 'px';
      particle.style.left = random(100) + '%';
      particle.style.top = random(100) + '%';
      particle.style.opacity = opacity;
      particle.style.animationDelay = delay + 's';
      particle.style.animationDuration = speed + 's';
      particle.style.animationName = anim;
      particle.style.animationIterationCount = 'infinite';
      particle.style.animationFillMode = 'forwards';

      return particle;
    }

    const container = containerRef.current;
    if (container) {
      for (let i = 0; i < particleCount; i++) {
        container.appendChild(createParticle());
      }
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(180px); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-180px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(280px); }
        }
        @keyframes floatReverse2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-280px); }
        }
        .particle-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          filter: url('#goo');
          pointer-events: none;
          z-index: 0;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
        }
      `}</style>

      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"/>
            <feColorMatrix in="blur" mode="matrix" result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"/>
            <feBlend in="SourceGraphic" in2="goo"/>
          </filter>
        </defs>
      </svg>

      <div ref={containerRef} className="particle-background" />
    </>
  );
};

export default ParticleBackground;