const LocationModal = () => {
  return (
    <div className="overflow-hidden bg-white h-96 md:max-w-lg sm:max-w-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02029124883!2d38.61332938053589!3d8.963479540238364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1708512706428!5m2!1sen!2set"
        height="100%"
        width="100%"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationModal;
