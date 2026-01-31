"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface SplashScreenProps {
  onEnter: () => void;
  title: string;
  subtitle?: string;
}

export default function SplashScreen({ onEnter, title, subtitle }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], { opacity: 0, y: 50 });
    gsap.set([leftPanelRef.current, rightPanelRef.current], { x: 0 });

    // Initial animation - title and button fade in
    tl.to(containerRef.current, {
      opacity: 1,
      duration: 0.5,
    })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }, 0.3);

    // Add subtitle animation if it exists
    if (subtitle && subtitleRef.current) {
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.8");
    }

    tl.to(
      buttonRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Animate title characters after a delay
    const animateChars = () => {
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { 
            opacity: 0, 
            y: 30, 
            rotateX: -90,
            transformOrigin: "50% 50% -50px"
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: {
              amount: 0.8,
              from: "center"
            },
            ease: "back.out(1.7)",
            delay: 0.5,
          }
        );
      }
    };

    // Delay character animation until title is visible
    setTimeout(animateChars, 800);

    return () => {
      tl.kill();
    };
  }, [subtitle]);

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);

    const tl = gsap.timeline({
      onComplete: onEnter,
    });

    // Fade out title, subtitle and button
    const elementsToFade = [titleRef.current, buttonRef.current];
    if (subtitleRef.current) elementsToFade.push(subtitleRef.current);

    tl.to(elementsToFade, {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power2.inOut",
    })
      // Split animation
      .to(
        leftPanelRef.current,
        {
          x: "-100%",
          duration: 1.2,
          ease: "power3.inOut",
        },
        "-=0.2"
      )
      .to(
        rightPanelRef.current,
        {
          x: "100%",
          duration: 1.2,
          ease: "power3.inOut",
        },
        "-=1.2"
      );
  };

  // Split title into characters for animation
  const splitTitle = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      style={{ opacity: 0 }}
    >
      {/* Left Panel */}
      <div
        ref={leftPanelRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 z-10"
      />

      {/* Right Panel */}
      <div
        ref={rightPanelRef}
        className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-slate-900 via-slate-800 to-slate-900 z-10"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        {/* Animated Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-8 tracking-tight leading-none max-w-6xl px-4"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            perspective: "1000px",
          }}
        >
          <div className="bg-linear-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
            {splitTitle(title)}
          </div>
        </h1>

        {/* Subtitle - Optional */}
        {subtitle && (
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/60 text-center mb-12 max-w-2xl px-4"
          >
            {subtitle}
          </p>
        )}

        {/* Enter Button */}
        <button
          ref={buttonRef}
          onClick={handleEnter}
          disabled={isExiting}
          className="group relative px-12 py-5 text-xl font-medium text-white border-2 border-white/30 rounded-full 
                     hover:border-emerald-400/60 transition-all duration-500 backdrop-blur-sm
                     hover:bg-linear-to-r hover:from-emerald-500/10 hover:to-blue-500/10 
                     focus:outline-none focus:ring-2 focus:ring-emerald-400/30
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:shadow-lg hover:shadow-emerald-400/20"
        >
          <span className="relative z-10 flex items-center gap-3">
            <span className="tracking-wide">Enter</span>
            <svg
              className="w-6 h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-400/10 to-blue-400/10 
                          opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
        </button>

        {/* Subtle background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-60px_60px]" />
          </div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-l from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  );
}