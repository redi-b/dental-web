import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

interface MainServiceCardProps {
  title: string;
  info: string;
  imgSrc: string;
  link: string;
}

const MainServiceCard = ({
  title,
  info,
  imgSrc,
  link,
}: MainServiceCardProps) => {
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
        <div className="text-2xl 2xl:text-lg lg:text-base font-medium">
          {title}
        </div>
        <p className="text-lg 2xl:text-sm lg:text-xs font-light text-gray-700">
          {info}
        </p>
        <Link
          href={link}
          className="flex items-center w-fit gap-2 py-3 mt-1 text-sm text-gray-900 2xl:text-xs font-light \
           hover:bg-primary-green hover:text-white hover:gap-3 transition-all duration-300 rounded-full bg-gray-200 px-3"
        >
          <span>Read more</span>
          <span className="text-sm">
            <BsArrowRightCircleFill />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MainServiceCard;
