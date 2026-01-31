"use client";

import { useState, useEffect } from "react";

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
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setShowSplash(false);
      return;
    }

    if (showAlways) {
      setShowSplash(true);
      return;
    }

    // Check if user has visited before
    const hasVisited = localStorage.getItem(storageKey);
    if (!hasVisited) {
      setShowSplash(true);
    }
  }, [enabled, storageKey, showAlways]);

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