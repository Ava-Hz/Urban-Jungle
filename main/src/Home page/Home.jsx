import React from "react";
import Navbar from "./Navbar";
import Features from "./Features";
import TrendingProducts from "./TrendingProducts";
import Off from "./Off";
import Categories from "./Categories";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Features />
      <TrendingProducts />
      <Off />
      <Categories />
    </div>
  );
};

export default Home;
