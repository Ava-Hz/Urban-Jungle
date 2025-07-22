import React from "react";
import pic from "./../Images/stats-count.jpg";
import "./../App.css";
const PremierDestination = () => {
  return (
    <div className="grid md:grid-cols-2 bg-white w-full min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <img src={pic} alt="" className="md:p-20 p-10 m-0 " />
      </div>
      <div className="flex flex-col justify-start items-start h1font ml-5 ">
        <h1 className="md:mt-40 ml-5 md:ml-0 text-[2.625rem] w-[65%] font-medium">
          We strive to provide our customers with the highest quality
        </h1>
        <p className="text-gray-700 mt-2 ml-5 md:ml-0 w-[75%]">
          Urban Jungle Co. was founded in 1960 by a group of plant enthusiasts
          who recognized the positive impact that plants can have on our lives.
          Whether it’s purifying the air, reducing stress, or simply adding a
          touch of beauty to your environment, plants are more than just
          decoration—they’re a lifestyle.
        </p>
        <hr className="w-[75%] h-[1px] bg-gray-400 border-0 my-10 " />
        <p>
          “We love what we do & create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.”
        </p>
        <p className="text-gray-700 text-sm">Karen Lynn</p>
        <div className="text-gray-700 text-sm">CEO & Co-founder @ Company</div>
      </div>
    </div>
  );
};

export default PremierDestination;
