"use client";

import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface FoamScanCarouselProps {
  images: string[];
  interval?: number; // intervalle auto en ms
}

export default function Carousel({
  images,
  interval = 5000,
}: FoamScanCarouselProps) {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  useEffect(() => {
    const sliderInstance: KeenSliderInstance | null = instanceRef.current;
    if (!sliderInstance) return;

    const startAutoplay = () => {
      stopAutoplay();
      timer.current = setInterval(() => {
        sliderInstance.next();
      }, interval);
    };

    const stopAutoplay = () => {
      if (timer.current) clearInterval(timer.current);
    };

    startAutoplay();

    sliderInstance.on("dragStarted", stopAutoplay);
    sliderInstance.on("dragEnded", startAutoplay);

    return () => {
      stopAutoplay();
      sliderInstance.destroy();
    };
  }, [instanceRef, interval]);

  return (
    <div ref={sliderRef} className="keen-slider w-full h-96">
      {images.map((src, index) => (
        <div
          key={index}
          className="keen-slider__slide flex items-center justify-center"
        >
          <Image
            src={src}
            alt={`FoamScan image ${index + 1}`}
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}