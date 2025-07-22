import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="absolute top-[50%] w-[60%] left-[50%] -translate-1/2 z-15 text-center ">
      <h4 className="block md:text-1xl mb-4 text-center h2font">CONTACT US</h4>
      <h1 className="block text-4xl md:text-6xl  leading-[77px] h1font">
        Let’s Connect
      </h1>
    </div>
  );
};

export default Welcome;
