import Image from "next/image";

const Header = () => {
  return (
    <div className="grid grid-cols-[40%_60%] lg:grid-cols-1 lg:py-16">
      <div className="relative order-last w-full h-screen pb-4 pl-4 overflow-hidden bg-white rounded-bl-full lg:hidden">
        <div
          className="w-full h-full bg-right bg-no-repeat bg-cover rounded-bl-full"
          style={{
            backgroundImage:
              "linear-gradient(to top, #00000000 40%, #0000006a 100%), url('/smile-2.png')",
          }}
        ></div>
      </div>
      <div className="grid items-center justify-items-center lg:gap-6 min-lg:pl-4">
        <div></div>
        <div className="w-full">
          <div className="p-2 mx-auto bg-white rounded-full w-fit min-lg:hidden">
            <div className="relative w-64 h-64 overflow-hidden bg-white rounded-full md:w-56 md:h-56">
              <Image
                src="/smile-2.png"
                alt=""
                fill
                className="object-cover object-center"
              />
              <div
                className="absolute w-full h-full"
                style={{
                  background:
                    "linear-gradient(to left, #00000000 0%, #00000040 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 self-end lg:self-start h-fit rounded-[80px] md:rounded-[50px] px-12 py-8 pt-12 mx-4 max-w-lg bg-white/80 text-black shadow-xl backdrop-blur-md">
          <span className="text-4xl font-medium break-normal xl:text-3xl sm:text-2xl">
            Creating beautiful smiles, one patient at a time!
          </span>
          <span className="text-md md:text-sm">
            At Sayan Dental Clinic, we are committed to providing exceptional
            dental care that prioritizes the wellbeing of our patients. Book an
            appointment now and have a healthy smile!
          </span>
          <button className="self-center px-4 py-3 text-sm text-white rounded-full appointment-modal-show bg-secondary-green hover:bg-secondary-green/80 w-fit">
            Book Now
          </button>
        </div>
        <div className="h-fit">
          CALL US AT <a href="tel:+251900000000">+251 90 000 0000</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
