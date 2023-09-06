import React, { useState } from "react";
import NewsCard from "./NewsCard";
import { latestNews } from "../../constants/constant";

const LatestNews = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedNews = showAll ? latestNews : latestNews.slice(0, 3);

  return (
    <section className="mt-5">
      <div className="d-flex flex-column align-items-center ">
        <h1 className="btn-text">Latest News</h1>
        <p className="w-50 lh-base text-center mt-3 mb-3">
          Nourish your Skin with Toxic Free Cosmetic Products.With the offers
          that you can’t refuse.
        </p>
      </div>
      <div className="d-flex flex-wrap gap-3 mx-auto  justify-content-center">
        {displayedNews.map((card, index) => (
          <NewsCard
            key={card.title[index]}
            src={card.src}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <button
          className="w-25 py-2 fw-bold btn-bg btn-text"
          onClick={toggleShowAll}
        >
          {showAll ? "SHOW LESS" : "VIEW MORE"}
        </button>
      </div>
    </section>
  );
};

export default LatestNews;
