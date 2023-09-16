import React from "react";

const NewsCard = ({ src, title, content }) => {
  return (
    <section className="p-3 w-[430px] ">
      <div className="my-2">
        <img src={src} className="w-full h-auto" alt="news" />
        <h3 className="my-3 font-medium text-2xl text-primary">{title}</h3>
        <p className="text-lg leading-7 my-2">{content}</p>
      </div>
      <div className="flex items-center gap-2 font-bold text-lg">
        READ MORE <img src="/asessts/arrow.svg" alt="arrow" />
      </div>
    </section>
  );
};

export default NewsCard;
