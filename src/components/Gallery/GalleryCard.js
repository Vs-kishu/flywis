import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";

const GalleryCard = ({ src, service }) => {
  return (
    <div>
      <div className="relative h-[70vh]">
        <img
          className="h-full object-cover w-full"
          src={src}
          alt="gallerycard"
        />
        <div className="absolute bottom-5 text-white flex justify-between px-4 w-full">
          <AiOutlineInstagram className="text-5xl" />
          <span className="flex items-center gap-1">
            <BiSolidLike className="text-5xl" />
            <span className="text-xl font-semibold">30</span>
          </span>
        </div>
      </div>
      <h2 className="text-center text-xl font-semibold my-5">{service}</h2>
    </div>
  );
};

export default GalleryCard;
