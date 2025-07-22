import React from "react";

import { MdOutlinePayment, MdLocalShipping } from "react-icons/md";
import { FaCube } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Features = () => {
  return (
    <div className="p-5 my-10 bg-[#ECF4D3] h1font">
      <h1 className="text-center text-4xl h2font font-semibold mt-5">
        Our Core Values that Drive Everything We Do
      </h1>
      <div className="grid  md:grid-cols-3 gap-3 mt-10   ">
        <div className="flex flex-col justify-center items-center text-center">
          <span className="p-2 bg-[#ECF4D3] rounded-full">
            <FaCube className="text-4xl" />
          </span>
          <h2 className="text-2xl "> Passionate About Work</h2>
          <p className="text-sm text-gray-700 mt-2 w-[70%]">
            Passion for work is a enthusiasm and excitement for what you do.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="p-2 bg-[#ECF4D3] rounded-full">
            <FaCube className="text-4xl " />
          </div>
          <h2 className="text-2xl ">Creative team members </h2>
          <p className="text-sm text-gray-700 mt-2 w-[70%]">
            A creative team is to design and execute campaigns & encourage
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="p-2 bg-[#ECF4D3] rounded-full">
            <FaCube className="text-4xl " />
          </div>
          <h2 className="text-2xl "> Innovation solutions</h2>
          <p className="text-sm text-gray-700 mt-2 w-[70%]">
            Using either completely concepts finding new ways of using existing
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="p-2 bg-[#ECF4D3] rounded-full">
            <FaCube className="text-4xl " />
          </div>
          <h2 className="text-2xl "> Qualitiful products</h2>
          <p className="text-sm text-gray-700 mt-2 w-[70%]">
            Product quality refers to how well a product satisfies our customer
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="p-2 bg-[#ECF4D3] rounded-full">
            <FaCube className="text-4xl " />
          </div>
          <h2 className="text-2xl "> Customer satisfaction</h2>
          <p className="text-sm text-gray-700 mt-2 w-[70%]">
            Happy customers are delighted because of the customer service
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="p-2 bg-[#ECF4D3] rounded-full">
            <FaCube className="text-4xl " />
          </div>
          <h2 className="text-2xl "> Simplicity interface</h2>
          <p className="text-sm text-gray-700 mt-2 w-[70%]">
            Simplicity is used loosely to refer to the need to minimize a
            process
          </p>
        </div>
      </div>
      <hr className=" mx-10 mb-20 border-gray-300 my-10" />
    </div>
  );
};

export default Features;
