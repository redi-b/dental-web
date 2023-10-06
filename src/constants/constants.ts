export const NavLinks = [
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

export const Doctors = [
  { name: "Dr. Abebe Kebede", specialty: "Orthodentist", image: "" },
  { name: "Dr. Kebede Abebe", specialty: "Cosmologist", image: "" },
  { name: "Dr. Mesfin Kebede", specialty: "Canal Specialist", image: "" },
];

function generateServiceLinkFromName(name: string): string {
  let link = name.toLowerCase().split(" ").join("-");
  return `/services/${link}`;
}

export const Services = [
  {
    name: "Teeth Whitening",
    info: "Teeth whitening treatments help remove stains and discoloration, enhancing the brightness of your smile and boosting your confidence.",
    image: "/services/teeth-whitening.jpg",
    generateLink() {
      return generateServiceLinkFromName(this.name);
    },
  },
  {
    name: "Teeth Cleaning",
    info: "Professional teeth cleaning involves removing plaque and tartar buildup from the teeth, helping to prevent tooth decay and gum disease.",
    image: "/services/tooth-cleaning.jpg",
    generateLink() {
      return generateServiceLinkFromName(this.name);
    },
  },
  {
    name: "Dental Implants",
    info: "Dental implants are artificial tooth roots that are surgically placed into the jawbone, providing a strong foundation for replacement teeth.",
    image: "/services/dental-implant.jpg",
    generateLink() {
      return generateServiceLinkFromName(this.name);
    },
  },
  {
    name: "Dental Fillings",
    info: "Dental fillings are used to repair teeth damaged by decay or minor fractures. They restore the tooth's structure and prevent further decay.",
    image: "/services/dental-filling.jpg",
    generateLink() {
      return generateServiceLinkFromName(this.name);
    },
  },
  {
    name: "Dental Crowns",
    info: "Dental crowns are tooth-shaped caps that cover damaged or weakened teeth, restoring their shape, size, strength, and appearance.",
    image: "/services/dental-crown.jpg",
    generateLink() {
      return generateServiceLinkFromName(this.name);
    },
  },
  {
    name: "Orthodontic Treatment",
    info: "Orthodontic treatment corrects misaligned teeth and jaws using braces or aligners, improving both dental health and aesthetics.",
    image: "/services/orthodontic-treatment.jpg",
    generateLink() {
      return generateServiceLinkFromName(this.name);
    },
  },
  {
    name: "Root Canal Treatment",
    info: "Root canal treatment is performed to save a severely infected or decayed tooth by removing the infected pulp and sealing the root canal.",
    image: "/services/root-canal.jpg",
    generateLink() {
      return generateServiceLinkFromName(this.name);
    },
  },
  {
    name: "Oral Surgery",
    info: "Oral surgery encompasses various procedures, such as tooth extractions, wisdom teeth removal, and corrective jaw surgeries.",
    image: "/services/oral-surgery.jpg",
    generateLink() {
      return generateServiceLinkFromName(this.name);
    },
  },
];
