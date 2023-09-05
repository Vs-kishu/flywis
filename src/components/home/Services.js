import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceCardImages } from "../../constants/constant";

const Services = () => {
  return (
    <section className="mb-5">
      <div className="px-2 py-2 text-center fw-bolder mx-auto w-25 my-4 fs-4 btn-bg btn-text">
        Services Menu By Concern
      </div>
      <div className="container">
        <div className="row">
          {ServiceCardImages.map((card, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <ServiceCard src={card.src} service={card.service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
