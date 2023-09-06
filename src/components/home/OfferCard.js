import React from "react";

const OfferCard = () => {
  return (
    <div className="d-flex align-items-center z-index btn-bg rounded-3  h-100 ">
      <div className="w-50">
        <img src="/asessts/specialOffer.png" className="img-fluid " alt="" />
      </div>
      <div className="d-flex flex-column gap-5 py-2 ">
        <h5 className="text-center fw-bolder">
          Get 50$ OFF on your First Visit{" "}
        </h5>
        <h5 className="pointer fw-bolder">{"CLICK TO VIEW MORE >"}</h5>
      </div>
    </div>
  );
};

export default OfferCard;
