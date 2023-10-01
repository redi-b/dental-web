import DoctorInfo from "@components/DoctorInfo";
import "@styles/team.css";

const Team = () => {
  return (
    <div className="flex w-full px-12 py-16 overflow-hidden sm:px-6">
      <div className="flex flex-col items-center justify-center gap-12 mx-auto md:gap-6">
        <h1 className="max-w-4xl text-3xl text-center lg:max-w-3xl sm:max-w-lg lg:text-2xl sm:text-lg">
          Our team of experienced and compassionate dental professionals
          understand that a healthy smile is essential to overall wealth and
          happiness.
        </h1>
        <div
          className="grid items-start grid-flow-col grid-rows-1 gap-16 px-12 py-16 overflow-x-auto \
                   bg-green-500 shadow-2xl sm:max-w-xs md:px-6 md:py-8 h-fit lg:gap-8 rounded-3xl"
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
