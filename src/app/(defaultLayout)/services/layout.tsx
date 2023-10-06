"use client";

import { usePathname } from "next/navigation";
import CustomButton from "@components/CustomButton";
import { Services } from "@constants/constants";
import Connect from "@sections/Connect";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const titleFont = Open_Sans({ weight: "800", subsets: ["latin"] });

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const [activeLink, setActiveLink] = useState(-1);

  useEffect(() => {
    let services = Services.map((service) => service.generateLink());
    let active = services.indexOf(pathName);

    setActiveLink(active);
  });

  return (
    <div>
      <div className="relative w-full h-36">
        <Image src="/smile.jpg" alt="" fill className="object-cover" />
        <div className="absolute w-full h-full bg-black/50"></div>
        <div className="absolute flex items-center justify-between w-full h-full gap-4 px-36 lg:px-24 md:px-12 sm:flex-col sm:justify-center">
          <span className={`text-white text-4xl ${titleFont.className}`}>
            Our Services
          </span>
          <CustomButton
            text="CALL US - +251 90 000 0000"
            classes="text-base 2xl:text-sm px-12"
          />
        </div>
      </div>
      <div className="relative flex justify-between gap-6 px-12 py-8 lg:px-6 md:flex-col">
        <div className="sticky flex flex-col w-full max-w-[16rem] lg:max-w-[12rem] md:max-w-none">
          <Link
            href="/services"
            className={`p-4 text-lg 2xl:text-base md:w-full ${
              activeLink == -1 && "bg-primary-green"
            }`}
          >
            All Services
          </Link>
          <div className="flex flex-col px-3 md:hidden">
            {Services.map((service, index) => (
              <Link
                href={service.generateLink()}
                className={`p-4 2xl:text-sm ${
                  activeLink == index && "bg-primary-green"
                }`}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        {children}
      </div>
      <Connect />
    </div>
  );
};

export default ServicesLayout;
