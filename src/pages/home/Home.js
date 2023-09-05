import React from "react";
import TopHeader from "../../components/home/TopHeader";
import Navbar from "../../components/home/Navbar";
import MenuOptions from "../../components/home/MenuOptions";
import "./home.css";
import HeroSection from "../../components/home/HeroSection";
import Services from "../../components/home/Services";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <MenuOptions />
      <HeroSection />
      <Services />
    </>
  );
};

export default Home;
