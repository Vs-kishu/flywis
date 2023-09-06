import React from "react";
import TopHeader from "../../components/home/TopHeader";
import Navbar from "../../components/home/Navbar";
import MenuOptions from "../../components/home/MenuOptions";
import "./home.css";
import HeroSection from "../../components/home/HeroSection";
import Services from "../../components/home/Services";
import LimitedOffer from "../../components/home/LimitedOffer";
import ClientReviews from "../../components/home/ClientReviews";
import Description from "../../components/home/Description";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <MenuOptions />
      <HeroSection />
      <Services />
      <LimitedOffer />
      <ClientReviews />
      <Description />
    </>
  );
};

export default Home;
