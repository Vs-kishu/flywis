import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceCardImages } from "../../constants/constant";

const Services = () => {
  return (
    <section className="mb-5">
      <div className="px-2 py-2 text-center font-medium text-2xl mx-auto w-1/4 my-4 bg-secondary text-primary">
        Services Menu By Concern
      </div>
      <div className="grid grid-cols-3">
        {ServiceCardImages.map((card, index) => (
          <ServiceCard src={card.src} service={card.service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
