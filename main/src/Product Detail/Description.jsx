import React, { useState } from "react";

const Description = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      <div className="mx-10 flex items-center space-x-2">
        <p
          onClick={() => setActiveTab("description")}
          className={` cursor-pointer ${
            activeTab === "description"
              ? "text-[#698927] font-semibold"
              : "text-gray-500"
          }`}
        >
          {" "}
          Description
        </p>
        <p
          onClick={() => setActiveTab("reviews")}
          className={`cursor-pointer ${
            activeTab === "reviews"
              ? "text-[#698927] font-semibold"
              : "text-gray-500"
          }`}
        >
          Reviews
        </p>
      </div>
      {activeTab === "description" && (
        <div>
          <p className=" mx-10 text-gray-500 mt-2 md:w-[70%]">{product.des}</p>
          <p className=" mx-10 py-10 text-gray-500 mt-2 md:w-[70%]">
            {product.des2}
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <form
          method="post"
          action="https://getform.io/f/axoynqjb"
          className="flex flex-col max-w-[600px] w-full mx-auto mt-10 text-center"
        >
          <input
            className="bg-[#ccd6f6] p-2 rounded-md "
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="bg-[#ccd6f6] p-2 my-4 rounded-md"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 rounded-md "
            name="message"
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="text-white bg-green-500 border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex item-center rounded-full">
            Send Information
          </button>
        </form>
      )}
    </div>
  );
};
export default Description;
