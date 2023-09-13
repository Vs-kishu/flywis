import React from "react";
import { pictures } from "../../constants/constant";

const Pictures = () => {
  return (
    <div className="w-full">
      <div className="flex overflow-x-scroll no-scrollbar ">
        {pictures.map((picture) => (
          <img className="w-72" src={picture} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Pictures;
