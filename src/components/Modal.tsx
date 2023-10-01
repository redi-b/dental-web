import "@styles/animations.css";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  noAnimation?: boolean;
  closeBtnOutside?: boolean;
}

const Modal = ({
  open,
  setOpen,
  dark,
  className,
  noAnimation,
  closeBtnOutside,
  children,
}: ModalProps) => {
  const closeBtn = (
    <button
      className={`absolute top-2 right-2 text-2xl font-bold bg-gray-300/40 shadow-2xl rounded-full p-1.5 z-50 ${
        dark && "text-white"
      } hover:bg-gray-300/60`}
      onClick={() => setOpen(false)}
    >
      <AiOutlineClose />
    </button>
  );

  const modal = (
    <div
      className={`fixed top-0 z-50 flex items-center justify-center w-screen h-screen ${className}`}
    >
      {closeBtnOutside && closeBtn}
      <div
        className="fixed top-0 bottom-0 left-0 right-0 cursor-pointer bg-black/75"
        onClick={() => setOpen(false)}
      ></div>
      <div
        className="relative w-fit h-fit z-50 overflow-y-auto rounded-md"
        style={{
          animation: noAnimation ? "" : "modalOpen 0.3s",
        }}
      >
        {closeBtnOutside || closeBtn}
        {children}
      </div>
    </div>
  );

  return open && modal;
};

export default Modal;
