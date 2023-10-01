import { GoMail } from "react-icons/go";
import { SlLocationPin, SlPhone } from "react-icons/sl";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import SocialMediaIcon from "@components/SocialMediaIcon";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-secondary-dark text-secondary-fg text-md w-full pt-6">
      <div className="flex md:flex-col md:items-center items-start justify-around w-fit min-md:w-full gap-4 md:p-2">
        <div className="footer-section-1">
          <h1 className="text-base font-bold text-gray-50">
            Working hours (local time)
          </h1>
          <div className="my-2">
            <p className="flex justify-between gap-8 text-sm">
              <span className="text-gray-200">Monday - Friday</span>
              <span>2 am - 11 pm</span>
            </p>
          </div>
          <div className="my-2">
            <p className="flex justify-between gap-6 text-sm">
              <span className="text-gray-200">Saturday</span>
              <span>2 am - 6 am</span>
            </p>
          </div>
          <div className="my-2">
            <p className="flex justify-between gap-6 text-sm">
              <span className="text-gray-200">Sunday</span>
              <span>Closed</span>
            </p>
          </div>
          <div className="flex flex-col items-start w-fit justify-center gap-4 my-8">
            <h1 className="text-base font-bold text-gray-50">
              Find us on Social Media
            </h1>
            <div className="flex min-md:self-center gap-2">
              <SocialMediaIcon style={{ background: "#3b5998" }} link="https://facebook.com">
                <FaFacebookF />
              </SocialMediaIcon>
              <SocialMediaIcon
                style={{
                  background:
                    "radial-gradient(circle farthest-corner at 28% 100%, #fcdf8f 0%, \
                    #fbd377 10%, #fa8e37 22%, #f73344 35%, transparent 65% ), \
                  linear-gradient(145deg, #3051f1 10%, #c92bb7 70%)",
                }}
                link="https://instagram.com"
              >
                <FaInstagram />
              </SocialMediaIcon>
              <SocialMediaIcon style={{ background: "#b2071d" }} link="https://youtube.coom">
                <FaYoutube />
              </SocialMediaIcon>
              <SocialMediaIcon style={{ background: "#000" }} link="https://tiktok.com">
                <FaTiktok />
              </SocialMediaIcon>
              <SocialMediaIcon style={{ background: "#1DA1F2" }} link="https://twitter.com">
                <FaTwitter />
              </SocialMediaIcon>
            </div>
          </div>
        </div>
        <div className="links self-start">
          <h1 className="text-base font-bold text-gray-50">Quick Links</h1>
          <div className="flex flex-col gap-4 my-4 text-sm">
            <a href="" className="hover:text-green-500">
              About Us
            </a>
            <a href="" className="hover:text-green-500">
              Services
            </a>
            <a href="" className="hover:text-green-500">
              Appointment
            </a>
            <a href="" className="hover:text-green-500">
              Testimonials
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 pb-2 info">
          <div className="flex items-center gap-4 text-gray-50">
            <div className="text-3xl">
              <GoMail />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base">Email</h1>
              <span className="text-[#cacaca] text-sm">
                sayandental@example.com
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-50">
            <div className="text-3xl">
              <SlPhone />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base">Phone</h1>
              <span className="text-[#cacaca] text-sm">+251 90 000 0000</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-50">
            <div className="text-3xl">
              <SlLocationPin />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base">Location</h1>
              <span className="text-[#cacaca] text-sm">Location</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
