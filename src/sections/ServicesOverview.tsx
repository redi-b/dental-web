import ServiceCard from "@components/ServiceCard";

const ServicesOverview = () => {
  return (
    <div className="grid items-start grid-cols-3 gap-8 px-12 m-8 md:grid-cols-2 sm:grid-cols-1 justify-items-center md:px-4">
      <h1 className="text-4xl md:text-3xl font-medium text-center text-white col-span-full">
        Services <br /> Overview
      </h1>
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
  );
};

export default ServicesOverview;
