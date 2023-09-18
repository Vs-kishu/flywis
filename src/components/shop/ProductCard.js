import React from "react";

const ProductCard = ({ src, title, price, quantity }) => {
  return (
    <div className="w-60 text-center">
      <div className="w-60 h-60 ">
        <img className="w-full h-full" src={src} alt="" />
      </div>
      <h4 className="text-xl font-normal mt-7 ">{title}</h4>
      <p className="text-base font-normal mb-7 mt-2">{quantity}</p>
      <p className="text-2xl font-black text-primary">${price}</p>
    </div>
  );
};

export default ProductCard;
