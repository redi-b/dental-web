"use client";

import ServiceCard from "@components/ServiceCard";
import { Services } from "@constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

const Test = () => {
  return (
    <div className="flex flex-col gap-6 px-12 sm:px-2 pt-16">
      <h1 className="text-4xl text-center md:text-3xl text-default-gradient">
        Services Overview
      </h1>
      <div className="relative p-4">
        <Swiper
          spaceBetween={2}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            767: { slidesPerView: 2 },
            1023: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 0,
            modifier: 1.5,
            slideShadows: false,
            scale: 0.75,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            enabled: true,
          }}
          pagination={{
            el: ".swiper-pagination",
            bulletClass: "swiper-bullet",
            bulletActiveClass: "swiper-bullet-active",
            clickable: true,
          }}
          rewind
          className=""
        >
          {Services.map((service) => (
            <SwiperSlide key={service.service}>
              <div className="flex justify-center">
                <ServiceCard
                  title={service.service}
                  info={service.info}
                  imgSrc="/smile.jpg"
                  // imgSrc={service.image}
                  link=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between">
          <button className="swiper-button-prev z-10 text-4xl md:text-[28px] rounded-full bg-primary-green">
            <BiCaretLeft />
          </button>
          <button className="swiper-button-next z-10 text-4xl md:text-[28px] rounded-full bg-primary-green">
            <BiCaretRight />
          </button>
        </div>
        <div className="absolute -bottom-2 items-end left-0 right-0 flex justify-center gap-1 swiper-pagination z-20"></div>
      </div>
    </div>
  );
};

export default Test;
