import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./../App.css";

const Form = () => {
  return (
    <div className="grid md:grid-cols-2  m-10">
      <div className="flex flex-col  justify-center items-start">
        <h1 className="text-4xl h2font">Send us Message</h1>

        <div className="mt-10 ml-10 flex items-center gap-4">
          <FaPhoneAlt
            size={""}
            color="black"
            className="text-7xl  bg-[#ECF4D3] p-5 rounded-full"
          />
          <div className="fex flex-col">
            <h6 className="text-2xl font-medium h1font">Phone</h6>
            <p className="text-gray-600">555-1234-678</p>
          </div>
        </div>
        <div className="mt-10 ml-10 flex items-center gap-4">
          <MdEmail
            size={""}
            color="black"
            className="text-7xl  bg-[#ECF4D3] p-5 rounded-full "
          />
          <div className="fex flex-col">
            <h6 className="text-2xl font-medium h1font">Email</h6>
            <p className="text-gray-600">mail@example.com</p>
          </div>
        </div>
        <div className="mt-10 ml-10 flex items-center gap-4">
          <FaLocationDot
            size={""}
            color="black"
            className="text-7xl  bg-[#ECF4D3] p-5 rounded-full "
          />
          <div className="fex flex-col">
            <h6 className="text-2xl font-medium h1font">Address</h6>
            <p className="text-gray-600">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center mt-10">
        <form
          method="post"
          action="https://getform.io/f/axoynqjb"
          className="flex flex-col max-w-[600px] w-full mx-auto mt-10 text-center"
        >
          <input
            className="bg-[#ECF4D3] p-2 rounded-md "
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="bg-[#ECF4D3] p-2 my-4 rounded-md"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ECF4D3] p-2 rounded-md "
            name="message"
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="text-white bg-green-700 border-2 cursor-pointer hover:opacity-[70%] px-6 py-3 my-8 mx-auto flex rounded-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
