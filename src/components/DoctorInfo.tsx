import Image from "next/image";

interface DoctorInfoProps {
  name: string;
  specialty: string;
  imgSrc: string;
}

const DoctorInfo = ({ name, specialty, imgSrc }: DoctorInfoProps) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-evenly">
      <div className="relative bg-white shadow-2xl w-44 h-44 lg:w-32 lg:h-32 rounded-full overflow-hidden">
        <Image src={imgSrc} alt="Profile" fill className="object-cover" />
      </div>
      <span className="text-center">
        <p className="text-lg sm:text-sm font-medium">{name}</p>
        <p className="text-gray-200 font-light text-sm sm:text-xs">{specialty}</p>
      </span>
    </div>
  );
};

export default DoctorInfo;
