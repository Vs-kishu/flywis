import React, { useState } from "react";
import { pictures } from "../../constants/constant";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

const Picture = ({ pic }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="position-relative"
    >
      <img height={370} src={pic} alt="pic" className="" />
      {isHovered && (
        <Link to={"https://www.instagram.com/nurse.shahina/"} target="_blank">
          <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center text-white bg-black">
            <div className="d-flex flex-column align-items-center gap-3">
              <BsInstagram className="fs-1" />
              <p>VIEW ON INSTAGRAM</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

const Pictures = () => {
  return (
    <div className="w-100 d-flex overflow-auto no-scrollbar">
      {pictures.map((pic, index) => (
        <Picture key={index} pic={pic} />
      ))}
    </div>
  );
};

export default Pictures;
