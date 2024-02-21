import CustomButton from "@components/CustomButton";
import { BiSolidDownArrow } from "react-icons/bi";

const AppointmentModal = () => {
  const inputStyles =
    "w-full text-lg 2xl:text-sm p-4 py-4 2xl:py-[13px] bg-gray-600 border-2 border-gray-500 transition-all duration-300 \
     rounded-lg outline-none text-gray-50 focus:border-green-500";
  const radioStyles =
    "w-full text-lg 2xl:text-sm px-6 py-4 2xl:py-[13px] text-gray-400 transition-all duration-300 \
     cursor-pointer select-none md:px-4 xs:px-3";

  return (
    <>
      <div className="max-w-xl bg-gray-700">
        <div className="px-6 py-10 2xl:py-6 sm:px-4 sm:max-w-sm">
          <h3 className="my-4 text-3xl text-white 2xl:text-2xl">
            Make an appointment
          </h3>
          <form
            className="space-y-6 text-lg select-none 2xl:text-sm"
            action="#"
          >
            <div className="flex gap-2">
              <div className="w-full">
                <input
                  type="name"
                  name="firstname"
                  id="firstname"
                  className={`${inputStyles}`}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="name"
                  name="firstname"
                  id="firstname"
                  className={`${inputStyles}`}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="name"
                name="email"
                id="email"
                pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
                className={`"${inputStyles} w-full focus:invalid:border-red-500`}
                placeholder="Email (optional)"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone-num"
                id="phone-num"
                minLength={10}
                maxLength={15}
                pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                className={`"${inputStyles} w-full focus:invalid:border-red-500`}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="flex items-center justify-between bg-gray-600 border border-gray-500 rounded-lg">
              <input
                type="radio"
                id="new-visitor"
                name="visitor"
                value="new-visitor"
                className="hidden peer/new"
                defaultChecked={true}
              />
              <label
                htmlFor="new-visitor"
                className={`${radioStyles} rounded-l-lg peer-checked/new:bg-green-500 peer-checked/new:text-gray-50`}
              >
                New Visitor
              </label>
              <input
                type="radio"
                id="returning-visitor"
                name="visitor"
                value="returning-visitor"
                className="hidden peer"
              />
              <label
                htmlFor="returning-visitor"
                className={`${radioStyles} rounded-r-lg peer-checked:bg-green-500 peer-checked:text-gray-50`}
              >
                Returning Visitor
              </label>
            </div>
            <div className="relative">
              <select
                id="doctors"
                className="w-full px-4 py-4 2xl:py-[13px] bg-gray-600 border-2 border-gray-500 rounded-lg appearance-none cursor-pointer text-gray-50 focus:outline-none focus:text-gray-50"
              >
                <option value="">Dr. Abebe Kebede</option>
                <option value="">Dr. Kebede Abebe</option>
                <option value="">Dr. Mesfin Abebe</option>
              </select>
              <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-2 border-2 border-l-0 border-gray-500 rounded-r-lg pointer-events-none bg-primary-green/75">
                <span className="px-2 text-xl text-white">
                  <BiSolidDownArrow />
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <CustomButton
                text="Request"
                classes="px-5 2xl:px-4 rounded-md shadow-lg text-lg 2xl:text-sm"
                submit
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
