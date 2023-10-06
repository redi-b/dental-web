import MainServiceCard from "@components/MainServiceCard";
import { Services } from "@constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayan Dental - Services",
};

const ServicesPage = () => {
  return (
    <>
      <div className="grid gap-6 grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {Services.map((service) => (
          <MainServiceCard
            title={service.name}
            info={service.info}
            imgSrc={service.image}
            link={service.generateLink()}
            key={service.name}
          />
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
