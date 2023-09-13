import React from "react";
import MenuOptions from "../../components/home/MenuOptions";
import HeroSection from "../../components/home/HeroSection";
import Services from "../../components/home/Services";
import LimitedOffer from "../../components/home/LimitedOffer";
import ClientReviews from "../../components/home/ClientReviews";
import Description from "../../components/home/Description";
import LatestNews from "../../components/home/LatestNews";
import Pictures from "../../components/home/Pictures";
import OfferCard from "../../components/home/OfferCard";

const Home = () => {
  return (
    <div>
      <MenuOptions />
      <HeroSection />
      <Services />
      <LimitedOffer />
      <ClientReviews />
      <Description />
      <LatestNews />
      <Pictures />
      <div className="fixed bottom-5 right-10 z-[1000]">
        <OfferCard />
      </div>
    </div>
  );
};

export default Home;
