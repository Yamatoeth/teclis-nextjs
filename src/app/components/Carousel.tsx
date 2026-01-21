"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

interface FoamScanCarouselProps {
  images: string[];
  interval?: number; // autoplay interval in ms
}

export default function Carousel({
  images,
  interval = 5000,
}: FoamScanCarouselProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      autoplay={{ delay: interval, disableOnInteraction: false }}
      className="w-full h-96"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <Image
            src={src}
            alt={`FoamScan image ${index + 1}`}
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}