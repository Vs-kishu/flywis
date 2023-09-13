import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-between bg-primary text-color">
      <div className="w-full">
        <h1 className="font-Sacramento text-8xl text-secondary p-5 pt-5">
          Shahina Hoja Aesthetics
        </h1>
        <ul
          className="ml-10 text-xl list-disc mt-5 space-y-4"
          style={{ color: "white" }}
        >
          <li>High Acne Clearing Success Rate</li>
          <li>Trained by Top Doctors in NYC</li>
          <li>Top & Latest Technology</li>
          <li>One Time Melasma Treatment</li>
          <li>High Quality Medical Grade Products</li>
        </ul>
        <button className="w-1/4 py-2 font-bold ms-5 mt-10 text-primary bg-secondary ml-10">
          BOOK ONLINE
        </button>
      </div>
      <div>
        <img
          className="w-full float-right"
          src="/asessts/hero-img.png"
          alt="hero img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
