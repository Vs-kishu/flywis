import React from "react";

const customHeaderStyle = {
  background:
    "radial-gradient(41734.29% 89.45% at 93.02% 50%, #E5D896 0%, rgba(229, 216, 150, 0.69) 25%, rgba(229, 216, 150, 0.62) 50%, rgba(229, 216, 150, 0.71) 75%, #E5D896 100%)",
  /* You can add other styles here if needed */
};

const CustomButton = ({ src, btnName, height }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-2 py-1 rounded-lg border border-primary">
      <img className="w-[15%]" src={src} alt={btnName} />
      {btnName}
    </button>
  );
};

const TopHeader = () => {
  return (
    <header
      className="py-1"
      style={{ background: customHeaderStyle.background }}
    >
      <div className="flex gap-4 text-primary font-medium ml-5">
        <CustomButton
          src={"/asessts/topheader/gift.png"}
          btnName="GIFT CARDS"
        />
        <CustomButton src={"/asessts/topheader/bulb.png"} btnName="ACNE QUIZ" />
        <CustomButton
          src={"/asessts/topheader/note.png"}
          btnName="TRACK INGREDIENT"
        />
      </div>
    </header>
  );
};

export default TopHeader;
