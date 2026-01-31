"use client";

import { useState, ReactNode } from "react";
import SplashScreen from "@/components/ui/splash-screen";

interface HomeClientProps {
  title: string;
  subtitle: string;
  locale: string;
  children: ReactNode;
}

export default function HomeClient({ title, subtitle, locale, children }: HomeClientProps) {
  const [showSplash, setShowSplash] = useState(true);

  const handleEnterApp = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <SplashScreen 
        onEnter={handleEnterApp} 
        title={title} 
        subtitle={subtitle}
      />
    );
  }

  return <>{children}</>;
}
