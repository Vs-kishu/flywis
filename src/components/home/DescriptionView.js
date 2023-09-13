import React from "react";
import { partners } from "../../constants/constant";

const DescriptionView = ({
  styles,
  img,
  src,
  title,
  content,
  desc,
  desc1,
  btnName,
}) => {
  return (
    <div className={`flex ${styles}`}>
      {title === "Our Partners" ? (
        <div
          style={{ width: "50%", height: "600px" }}
          className="ps-5 bg-lightSecondary"
        >
          <div className="grid grid-cols-2 h-full p-8">
            {partners.map((src, index) => (
              <div className="flex justify-center items-center" key={index}>
                <img src={src} alt="partner" className="w-2/3" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`${img ? img : "ps-5"} w-1/2`}>
          <img src={src} className="object-contain w-full" alt="products" />
        </div>
      )}

      <div className="w-1/2 flex flex-col justify-between pb-3">
        <div className="mx-auto px-2 py-2 text-center font-medium w-full text-3xl bg-secondary text-primary">
          {title}
        </div>

        {content && (
          <h4 className="text-center mx-auto font-medium text-3xl w-3/4">
            {content}
          </h4>
        )}
        <p className="text-center mx-auto text-xl w-3/4">{desc}</p>
        {desc1 && <p className="text-center mx-auto text-xl w-3/4">{desc1}</p>}

        {btnName && (
          <div className="flex justify-end">
            <button
              className={`w-1/4 text-primary bg-secondary py-2 font-bold  border ${
                title === "Our Products" ? "mr-5" : "mx-auto"
              }`}
            >
              {btnName}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionView;
