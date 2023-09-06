import React from "react";
import DescriptionView from "./DescriptionView";

const Description = () => {
  return (
    <section>
      <DescriptionView
        src={"/asessts/description/products.png"}
        title="Our Products"
        content="Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse."
        desc="Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim."
        btnName="EXPLORE PRODUCTS"
      />
      <DescriptionView
        src={"/asessts/serviceCards/service1.png"}
        title={"Who We Are"}
        content={"Shahina Hoja, RN, LE Aesthetic Nurse & Founder"}
        desc={
          "A licensed Aesthetic Nurse and founder of Shahina Hoja Aesthetics. Shahina became Board certified Skin therapist in 2017. 5 years later, and she still continues to grow more passionate about increasing self - love and confidence for all her clients!"
        }
        btnName={"VIEW MORE"}
        styles={"flex-row-reverse"}
        img={"pe-5"}
      />
      <DescriptionView
        src={"/asessts/description/products.png"}
        title={"Our Partners"}
        content={
          "Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim."
        }
      />
    </section>
  );
};

export default Description;
