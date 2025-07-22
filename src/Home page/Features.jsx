import React from "react";

import { MdOutlinePayment, MdLocalShipping } from "react-icons/md";
import { FaCube } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Features = () => {
  return (
    <div>
      <div className="grid  md:grid-cols-4 gap-4 mt-10   ">
        <div className="flex flex-col justify-center items-center">
          <div className="p-2 bg-[#ECF4D3] rounded-full">
            <MdOutlinePayment className=" text-4xl " />
          </div>
          <h2 className="text-2xl "> Secure Payment</h2>
          <p className="">Elementum feugiat diam</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="p-2 bg-[#ECF4D3] rounded-full">
            <MdLocalShipping className="text-5xl " />
          </div>
          <h2 className="text-2xl "> Free Shipping</h2>
          <p className="">For $50 order</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="p-2 bg-[#ECF4D3] rounded-full">
            <FaCube className="text-5xl " />
          </div>
          <h2 className="text-2xl "> Delivered with Care</h2>
          <p className="">Lacinia pellentesque leo</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="p-2 bg-[#ECF4D3] rounded-full">
            <CiHeart className="text-5xl " />
          </div>
          <h2 className="text-2xl "> Excellent Service</h2>
          <p className="">Blandit gravida viverra</p>
        </div>
      </div>
      <hr className=" mx-10 mb-20 border-gray-300 my-10" />

    </div>
  );
};

export default Features;
