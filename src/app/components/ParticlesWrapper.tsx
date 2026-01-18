"use client";

import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('./heroAnimation'), { 
  ssr: false 
});

export default function ParticlesWrapper() {
  return <ParticlesBackground />;
}
