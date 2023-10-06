"use client";

import ServiceCard from "@components/ServiceCard";
import { Services } from "@constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "@styles/swiper.css";

const ServicesOverview = () => {
  return (
    <div className="flex flex-col justify-center gap-12 px-12 2xl:gap-6 body-container min-xl:items-center lg:px-2">
      <h1 className="text-6xl text-center 2xl:text-4xl md:text-3xl text-default-gradient">
        Services Overview
      </h1>
      <div className="relative w-[85vw] px-10 py-4 sm:px-4">
        <div className="min-lg:px-4">
          <Swiper
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: true,
            //   pauseOnMouseEnter: true,
            // }}
            spaceBetween={2}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              767: {
                slidesPerView: 2,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              slideShadows: false,
              scale: 0.8,
            }}
            modules={[Navigation, Pagination, EffectCoverflow]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              enabled: true,
            }}
            pagination={{
              el: ".swiper-pagination",
              dynamicBullets: true,
              clickable: true,
            }}
            loop
          >
            {Services.map((service) => (
              <SwiperSlide key={service.name}>
                <div className="flex justify-center">
                  <ServiceCard
                    title={service.name}
                    info={service.info}
                    imgSrc={service.image}
                    link={service.link}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between">
          <button className="swiper-button-prev z-10 text-5xl 2xl:text-4xl sm:text-[28px] rounded-full bg-primary-green hover:opacity-75">
            <BiCaretLeft />
          </button>
          <button className="swiper-button-next z-10 text-5xl 2xl:text-4xl sm:text-[28px] rounded-full bg-primary-green hover:opacity-75">
            <BiCaretRight />
          </button>
        </div>
        <div
          className="swiper-pagination"
          style={{ position: "absolute", bottom: "-8px" }}
        ></div>
      </div>
    </div>
  );
};

export default ServicesOverview;
