export const navLinks = [
  {
    name: "Home",
    to: "/",
    dropdown: {
      exists: false,
      menus: [],
    },
  },
  {
    name: "Services",
    to: "/services",
    dropdown: {
      exists: true,
      menus: [
        { name: "Routine Check-up", to: "/services/checkup" },
        { name: "Cleaning & Fillings", to: "/services/cleanings" },
        { name: "Braces & Invisalign", to: "/services/fix" },
        { name: "Surgery", to: "/services/surgery" },
      ],
    },
  },
  {
    name: "About Us",
    to: "/about",
    dropdown: {
      exists: false,
      menus: [],
    },
  },
  {
    name: "Contact Us",
    to: "/contact",
    dropdown: {
      exists: false,
      menus: [],
    },
  },
];

export const Doctors = [{ name: "", specialty: "" }];

export const Services = [
  { service: "Service 1", info: "Service 1 Info", image: "/smile.jpg" },
  { service: "Service 2", info: "Service 2 Info", image: "/smile.jpg" },
  { service: "Service 3", info: "Service 3 Info", image: "/smile.jpg" },
  { service: "Service 4", info: "Service 4 Info", image: "/smile.jpg" },
  { service: "Service 5", info: "Service 5 Info", image: "/smile.jpg" },
  { service: "Service 6", info: "Service 6 Info", image: "/smile.jpg" },
];
