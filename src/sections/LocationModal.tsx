const LocationModal = () => {
  return (
    <div className="bg-white h-96 md:max-w-lg sm:max-w-sm overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.574127041841!2d38.734948800000005!3d9.0112759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b87ff04efedf9%3A0x1513f99f186109aa!2sSayan%20Dental%20Clinic!5e0!3m2!1sen!2set!4v1696401730250!5m2!1sen!2set"
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
