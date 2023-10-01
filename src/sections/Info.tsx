import { FaTooth } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import Image from "next/image";

const Info = () => {
  const checkIconClass =
    "text-3xl lg:text-2xl sm:text-xl bg-primary-green rounded-full p-0.5 text-white";

  return (
    <section className="flex sm:flex-col justify-between h-[90vh] lg:h-[75vh] sm:h-auto w-full">
      <div
        className="relative overflow-hidden flex items-center justify-center w-full bg-primary-green min-h-[420px] bg-cover bg-center"
      >
        <div className="absolute bottom-0 w-full h-full">
          <Image src="/tools.png" alt="" fill className="object-cover object-center"/>
        </div>
        <div className="absolute w-full h-full bg-black/40"></div>
        <div className="relative flex flex-col items-start gap-4 px-20 py-8 xs:px-12 md:px-16">
          <span className="text-6xl text-gray-900 lg:text-5xl">
            <FaTooth />
          </span>
          <span className="text-3xl font-medium lg:text-2xl md:text-xl">
            Quality Care with Affordable and Transparent Prices - Your Smile,
            Our Priority!
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <ul className="text-xl w-fit md:text-base">
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
