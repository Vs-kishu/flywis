import React, { useState } from "react";

const ServiceCard = ({ src, service }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="m-2 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-[30rem] xl:h-[39rem]">
        <img src={src} alt="service1" className="w-full h-full " />
        {!isHovered && (
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-30">
            {service}
          </p>
        )}

        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70">
            <div className="flex flex-col items-center space-y-3">
              <span className="text-2xl">{service}</span>
              <button className="btn-bookNow px-4 border border-white text-white">
                {" Book Now >"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
