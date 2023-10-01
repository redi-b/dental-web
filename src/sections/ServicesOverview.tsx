import ServiceCard from "@components/ServiceCard";

const ServicesOverview = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-12 pt-16">
      <h1 className="text-4xl text-center md:text-3xl text-default-gradient">
        Services Overview
      </h1>
      <div className="grid items-start w-full grid-cols-3 gap-4 px-8 md:grid-cols-2 sm:grid-cols-1 justify-items-center md:px-4">
        <ServiceCard
          title="Service"
          info="Service Info"
          imgSrc="/smile.jpg"
          link=""
        />
        <ServiceCard
          title="Service"
          info="Service Info"
          imgSrc="/smile.jpg"
          link=""
        />
        <ServiceCard
          title="Service"
          info="Service Info"
          imgSrc="/smile.jpg"
          link=""
        />
        <ServiceCard
          title="Service"
          info="Service Info"
          imgSrc="/smile.jpg"
          link=""
        />
        <ServiceCard
          title="Service"
          info="Service Info"
          imgSrc="/smile.jpg"
          link=""
        />
      </div>
    </div>
  );
};

export default ServicesOverview;
