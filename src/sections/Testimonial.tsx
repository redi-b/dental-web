import { BiRightArrowAlt, BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonial = () => {
  return (
    <section className="pt-16 flex flex-col gap-12 items-center my-10">
        <h1 className="text-4xl md:text-3xl text-default-gradient">Our Patients' Words</h1>
      <div className="px-4 py-6 max-w-5xl lg:max-w-3xl md:max-w-xl sm:max-w-sm mx-auto text-center border-y-4 border-y-gray-700">
        <figure className="mx-auto">
          <span className="flex justify-center text-6xl text-primary-green">
            <BiSolidQuoteAltLeft />
          </span>
          <blockquote>
            <p className="text-2xl md:text-base font-light text-gray-900 px-12 md:px-6 dark:text-white">
              I had a fantastic experience at Sayan Dental Clinic. The staff
              was friendly, the facility was clean, and the dental care was
              top-notch. Highly recommended!
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="object-cover w-6 h-6 rounded-full"
              src="/profile.jpg"
            />
            <div className="flex items-center divide-x-2 divide-gray-700">
              <div className="pr-3 font-medium md:text-xs text-white">Abebe Kebede</div>
              <div className="pl-3 text-sm md:text-xs font-light text-gray-400">
                Sayan Patient
              </div>
            </div>
          </figcaption>
        </figure>
        <div className="flex items-center justify-center gap-1 ">
          <a href="" className="my-6 text-gray-500 text-sm peer hover:text-green-500">
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
