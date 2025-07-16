import React from "react";
import Navbar from "./Navbar";
import Features from "./Features";
import TrendingProducts from "./TrendingProducts";
import Off from "./Off";
import Categories from "./Categories";
import PremierDestination from "./PremierDestination";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Features />
      <TrendingProducts />
      <Off />
      <Categories />
      <PremierDestination />
    </div>
  );
};

export default Home;
