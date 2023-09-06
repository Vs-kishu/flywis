import React, { useState } from "react";
import { pictures } from "../../constants/constant";

const Pictures = () => {
  return (
    <div className=" w-100 d-flex overflow-auto no-scrollbar ">
      {pictures.map((pic) => (
        <img src={pic} alt="pic" className="w-25" />
      ))}
    </div>
  );
};

export default Pictures;
