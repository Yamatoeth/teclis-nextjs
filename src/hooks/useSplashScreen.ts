"use client";

import { useState } from "react";

interface UseSplashScreenOptions {
  /**
   * Whether to show the splash screen on first visit
   */
  enabled?: boolean;
  
  /**
   * Key for localStorage to remember if user has visited
   */
  storageKey?: string;
  
  /**
   * Show splash screen every visit (ignore localStorage)
   */
  showAlways?: boolean;
}

export function useSplashScreen({
  enabled = true,
  storageKey = "hasVisited",
  showAlways = false,
}: UseSplashScreenOptions = {}) {
  const [showSplash, setShowSplash] = useState(() => {
    if (!enabled) {
      return false;
    }

    if (showAlways) {
      return true;
    }

    if (typeof window === "undefined") {
      return false;
    }

    return !localStorage.getItem(storageKey);
  });

  const handleEnterSite = () => {
    setShowSplash(false);
    
    if (!showAlways) {
      localStorage.setItem(storageKey, "true");
    }
  };

  return {
    showSplash,
    handleEnterSite,
  };
}