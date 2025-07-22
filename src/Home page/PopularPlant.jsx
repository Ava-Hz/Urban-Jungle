import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { useCart } from "../Context/CartContext";

const PopularPlant = () => {
  const [data, setData] = useState([]);
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const { addToCart } = useCart();
  useEffect(() => {
    let config = {
      headers: {
        "X-Parse-Application-Id": "fmQbd823w0wRcsTyLMVsrsGyZj0S68u9XvMrsrGl",
        "X-Parse-REST-API-Key": "Dir2JDEQAunDUhqTaFIzlsm9G4fw0l47HpCcAyo9",
      },
    };
    axios
      .get("https://parseapi.back4app.com/classes/Trend_Product", config)
      .then((respose) => setData(respose.data.results));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl h1font font-medium mt-20">
        Popular Products
      </h1>
      <div className="grid grid-cols-3 gap-3 md:px-10 mt-15">
        {data.map((item) => {
          if (!item?.IsPopular) return null;

            return (
              <div
                key={item.objectId}
                className="relative flex flex-col justify-center items-center"
                onMouseEnter={() => setHoveredItemId(item.objectId)}
                onMouseLeave={() => setHoveredItemId(null)}
              >
                <div className="p-5 w-full">
                  <img
                    src={item?.Image.url}
                    alt={item.plant_name}
                    className="object-cover w-full"
                    loading="lazy"
                  />
                  <p className="md:text-xl h1font">{item.plant_name}</p>
                  <p className="text-gray-400 text-sm">{item.place}</p>
                  <p className="text-bold">${item.Cost}.00</p>

                  {hoveredItemId === item.objectId && (
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="absolute top-2 right-2 bg-black text-white p-2 rounded-full"
                    >
                      <GiShoppingBag />
                    </button>
                  )}
                </div>
              </div>
            );

        })}
      </div>
      <hr className=" mx-10 mb-20 border-gray-300 my-10" />
    </div>
  );
};

export default PopularPlant;
