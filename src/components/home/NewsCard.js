import React from "react";

const NewsCard = ({ src, title, content }) => {
  return (
    <div className="p-3 " style={{ width: "450px" }}>
      <div>
        <img src={src} className="img-thumbnail" alt="news" />
        <h3 className="mt-3 mb-3 btn-text">{title}</h3>
        <p>{content}</p>
      </div>
      <div className="d-flex align-items-center gap-1 f-w btn-text ">
        Read More <img src="/asessts/arrow.svg" alt="arrow" />
      </div>
    </div>
  );
};

export default NewsCard;
