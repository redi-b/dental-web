import DoctorInfo from "@components/DoctorInfo";
import "@styles/team.css";

const Team = () => {
  return (
    <div className="flex w-full px-12 pt-16 overflow-hidden sm:px-6">
      <div className="flex flex-col items-center justify-center gap-6 mx-auto md:gap-6">
        <h1 className="text-4xl text-default-gradient md:text-3xl">Our Team</h1>
        <p className="max-w-3xl text-lg text-center lg:max-w-xl sm:max-w-lg sm:text-sm">
          Our team of experienced and compassionate dental professionals
          understand that a healthy smile is essential to overall wealth and
          happiness.
        </p>
        <div
          id="scrollbar"
          className="grid items-start grid-flow-col grid-rows-1 gap-16 px-12 py-6 overflow-x-auto \
                   max-w-6xl sm:max-w-xs md:px-6 md:py-8 h-fit lg:gap-8 rounded-3xl"
        >
          <DoctorInfo
            name="Dr. Abebe Kebede"
            specialty="Brace Specialist"
            imgSrc="/profile.jpg"
          />
          <DoctorInfo
            name="Dr. Kebede Abebe"
            specialty="Cosmology Specialist"
            imgSrc="/profile.jpg"
          />
          <DoctorInfo
            name="Dr. Mesfin Kebede"
            specialty="Canal Specialist"
            imgSrc="/profile.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
