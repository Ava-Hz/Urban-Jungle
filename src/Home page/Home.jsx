import React from "react";
import Navbar from "./Navbar";
import Features from "./Features";
import TrendingProducts from "./TrendingProducts";
import Off from "./Off";
import Categories from "./Categories";
import PremierDestination from "./PremierDestination";
import PopularPlant from "./PopularPlant";
import CustomerComments from "./CustomerComments";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Features />
      <TrendingProducts />
      <Off />
      <Categories />
      <PremierDestination />
      <PopularPlant />
      <CustomerComments />
      <Footer />
    </div>
  );
};

export default Home;
