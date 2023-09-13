import React from "react";

const LimitedOffer = () => {
  return (
    <section className="mb-3 relative">
      <img src="/asessts/offer.png" alt="offer" className="img-fluid" />
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
      <div className="absolute w-1/3 bottom-0 text-white left-5 mb-5">
        <h1 className="text-5xl text-center mb-10">Get your 50% OFF</h1>
        <p className="text-center  mt-3">
          Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim
          velit adipisicing ea aliqua alluptate sit do do.
        </p>
      </div>
    </section>
  );
};

export default LimitedOffer;
