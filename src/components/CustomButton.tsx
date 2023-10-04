import { FiArrowRight } from "react-icons/fi";

interface CustomButtonProps {
  text: string;
  bgColor?: string;
  arrow?: boolean;
  click?: () => void;
  submit?: boolean;
  link?: boolean;
  to?: string;
  classes?: string;
  disabled?: boolean;
  rounded?: boolean | string;
}

const CustomButton = ({
  text,
  bgColor = "bg-secondary-green",
  arrow,
  click,
  submit,
  link,
  to,
  classes = "px-5",
  disabled,
  rounded,
}: CustomButtonProps) => {
  const hoverBg = `hover:opacity-75`;
  const btn = (
    <button
      className={`flex gap-1 items-center justify-center py-3 ${
        rounded && "rounded-full"
      } ${bgColor} text-white ${hoverBg} disabled:opacity-75 ${classes}`}
      onClick={click}
      type={submit ? "submit" : "button"}
      disabled={disabled}
    >
      {text}
      {arrow && (
        <span>
          <FiArrowRight />
        </span>
      )}
    </button>
  );

  const linkBtn = (
    <a
      className={`flex gap-1 items-center justify-center py-3 ${
        rounded && "rounded-full"
      } ${bgColor} text-white ${hoverBg} disabled:opacity-75 ${classes}`}
      href={to ?? ""}
    >
      {text}
      {arrow && (
        <span>
          <FiArrowRight />
        </span>
      )}
    </a>
  );

  return link ? linkBtn : btn;
};

export default CustomButton;
