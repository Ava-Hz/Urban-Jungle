import React from "react";
import pic from "./../Images/our-mission.jpg";
import "./../App.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
const OurMission = () => {
  return (
    <div className="grid md:grid-cols-2 bg-white w-full min-h-screen">
      <div className="flex flex-col justify-start items-start h1font mx-10  ">
        <h1 className="md:mt-40 ml-5 md:ml-0 text-[2.625rem] w-[65%] font-medium mx-10">
          Our Mission
        </h1>
        <p className="text-gray-700 mt-2 ml-5 md:ml-0 w-[75%] mx-10">
          Our mission is to make the world a greener place, one plant at a time.
          We strive to provide our customers with the highest quality plants and
          plant care products, along with the knowledge and support to help them
          thrive.
        </p>

        <div className="grid grid-cols-2 my-10">
          <div className="flex justify-center items-center m-3">
            <RiCheckboxCircleFill size={"1.5em"} color="#88AD35" />
            <span>Quality and Variety</span>
          </div>
          <div className="flex  justify-center items-center m-3">
            <RiCheckboxCircleFill size={"1.5em"} color="#88AD35" />
            <span>Expert Guidance</span>
          </div>
          <div className="flex  justify-center items-center m-3">
            <RiCheckboxCircleFill size={"1.5em"} color="#88AD35" />
            <span>Sustainable Practices</span>
          </div>
          <div className="flex justify-center items-center m-3">
            <RiCheckboxCircleFill size={"1.5em"} color="#88AD35" />
            <span>Experienced Team</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={pic} alt="" className="md:p-20 p-10 m-0 " />
      </div>
    </div>
  );
};

export default OurMission;
