import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="absolute top-[50%] w-[60%] left-[50%] -translate-1/2 z-15 text-center ">
      <h4 className="block md:text-1xl mb-4 text-center h1font">
        ABOUT
      </h4>
      <h1 className="block text-4xl md:text-6xl  leading-[77px] h1font">
        We are Passionate About Our Work
      </h1>

      {/* Shop button */}
      <button className="bg-[#698927]  rounded-full px-7 py-2 mt-2 cursor-pointer hover:underline hover:opacity-75 duration-500 z-20">
        <Link to={"/shop"}>Shop Now</Link>
      </button>
    </div>
  );
};

export default Welcome;
