import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";

const Notification = ({ message, visible }) => {
  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-md text-white font-semibold transition-all duration-500 flex items-center gap-4 ${
        visible ? "bg-green-600 opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span>{message}</span>
      <Link to="/cart" className="text-white hover:text-gray-200">
        <GiShoppingBag size={24} />
      </Link>
    </div>
  );
};

export default Notification;
