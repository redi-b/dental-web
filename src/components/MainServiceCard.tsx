import Image from "next/image";
import Link from "next/link";

interface MainServiceCardProps {
  title: string;
  info: string;
  imgSrc: string;
  link: string;
}

const MainServiceCard = ({ title, info, imgSrc, link }: MainServiceCardProps) => {
  return (
    <div className="w-full max-w-[42rem] 2xl:max-w-md sm:max-w-sm xs:max-w-xs overflow-hidden text-black bg-white shadow-lg select-none">
      <div className="relative h-[20rem] 2xl:h-[12rem] md:h-40 sm:h-32">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover"
          draggable={false}
        />
      </div>
      <div className="flex flex-col px-6 py-4 gap-2 lg:gap-0.5">
        <div className="px-0.5 text-2xl 2xl:text-lg lg:text-base font-medium">
          {title}
        </div>
        <p className="px-0.5 text-lg 2xl:text-sm lg:text-xs font-light text-gray-700">
          {info}
        </p>
        <Link
          href={link}
          className="px-4 py-3 mt-2 text-sm text-gray-700 transition-all bg-gray-200 rounded-full w-fit 2xl:text-xs hover:bg-green-500 hover:text-gray-50"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default MainServiceCard;
