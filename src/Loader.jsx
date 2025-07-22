// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>

      {/* Loading text */}
      <p className="text-gray-600 text-lg animate-pulse tracking-wide">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
