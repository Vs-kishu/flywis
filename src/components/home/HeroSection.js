import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex justify-between bg-primary text-color pt-8">
      <div className=" flex flex-col items-start justify-evenly py-20 ml-10 ">
        <h1 className="font-Sacramento text-8xl text-secondary p-5 pt-5">
          Shahina Hoja Aesthetics
        </h1>
        <ul
          className=" text-xl list-disc mt-5 ml-8 space-y-4 "
          style={{ color: "white" }}
        >
          <li>High Acne Clearing Success Rate</li>
          <li>Trained by Top Doctors in NYC</li>
          <li>Top & Latest Technology</li>
          <li>One Time Melasma Treatment</li>
          <li>High Quality Medical Grade Products</li>
        </ul>
        <button className="w-1/4 py-2 font-bold ml-5 text-xl mt-10 text-primary bg-secondary ">
          BOOK ONLINE
        </button>
      </div>
      <div className="absolute right-0 bottom-0 h-full">
        <img className="h-full" src="/asessts/hero-img.png" alt="hero img" />
      </div>
    </div>
  );
};

export default HeroSection;
