"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function HeroSwiper() {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="absolute inset-0 h-full w-full"
    >
      <SwiperSlide>
        <div className="relative h-full w-full">
          <Image
            src="/images/header/bg1.avif"
            alt="bg1"
            fill
            priority
            quality={50}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <Image
            src="/images/header/bg2.avif"
            alt="bg2"
            fill
            quality={50}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <Image
            src="/images/header/bg4.avif"
            alt="bg4"
            fill
            quality={50}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
