import Image from "next/image";

interface DoctorInfoProps {
  name: string;
  specialty: string;
  imgSrc: string;
}

const DoctorInfo = ({ name, specialty, imgSrc }: DoctorInfoProps) => {
  return (
    <div className="flex flex-col items-center justify-start h-full gap-4 px-10 py-8 bg-green-500 rounded-xl">
      <div className="relative w-64 h-64 overflow-hidden bg-white rounded-full shadow-2xl 2xl:h-44 2xl:w-44 lg:w-32 lg:h-32">
        <Image src={imgSrc} alt="Profile" fill className="object-cover" />
      </div>
      <span className="text-center">
        <p className="text-2xl font-medium 2xl:text-lg sm:text-sm">{name}</p>
        <p className="text-lg font-light text-gray-200 2xl:text-sm sm:text-xs">
          {specialty}
        </p>
      </span>
    </div>
  );
};

export default DoctorInfo;
