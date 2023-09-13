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
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-primary font-medium">Latest News</h1>
        <p className="w-1/2 text-center mt-3 mb-3">
          Nourish your skin with toxic-free cosmetic products. With offers you
          can't refuse.
        </p>
      </div>
      <div className="flex flex-wrap  gap-3 mx-auto justify-center">
        {displayedNews.map((card, index) => (
          <NewsCard
            key={index}
            src={card.src}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-5">
        <button
          className="w-1/4 py-2 font-bold text-primary bg-secondary"
          onClick={toggleShowAll}
        >
          {showAll ? "SHOW LESS" : "VIEW MORE"}
        </button>
      </div>
    </section>
  );
};

export default LatestNews;
