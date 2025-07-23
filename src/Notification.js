import React from "react";

const Notification = ({ message, visible }) => {
  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-md text-white font-semibold transition-all duration-500 ${
        visible ? "bg-green-600 opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {message}
    </div>
  );
};

export default Notification;
