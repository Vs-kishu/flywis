import React from "react";

const LimitedOffer = () => {
  return (
    <section className="mb-3">
      <div className="position-relative">
        <img src="/asessts/offer.png" alt="offer" className="img-fluid" />
        <div className="position-absolute top-0 mt-5 w-100 text-white ">
          <div className="d-flex align-items-center  gap-2 px-2 py-2 text-center fw-bolder w-25 my-4 fs-4 btn-bg btn-text">
            <img src="/asessts/offer-icon.png" height={30} alt="" />
            LIMITED TIME OFFER
          </div>
        </div>
        <div className="position-absolute bottom-0 text-white ms-5 mb-5">
          <h1 className="align-self-end ms-5">Get your 50% OFF</h1>
          <p className="text-center w-75 mt-3">
            Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
            anim velit adipisicing ea aliqua alluptate sit do do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;
