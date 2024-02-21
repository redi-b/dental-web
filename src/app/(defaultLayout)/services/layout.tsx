"use client";

import { usePathname } from "next/navigation";
import CustomButton from "@components/CustomButton";
import { Services } from "@constants/constants";
import Connect from "@sections/Connect";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const titleFont = Open_Sans({ weight: "800", subsets: ["latin"] });

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const [activeLink, setActiveLink] = useState(-1);

  const dragRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(dragRef);

  useEffect(() => {
    let services = Services.map((service) => service.generateLink());
    let active = services.indexOf(pathName);

    setActiveLink(active);
  });

  return (
    <div className="relative">
      <div className="relative w-full h-36 xxs:h-40">
        <Image src="/smile.jpg" alt="" fill className="object-cover" />
        <div className="absolute w-full h-full bg-black/50"></div>
        <div className="absolute flex items-center justify-between w-full h-full gap-4 px-36 lg:px-24 md:px-12 sm:px-6 sm:flex-col sm:justify-center">
          <span
            className={`text-white text-4xl sm:text-3xl ${titleFont.className}`}
          >
            Our Services
          </span>
          <a
            href="tel:+251900000000"
            className="px-12 py-3 text-base bg-secondary-green 2xl:text-sm sm:px-6"
          >
            CALL US AT +251 90 000 0000
          </a>
        </div>
      </div>
      <div className="flex justify-between gap-6 px-8 py-8 lg:px-6 md:px-0 md:py-0 md:flex-col">
        <div className="sticky top-28 2xl:top-24 flex flex-col w-full max-w-[16rem] lg:max-w-[12rem] md:max-w-none h-[85vh] md:hidden">
          <Link
            href="/services"
            className={`p-4 text-lg rounded-md 2xl:text-base md:w-full ${
              activeLink == -1 ? "bg-primary-green" : "hover:text-primary-green"
            }`}
          >
            All Services
          </Link>
          <div className="flex flex-col px-3 my-2 overflow-y-auto custom-scrollbar md:hidden">
            {Services.map((service, index) => (
              <>
                <Link
                  href={service.generateLink()}
                  className={`p-4 rounded-md 2xl:text-sm ${
                    activeLink == index
                      ? "bg-primary-green"
                      : "hover:text-primary-green"
                  }`}
                >
                  {service.name}
                </Link>
              </>
            ))}
          </div>
        </div>
        <div className="sticky z-10 overflow-hidden shadow-2xl select-none sticky-top bg-primary-dark min-md:hidden">
          <div
            className="flex overflow-x-auto divide-x divide-gray-500 no-scrollbar"
            ref={dragRef}
            {...events}
          >
            <Link
              href="/services"
              className={`flex items-center justify-center p-4 text-xs text-center whitespace-nowrap ${
                activeLink == -1
                  ? "bg-primary-green"
                  : "hover:text-primary-green"
              } transition-all duration-200`}
            >
              All Services
            </Link>
            {Services.map((service, index) => (
              <Link
                key={index}
                href={service.generateLink()}
                className={`flex items-center justify-center p-4 text-center text-xs whitespace-nowrap ${
                  activeLink == index
                    ? "bg-primary-green"
                    : "hover:text-primary-green"
                } transition-all duration-200`}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full md:px-8">{children}</div>
      </div>
      <Connect />
    </div>
  );
};

export default ServicesLayout;
