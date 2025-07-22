import React from "react";
import "./../App.css";
import { Link } from "react-scroll";

const PerfectPlant = () => {
  return (
    <div className="shop-footer flex flex-col overflow-x-auto max-w-full">
      <h1 className="text-5xl mb-10 text-white rounded">
        Ready to Find your Perfect Plant?
      </h1>
      <p className=" text-white rounded md:w-[25%]">
        Browse our online store or visit us in person to experience the beauty
        of nature.
      </p>
      <button className="bg-[#698927]  rounded-full px-5 py-2 mt-6 cursor-pointer hover:underline hover:opacity-75 duration-500 z-20">
        <Link to="top" smooth={true} duration={1000}>
          Shop Now
        </Link>
      </button>
    </div>
  );
};

export default PerfectPlant;
