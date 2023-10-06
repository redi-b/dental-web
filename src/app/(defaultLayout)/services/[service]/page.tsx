const ServicePage = ({ params }: { params: { service: string } }) => {
  const title = params.service
    .split("-")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

  return (
    <>
      <div className="flex justify-center">{title}</div>
    </>
  );
};

export default ServicePage;
