import React from "react";

const NewsCard = ({ src, title, content }) => {
  return (
    <section className="p-3 w-[430px] ">
      <div>
        <img src={src} className="w-full h-auto" alt="news" />
        <h3 className="mt-3 mb-3 btn-text text-xl">{title}</h3>
        <p>{content}</p>
      </div>
      <div className="flex items-center gap-1 font-semibold text-btn-text">
        Read More <img src="/asessts/arrow.svg" alt="arrow" />
      </div>
    </section>
  );
};

export default NewsCard;
