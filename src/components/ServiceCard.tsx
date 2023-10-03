import Image from "next/image";

interface ServiceCardProps {
  title: string;
  info: string;
  imgSrc: string;
  link: string;
}

const ServiceCard = ({ title, info, imgSrc, link }: ServiceCardProps) => {
  return (
    <div className="w-full max-w-md sm:max-w-xs overflow-hidden text-black bg-white rounded-md shadow-lg">
      <div className="relative h-72 sm:h-64">
        <Image src={imgSrc} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col px-6 py-4 gap-2 lg:gap-0.5">
        <div className="px-0.5 text-xl lg:text-lg font-medium">{title}</div>
        <p className="px-0.5 text-base lg:text-sm text-gray-700">{info}</p>
        <a
          href={link}
          className="mt-2 px-4 py-3 w-fit text-sm lg:text-xs font-medium text-gray-700 transition-all bg-gray-200 rounded-full hover:bg-green-500 hover:text-gray-50"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
