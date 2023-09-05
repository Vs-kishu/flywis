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
      className="m-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="position-relative">
        <img
          width={410}
          height={570}
          src={src}
          alt="service1"
          className="img-fluid"
        />
        {!isHovered && (
          <p className="position-absolute text-center w-100 start-50 end-0 bottom-0 translate-middle fs-4 text-white">
            {service}
          </p>
        )}

        {isHovered && (
          <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center text-white bg-black ">
            <div className="d-flex flex-column align-items-center gap-3">
              <span className="fs-4">{service}</span>

              <button className="btn-bookNow px-4 bg-transparent border-1 border-light text-white">{`Book Now >`}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
