import React from "react";
import { OFFER_IMG } from "../../constants/constant";

const LimitedOffer = () => {
  return (
    <section className="mb-3 w-full h-[40rem] relative">
      <img src={OFFER_IMG} alt="offer" className="w-full h-full object-cover" />
      <div className="w-full h-full bg-black bg-opacity-50 absolute top-0">
        <div className="absolute top-0 mt-5 w-full text-white">
          <div className="flex items-center gap-2 px-2 py-2 text-center font-bold w-[40%] my-4 text-2xl bg-secondary text-primary">
            <div className="">
              <img
                className="w-1/2 mx-auto"
                src="/asessts/offer-icon.png"
                alt=""
              />
            </div>
            LIMITED TIME OFFER
          </div>
        </div>
        <div className="absolute w-1/3 bottom-0 text-white left-5 mb-12">
          <h1 className="text-5xl text-center mb-10">Get your 50% OFF</h1>
          <p className="text-center  mt-3">
            Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
            anim velit adipisicing ea aliqua alluptate sit do do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;
