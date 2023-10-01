import { Anton } from "next/font/google";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import "@styles/animations.css";

interface LogoProps {
  landing?: boolean;
}

const anton = Anton({ weight: "400", subsets: ["latin"] });

const Logo = ({ landing = false }: LogoProps) => {
  const normalLogo = (
    <div className="flex items-center justify-between min-xl:pl-10">
      <div className={`relative w-12 sm:w-10 aspect-square`}>
        <Image src="/logo.png" alt="" fill className="object-contain" />
      </div>
      <span
        className={`flex justify-center text-white text-3xl sm:text-2xl mx-2 select-none ${anton.className} transition-all`}
      >
        Sayan Dental Clinic
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
          className={`relative w-12 sm:w-10 aspect-square min-xl:w-20 min-xl:mr-4`}
        >
          <Image src="/logo.png" alt="" fill className="object-contain" />
        </div>
        <div
          className={`flex justify-center text-white text-3xl sm:text-2xl mx-2 select-none ${anton.className} transition-all`}
        >
          <span className="">
            Sayan <br /> Dental <br /> Clinic
          </span>
        </div>
      </div>
      <a
        href="https://maps.app.goo.gl/Demv1oe8AXzSUj2f8"
        target="_blank"
        className="flex items-center h-full py-5 shadow-xl cursor-pointer logo bg-white/70 rounded-2xl hover:scale-95"
      >
        <span className="text-center text-black text-7xl">
          <IoLocationSharp />
        </span>
        <img
          src="/location.jpg"
          className="h-[90px] object-contain mx-3 p-2 bg-white rounded-md"
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
