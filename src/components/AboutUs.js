import React from "react";
import Pictures from "./home/Pictures";
import { ServiceCardImages } from "../constants/constant";
import { Header, PrimaryButton } from "../utils/helpingComponent";

const AboutUs = () => {
  return (
    <section className="bg-primary text-white font-light">
      <Header styles={"text-white"} heading={"About Us"} />
      <div className="flex justify-center  gap-14">
        <div className="w-[37rem] h-[37rem]  border-8 border-secondary overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="aboutus"
            src={ServiceCardImages[0].src}
          />
        </div>
        <div className="flex flex-col justify-evenly w-[47.04rem] h-[26.18rem] items-start">
          <h3 className="text-4xl font-medium">Who We Are</h3>
          <h4 className="font-medium text-xl flex items-center gap-2">
            Shahina Hoja, RN, LE
            <span className="font-light text-sm ">
              - Aesthetic Nurse & Founder
            </span>
          </h4>
          <p className="w-2/3">
            A licensed Aesthetic Nurse and founder of Shahina Hoja Aesthetics.
            Shahina became Board certified Skin therapist in 2017. 5 years
            later, and she still continues to grow more passionate about
            increasing self - love and confidence for all her clients!
          </p>

          <PrimaryButton btnName={"VIEW MORE"} />
        </div>
      </div>

      <hr className="bg-secondary mt-[28.5rem] mb-14 w-3/4 mx-auto" />
      <Pictures />
    </section>
  );
};

export default AboutUs;
