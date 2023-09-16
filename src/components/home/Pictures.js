import React from "react";
import { pictures } from "../../constants/constant";

const Pictures = () => {
  return (
    <div className="w-full">
      <div className="grid grid-flow-col overflow-x-scroll no-scrollbar ">
        {pictures.map((picture, index) => (
          <div key={index} className="w-72 h-72">
            <img
              key={index}
              className="w-full h-full object-cover"
              src={picture}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
