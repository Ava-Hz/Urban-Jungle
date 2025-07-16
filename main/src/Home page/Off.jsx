import React from 'react'
import "./../App.css"

const Off = () => {
  return (
    <div className="offimg fullscreen-bg flex  flex-col text-white">
      <h1 className=" text-4xl z-10 text-center mt-5 font-medium">
        Flash Sale: Up to 50% Off On Select Items!
      </h1>
      <p className="mt-5 ">
        Don’t miss out on our flash sale event! For a limited time, enjoy up to
        50% off on a selection of our best-selling products.
      </p>
      {/* Shop button */}
      <button  className="border  rounded-full px-7 py-2 mt-10 cursor-pointer  hover:text-black hover:bg-white transition-colors duration-500">
        Shop Now
      </button>
    </div>
  );
}

export default Off