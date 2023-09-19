import React from "react";
import { Link } from "react-router-dom";

const customHeaderStyle = {
  background:
    "radial-gradient(41734.29% 89.45% at 93.02% 50%, #E5D896 0%, rgba(229, 216, 150, 0.69) 25%, rgba(229, 216, 150, 0.62) 50%, rgba(229, 216, 150, 0.71) 75%, #E5D896 100%)",
};

const CustomButton = ({ src, btnName, height }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-2 py-1 rounded-lg border border-primary">
      <div className="w-7 h-7">
        <img className="w-full h-full object-contain" src={src} alt={btnName} />
      </div>
      {btnName}
    </button>
  );
};

const TopHeader = () => {
  return (
    <header
      className="py-4"
      style={{ background: customHeaderStyle.background }}
    >
      <div className="flex gap-5 text-primary text-base font-medium px-5">
        <Link to={"/giftcards"}>
          <CustomButton
            src={"/asessts/topheader/gift.png"}
            btnName="GIFT CARDS"
          />
        </Link>

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
