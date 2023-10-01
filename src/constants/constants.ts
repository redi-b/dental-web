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