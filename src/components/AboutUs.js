import React from "react";
import Pictures from "./home/Pictures";

const AboutUs = () => {
  return (
    <section className="bg-primary text-white font-light">
      <h1 className="text-center text-5xl py-10">About Us</h1>
      <div className="flex justify-center  gap-10">
        <div className="w-1/3 h-[70vh] border-8 border-secondary overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/0677/4150/8ab9a9d80196a8fb9f01e940dbf0d7e1?Expires=1695600000&Signature=FHtS1H3VCTbaxg-GVudn~qYqdDoK8CZjXpq4P~GnTvrFwNLD-WWpSmFXVRIsMgm8elyjzJ~FPPDMjr9Fnk-sDPW5oJZELl7oYzKoffOG~~gDvjMAte7Q~xAs4FvQkZfKkv1vPyLzZv2tcHGUgcOAB9QPrc3o2gnsvm7a~gJj8zzqhitQ1l1r6Uf5PrWNJ-uBxXt3oCIfCLecOKdPNRqnOYD0NTfe8ftcbIwbIW9ahs7cls4vhHsQmxAKN3drRkMABEOZdzkf5pSInak2lpeEquJR5asUg~EMZV76qGHxK2wvYl05sbdF4EObSCp0xUN4nYq7VVfLVJYsTOkgINxqdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="aboutus"
          />
        </div>
        <div className="flex flex-col justify-evenly w-1/2 items-start">
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

          <button className="w-1/2 py-2 text-xl font-medium text-primary bg-secondary">
            VIEW MORE
          </button>
        </div>
      </div>

      <hr className="bg-secondary mt-20 mb-14 w-3/4 mx-auto" />
      <Pictures />
    </section>
  );
};

export default AboutUs;
