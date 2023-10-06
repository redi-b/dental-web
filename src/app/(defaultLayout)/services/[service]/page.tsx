const ServicePage = ({ params }: { params: { service: string } }) => {
  return <div className="flex items-center w-full">This is {params.service} service!</div>;
};

export default ServicePage;
