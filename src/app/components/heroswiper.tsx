"use client";
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
        <img
          src="/images/header/bg1.jpg"
          className="h-full w-full object-cover"
          alt="bg1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/header/bg2.jpg"
          className="h-full w-full object-cover"
          alt="bg2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/header/bg4.jpg"
          className="h-full w-full object-cover"
          alt="bg4"
        />
      </SwiperSlide>
    </Swiper>
  );
}
