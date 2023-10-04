"use client";

import { NavLinks } from "@constants/constants";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import "@styles/animations.css";
import Logo from "./Logo";
import Modal from "./Modal";
import AppointmentModal from "@sections/AppointmentModal";
import CustomButton from "./CustomButton";

interface NavBarProps {
  home?: boolean;
}

const linkHoverStyles =
  "before:absolute before:bottom-[-2px] before:h-[3px] before:w-0 before:bg-primary-green \
   before:transition-all before:duration-300 before:rounded-md hover:before:w-full";
const dropdownStyles =
  "invisible opacity-0 text-sm peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible \
   bg-[#07213a] absolute flex flex-col gap-4 p-4 mx-2 my-3 w-max border -translate-x-12 border-gray-50 \
   shadow-2xl transition-all ease-in-out delay-150";

const NavBar = ({ home = false }: NavBarProps) => {
  const [mobileNavShown, setMobileNavShown] = useState(false);
  const [landing, setLanding] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  useEffect(() => {
    const toggleLanding = () => {
      if (window.scrollY === 0 && home) setLanding(true);
      else setLanding(false);
    };

    toggleLanding();
    document.addEventListener("scroll", toggleLanding);
  }, [landing]);

  return (
    <nav
      className={`fixed top-0 w-full z-20 transition-all ease-in-out ${
        landing
          ? "bg-transparent max-h-0 duration-500"
          : "bg-secondary-dark max-h-20 duration-300"
      }`}
    >
      <div className="flex items-center justify-between h-full px-4 py-3">
        <div className="min-lg:hidden"></div>
        <Logo landing={landing} />
        <div
          className="text-2xl cursor-pointer min-xl:hidden"
          onClick={() => {
            setMobileNavShown((prev) => !prev);
          }}
        >
          {mobileNavShown ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul className="flex items-center gap-4 text-[13px] text-white w-fit xl:hidden">
          {NavLinks.map((link) => (
            <li className="" key={link.name}>
              <a
                className={`relative text-center w-full text-sm rounded-xl mx-2 py-0.5 bg-transparent ${
                  (link.dropdown.exists && "peer") || linkHoverStyles
                }`}
                href={link.to}
              >
                {link.name}
              </a>
              {link.dropdown.exists && (
                <div className={dropdownStyles}>
                  {link.dropdown.menus.map((menu) => (
                    <a
                      key={menu.name}
                      href={menu.to}
                      className="hover:text-primary-green"
                    >
                      {menu.name}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li>
            <CustomButton
              classes="px-4 text-[13px] rounded-md shadow-xl"
              text="Schedule an Appointment"
              click={() => setAppointmentModalOpen(true)}
            />
          </li>
        </ul>
      </div>
      <ul
        id="mobileNav"
        className={`flex flex-col items-end justify-evenly w-full text-sm bg-[#122335] shadow-2xl overflow-hidden min-xl:hidden ${
          mobileNavShown
            ? "max-h-[1000px] duration-1000"
            : "max-h-0 duration-500"
        } transition-[max-height] ease-in-out`}
      >
        {NavLinks.map((link) => (
          <li className="p-4" key={link.name}>
            <a
              className={`relative w-fit p-4 cursor-pointer hover:text-secondary-green`}
              href={link.to}
              key={link.name}
            >
              {link.name}
            </a>
          </li>
        ))}
        <li className="p-4">
          <CustomButton
            classes="px-4 text-[13px] rounded-md shadow-xl"
            text="Schedule an Appointment"
            click={() => setAppointmentModalOpen(true)}
          />
        </li>
      </ul>
      <Modal open={appointmentModalOpen} setOpen={setAppointmentModalOpen}>
        <AppointmentModal />
      </Modal>
    </nav>
  );
};

export default NavBar;
