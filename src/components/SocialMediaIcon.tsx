interface IconProps {
  style: Object;
  link?: string;
  children: React.ReactNode;
}

const SocialMediaIcon = ({ children, style, link = "" }: IconProps) => {
  return (
    <a
      className="flex items-center justify-center text-white p-1 rounded-full hover:transform hover:scale-125 transition-all min-2xl:text-2xl min-2xl:p-1.5"
      style={style}
      href={link}
    >
      {children}
    </a>
  );
};

export default SocialMediaIcon;
