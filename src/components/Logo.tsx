import { Anton, Roboto } from "next/font/google";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import "@styles/animations.css";

interface LogoProps {
  landing?: boolean;
}

const anton = Anton({ weight: "400", subsets: ["latin-ext"] });

const Logo = ({ landing = false }: LogoProps) => {
  const normalLogo = (
    <div className="flex items-center justify-between min-xl:pl-10">
      <div className={`relative w-[3.5rem] 2xl:w-12 sm:w-10 aspect-square`}>
        <Image src="/logo.png" alt="" fill className="object-contain" />
      </div>
      <span
        className={`flex justify-center text-white text-4xl 2xl:text-3xl sm:text-2xl mx-2 select-none ${anton.className} transition-all`}
      >
        Demo Dental Clinic
      </span>
    </div>
  );

  const landingLogo = (
    <div
      className="flex items-center justify-center gap-4 overflow-hidden"
      style={{ animation: "logo 300ms" }}
    >
      <div
        className="flex items-center justify-between \
                    ml-6 bg-secondary-dark p-3 my-1 \
                    rounded-2xl shadow-2xl"
      >
        <div
          className={`relative w-24 2xl:w-20 xl:w-12 sm:w-10 aspect-square min-xl:mr-4`}
        >
          <Image src="/logo.png" alt="" fill className="object-contain" />
        </div>
        <div
          className={`flex justify-center text-white text-4xl 2xl:text-3xl sm:text-2xl mx-2 select-none ${anton.className} transition-all`}
        >
          <div className="flex flex-col gap-2 2xl:gap-0">
            <span>Demo</span>
            <span>Dental</span>
            <span>Clinic</span>
          </div>
        </div>
      </div>
      <a
        href="https://maps.app.goo.gl/bjWEA7GfCBErPg5X8"
        target="_blank"
        className="flex items-center h-full py-5 shadow-xl cursor-pointer logo bg-white/70 rounded-2xl hover:scale-95"
      >
        <span className="text-center text-gray-900 text-8xl 2xl:text-7xl">
          <MdLocationPin />
        </span>
        <img
          src="/location.jpg"
          draggable={false}
          onContextMenu={() => false}
          className="h-28 2xl:h-[90px] object-contain mx-3 p-2 bg-white rounded-md"
        />
      </a>
    </div>
  );

  return (
    <>
      <div className="xl:hidden">{landing ? landingLogo : normalLogo}</div>
      <div className="min-xl:hidden">{normalLogo}</div>
    </>
  );
};

export default Logo;
