import Image from "next/image";

interface ServiceCardProps {
  title: string;
  info: string;
  imgSrc: string;
  link: string;
}

const ServiceCard = ({ title, info, imgSrc, link }: ServiceCardProps) => {
  return (
    <div className="w-full max-w-[42rem] 2xl:max-w-md sm:max-w-sm xs:max-w-xs overflow-hidden text-black bg-white rounded-md shadow-lg select-none">
      <div className="relative h-[28rem] 2xl:h-[16rem] md:h-64 sm:h-56">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover"
          draggable={false}
        />
      </div>
      <div className="flex flex-col px-6 py-4 gap-2 lg:gap-0.5">
        <div className="px-0.5 text-3xl 2xl:text-xl lg:text-lg font-medium">
          {title}
        </div>
        <p className="px-0.5 text-xl 2xl:text-base lg:text-sm font-light text-gray-700">
          {info}
        </p>
        <a
          href={link}
          className="px-4 py-3 mt-2 text-base text-gray-700 transition-all bg-gray-200 rounded-full w-fit 2xl:text-sm lg:text-xs hover:bg-green-500 hover:text-gray-50"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
