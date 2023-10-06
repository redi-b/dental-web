"use client";

import CustomButton from "@components/CustomButton";
import Modal from "@components/Modal";
import { useState } from "react";
import LocationModal from "./LocationModal";

const Connect = ({ contact }: { contact?: boolean }) => {
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  return (
    <div className="flex flex-col pt-8">
      <div className="flex flex-col items-center justify-center gap-6 py-12 text-white bg-[#122335]">
        <h1 className="text-5xl font-bold text-center 2xl:text-4xl text-default-gradient sm:text-2xl sm:font-semibold">
          Connect with us now
        </h1>
        <p className="max-w-4xl text-xl font-light 2xl:max-w-2xl md:max-w-lg 2xl:text-base sm:max-w-xs sm:text-sm xxs:px-6">
          Connect with our dental clinic today to experience exceptional oral
          care. Whether you need a routine check-up, cosmetic dentistry, or
          emergency care, we are here to meet all your dental needs. Don't wait,
          book your appointment now and take the first step towards a healthy
          and beautiful smile.
        </p>
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div className="flex flex-col gap-1 w-full max-w-lg text-lg 2xl:text-sm font-light md:max-w-sm sm:max-w-[300px]">
            <CustomButton
              text="Book an appointment"
              classes="w-full rounded-[4px]"
              link
              to=""
            />
            {contact || (
              <CustomButton
                text="Contact Us"
                classes="w-full rounded-[4px]"
                link
                to="/contact"
              />
            )}
            <CustomButton
              text="Visit Us"
              classes="w-full rounded-[4px]"
              click={() => setLocationModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <Modal open={locationModalOpen} setOpen={setLocationModalOpen}>
        <LocationModal />
      </Modal>
    </div>
  );
};

export default Connect;
