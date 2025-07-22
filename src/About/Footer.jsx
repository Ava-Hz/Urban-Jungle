import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaXmark } from "react-icons/fa6";
import FooterIcon from "./../Home page/FooterIcon";
import "./../App.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#ECF4D3]">
      <div className="w-full grid md:grid-cols-3 text-black ">
        <FooterIcon />

        <div className="flex flex-col mt-8 mr-5 items-center w-full z-20 p-4 flex justify-center">
          <ul className="flex space-x-6 h2font">
            <li className="cursor-pointer hover:underline hover:text-green-500">
              <Link to={"/"}>Home</Link>
              
            </li>
            <li className="cursor-pointer hover:underline hover:text-green-500">
              <Link to={"/shop"}>Shop</Link>
              
            </li>
            <li className="cursor-pointer hover:underline hover:text-green-500">
              <Link to={"/about"}>About</Link>
              
            </li>
            <li className="cursor-pointer hover:underline hover:text-green-500">
              <Link to={"/contact"}>Contact</Link>
              
            </li>
          </ul>
        </div>
        <div className="flex mt-8 mr-5 w-full z-20 p-4  items-center justify-center">
          <FaXTwitter className="inline mx-2 cursor-pointer mt-1 hover:opacity-60 hover:text-green-500" />
          <FaInstagram className="inline mx-2 cursor-pointer mt-1 hover:opacity-60 hover:text-green-500" />
          <FaFacebook className="inline mx-2 cursor-pointer mt-1 hover:opacity-60 hover:text-green-500" />
          <FaYoutube className="inline mx-2 cursor-pointer mt-1 hover:opacity-60 hover:text-green-500" />
        </div>
      </div>
      <hr className=" mx-10  border-gray-300 my-5" />
      <p className="text-center text-gray-700">
        Copyright © 2025 Generic eCommerce
      </p>
    </div>
  );
};

export default Footer;
