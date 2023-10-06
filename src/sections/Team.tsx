import DoctorInfo from "@components/DoctorInfo";
import { Doctors } from "@constants/constants";
import "@styles/team.css";

const Team = () => {
  return (
    <div className="flex justify-center w-full px-12 pt-16 overflow-hidden body-container sm:px-6 xs:px-2">
      <div className="flex flex-col items-center justify-center gap-6 mx-auto md:gap-6">
        <h1 className="text-6xl 2xl:text-4xl text-default-gradient md:text-3xl">
          Our Team
        </h1>
        <p className="max-w-5xl text-2xl font-light text-center 2xl:max-w-3xl 2xl:text-lg lg:max-w-xl sm:max-w-lg xs:max-w-xs sm:text-base">
          Our team of experienced and compassionate dental professionals
          understand that a healthy smile is essential to overall wealth and
          happiness.
        </p>
        <div
          id="scrollbar"
          className="grid items-start grid-flow-col grid-rows-1 gap-16 px-12 py-6 overflow-x-auto \
                   max-w-7xl 2xl:max-w-6xl sm:max-w-[310px] md:px-6 md:py-8 h-fit lg:gap-8 rounded-3xl"
        >
          {Doctors.map((doctor) => (
            <DoctorInfo
              name={doctor.name}
              specialty={doctor.specialty}
              imgSrc={doctor.image || "/profile.jpg"}
              key={doctor.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
