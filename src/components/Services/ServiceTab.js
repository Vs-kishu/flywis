import React from "react";
import Services from "../home/Services";
import ServiceHead from "./ServiceHead";
import { SERVICE_HEAD_IMAGE } from "../../constants/constant";

const ServiceTab = () => {
  return (
    <section>
      <ServiceHead
        title={"Services"}
        button={"BOOK ONLINE"}
        img={SERVICE_HEAD_IMAGE}
      />
      <Services />
    </section>
  );
};

export default ServiceTab;
