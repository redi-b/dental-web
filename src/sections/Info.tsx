import { FaTooth } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import Image from "next/image";

const Info = () => {
  const checkIconClass =
    "text-4xl 2xl:text-3xl lg:text-2xl sm:text-xl bg-primary-green rounded-full p-0.5 text-white";

  return (
    <section className="flex justify-between w-full sm:flex-col body-container">
      <div className="relative overflow-hidden flex items-center justify-center w-full bg-primary-green min-h-[420px] bg-cover bg-center">
        <div className="absolute bottom-0 w-full h-full">
          <Image
            src="/tools.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute w-full h-full bg-black/40"></div>
        <div className="relative flex flex-col items-start gap-4 px-24 py-8 2xl:px-20 xs:px-12 md:px-16">
          <span className="text-gray-900 text-7xl 2xl:text-6xl lg:text-5xl">
            <FaTooth />
          </span>
          <span className="text-4xl font-medium 2xl:text-3xl lg:text-2xl md:text-xl">
            Quality Care with Affordable and Transparent Prices - Your Smile,
            Our Priority!
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <ul className="text-2xl 2xl:text-xl w-fit md:text-base">
          <li className="flex items-center gap-4 my-8">
            <span className={checkIconClass}>
              <BiCheck />
            </span>
            <span className="">Routine Check-Ups</span>
          </li>
          <li className="flex items-center gap-4 my-8">
            <span className={checkIconClass}>
              <BiCheck />
            </span>
            <span className="">Cleanings</span>
          </li>
          <li className="flex items-center gap-4 my-8">
            <span className={checkIconClass}>
              <BiCheck />
            </span>
            <span className="">Fillings</span>
          </li>
          <li className="flex items-center gap-4 my-8">
            <span className={checkIconClass}>
              <BiCheck />
            </span>
            <span className="">Braces and Invisalign</span>
          </li>
          <li className="flex items-center gap-4 my-8">
            <span className={checkIconClass}>
              <BiCheck />
            </span>
            <span className="">Cosmetic Procedures</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Info;
