import React from "react";

const OfferCard = () => {
  return (
    <div className="d-flex align-items-center justify-content-between px-3 z-index btn-bg rounded-3  h-100 ">
      <div className="w-25">
        <img src="/asessts/specialOffer.png" className="img-fluid " alt="" />
      </div>
      <div className="d-flex flex-column gap-3 py-2 ">
        <h5 className="text-center fs-6 fw-bolder">
          Get 50$ OFF on your First Visit{" "}
        </h5>
        <h5 className="pointer fw-bolder">{"CLICK TO VIEW MORE >"}</h5>
      </div>
    </div>
  );
};

export default OfferCard;
