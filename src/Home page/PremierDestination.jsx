import React from "react";
import pic from "./../Images/stats-count.jpg";
import "./../App.css";
const PremierDestination = () => {
  return (
    <div className="grid md:grid-cols-2 bg-[#ECF4D3] w-full min-h-screen">
      <div className="flex flex-col justify-center items-center bg-[#ECF4D3]">
        <img src={pic} alt="" className="md:p-20 p-10 m-0 " loading="lazy" />
      </div>
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start h1font ml-5 bg-[#ECF4D3]">
        <h1 className="md:mt-40 md:ml-0 text-[2.625rem] w-[80%] md:w-[65%] font-medium">
          Your Premier Destination for All Green.
        </h1>
        <p className="text-gray-700 mt-2 md:ml-0 w-[90%] md:w-[75%]">
          At Urban Jungle Co., we believe in the transformative power of plants.
          Whether you’re a seasoned gardener or just starting your green
          journey, our curated selection of plants will inspire and enrich your
          living space.
        </p>
        <hr className="w-[90%] md:w-[75%] h-[1px] bg-gray-400 border-0 my-10 " />
        <div className="grid grid-cols-2 gap-2 h1font">
          <div className="flex flex-col justify-center items-start text-2xl mr-10 font-medium">
            98%
          </div>
          <div className="flex flex-col justify-center items-start text-2xl ml-10 font-medium">
            103K
          </div>
          <div className="flex flex-col justify-center items-start mr-10 text-sm text-gray-600">
            Customer Satisfaction
          </div>
          <div className="flex flex-col justify-center items-start ml-10 text-sm text-gray-600">
            Plants Sold
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremierDestination;
