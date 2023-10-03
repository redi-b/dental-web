import Image from "next/image";

interface DoctorInfoProps {
  name: string;
  specialty: string;
  imgSrc: string;
}

const DoctorInfo = ({ name, specialty, imgSrc }: DoctorInfoProps) => {
  return (
    <div className="flex flex-col items-center h-full gap-4 px-10 py-8 bg-green-500 justify-start rounded-xl">
      <div className="relative overflow-hidden bg-white rounded-full shadow-2xl w-44 h-44 lg:w-32 lg:h-32">
        <Image src={imgSrc} alt="Profile" fill className="object-cover" />
      </div>
      <span className="text-center">
        <p className="text-lg font-medium sm:text-sm">{name}</p>
        <p className="text-sm font-light text-gray-200 sm:text-xs">{specialty}</p>
      </span>
    </div>
  );
};

export default DoctorInfo;
