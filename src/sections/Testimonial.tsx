import { BiRightArrowAlt, BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonial = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-[10vh] 2xl:gap-12">
      <h1 className="text-5xl 2xl:text-4xl md:text-3xl text-default-gradient">
        Our Patients' Words
      </h1>
      <div className="px-4 py-6 mx-auto text-center max-w-7xl 2xl:max-w-5xl lg:max-w-3xl md:max-w-xl sm:max-w-sm border-y-4 border-y-gray-700">
        <figure className="mx-auto">
          <span className="flex justify-center text-8xl 2xl:text-6xl text-primary-green">
            <BiSolidQuoteAltLeft />
          </span>
          <blockquote>
            <p className="px-16 text-3xl font-light text-gray-900 2xl:px-12 2xl:text-2xl md:text-base md:px-6 dark:text-white">
              I had a fantastic experience at Demo Dental Clinic. The staff was
              friendly, the facility was clean, and the dental care was
              top-notch. Highly recommended!
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="object-cover w-10 h-10 rounded-full 2xl:w-6 2xl:h-6"
              src="/profile.jpg"
            />
            <div className="flex items-center divide-x-2 divide-gray-700">
              <div className="pr-3 font-medium text-white text-xlp 2xl:text-base md:text-xs">
                Abebe Kebede
              </div>
              <div className="pl-3 font-light text-gray-400 2xl:text-sm md:text-xs">
                Demo Patient
              </div>
            </div>
          </figcaption>
        </figure>
        <div className="flex items-center justify-center gap-1 ">
          <a
            href=""
            className="my-6 text-lg text-gray-500 2xl:text-sm peer hover:text-green-500"
          >
            View more reviews
          </a>
          <span className="invisible text-green-500 peer-hover:visible">
            <BiRightArrowAlt />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
