import CustomButton from "@components/CustomButton";
import Connect from "@sections/Connect";
import React from "react";

const ContactPage = () => {
  const inputStyles =
    "text-base 2xl:text-sm px-4 py-4 2xl:py-3 rounded-lg w-full bg-gray-600 outline-none \
     border-2 border-gray-500 transition-all duration-300 focus:border-primary-green";

  return (
    <>
      <div className="flex sm:flex-col items-center justify-evenly w-full min-md:min-h-[85vh] p-6 sm:gap-6 md:py-12 ">
        <div className="flex flex-col items-start justify-between w-full max-w-lg gap-6 font-light 2xl:max-w-md">
          <h1 className="text-5xl font-bold 2xl:text-4xl text-default-gradient sm:self-center">
            Contact Us
          </h1>
          <p className="text-xl 2xl:text-lg md:text-base sm:text-sm">
            We are eager to hear from you and play a part in enhancing your oral
            well-being. If you have any inquiries or would like to reach out to
            us, please don't hesitate to contact us. Our dedicated team will
            respond promptly to address your concerns or assist with scheduling
            an appointment.
          </p>
          <div className="flex flex-col gap-0.5 text-lg 2xl:text-sm sm:text-xs">
            <span className="">
              MB Business Center, 2nd Floor <br /> Chad Street St Lideta Mary Church
            </span>
            <span className="">+2519 00 000 0000</span>
            <span className="">demodental@example.com</span>
          </div>
        </div>
        <form
          className="flex flex-col items-center w-full h-full max-w-lg gap-4 px-2 2xl:max-w-sm"
          action=""
        >
          <input
            className={`${inputStyles}`}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className={`${inputStyles}`}
            type="email"
            name="email"
            placeholder="Email (optional)"
          />
          <textarea
            className={`${inputStyles} resize-none`}
            name="message"
            rows={4}
            placeholder="Message"
            required
          ></textarea>
          <CustomButton
            text="Send"
            classes="w-full rounded-lg text-lg 2xl:text-base sm:text-sm"
            submit
          />
        </form>
      </div>
      <Connect contact />
    </>
  );
};

export default ContactPage;
