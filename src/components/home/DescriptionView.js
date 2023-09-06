import React from "react";
import { partners } from "../../constants/constant";

const DescriptionView = ({
  styles,
  img,
  src,
  title,
  content,
  desc,
  btnName,
}) => {
  return (
    <div className={`d-flex ${styles}`}>
      {title === "Our Partners" ? (
        <div
          style={{ width: "50%", height: "600px" }}
          className="ps-5  bg-partner "
        >
          <div className="row flex align-items-center  w-100 h-100">
            {partners.map((src, index) => (
              <div className="col-lg-6 " key={index}>
                <img src={src} alt="partner" className="img-fluid w-50" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ width: "50%" }} className={`${img ? img : "ps-5"}`}>
          <img src={src} className="img-fluid" alt="products" />
        </div>
      )}

      <div
        style={{ width: "50%" }}
        className="d-flex flex-column justify-content-between pb-3"
      >
        <div className="mx-auto px-2 py-2 text-center fw-bolder w-100 fs-4 btn-bg btn-text">
          {title}
        </div>
        {content && <h4 className="text-center mx-auto w-75">{content}</h4>}
        <p className="text-center mx-auto w-75">{desc}</p>
        {btnName && (
          <button className="w-25 mx-auto py-2 fw-bold mt-5 btn-bg border border-0 btn-text">
            {btnName}
          </button>
        )}
      </div>
    </div>
  );
};

export default DescriptionView;
