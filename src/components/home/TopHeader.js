import React from "react";
const customHeaderStyle = {
  background:
    "radial-gradient(41734.29% 89.45% at 93.02% 50%, #E5D896 0%, rgba(229, 216, 150, 0.69) 25%, rgba(229, 216, 150, 0.62) 50%, rgba(229, 216, 150, 0.71) 75%, #E5D896 100%)",
  /* You can add other styles here if needed */
};
const CustomButton = ({ src, btnName, height }) => {
  return (
    <button className="header-btn fw-bolder bg-transparent d-flex flex-row justify-content-center gap-2 align-items-center px-2 py-1  rounded-3">
      <img
        className="img-fluid "
        style={{ maxHeight: height }}
        src={src}
        alt={btnName}
      />
      {btnName}
    </button>
  );
};
const TopHeader = () => {
  return (
    <header
      className="container-fluid py-1"
      style={{ background: customHeaderStyle.background }}
    >
      <div className="btn-container d-flex  gap-4 w-auto ">
        <CustomButton
          src={"/asessts/topheader/gift.png"}
          height="20px"
          btnName="GIFT CARDS"
        />
        <CustomButton
          src={"/asessts/topheader/bulb.png"}
          height="18px"
          btnName="ACNE QUIZ"
        />
        <CustomButton
          src={"/asessts/topheader/note.png"}
          height="24px"
          btnName="TRACK INGRIDIENT"
        />
      </div>
    </header>
  );
};

export default TopHeader;
