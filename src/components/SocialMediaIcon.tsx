interface IconProps {
  style: Object;
  link?: string;
  children: React.ReactNode;
}

const SocialMediaIcon = ({ children, style, link = "" }: IconProps) => {
  return (
    <a
      className="flex items-center justify-center text-white p-1 rounded-full hover:transform hover:scale-125 transition-all"
      style={style}
      href={link}
    >
      {children}
    </a>
  );
};

export default SocialMediaIcon;
